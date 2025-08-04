import { Component, OnInit } from '@angular/core';
import { DepartmentDTO, DepartmentList } from '../../models/departmentDTO';
import { DepartmentService } from '../../services/department.service';
import { activeTab } from '../../../shared/enums/activeTab';

@Component({
  selector: 'app-departments-list',
  standalone: false,
  templateUrl: './departments-list.html',
  styleUrl: './departments-list.css'
})
export class DepartmentsList implements OnInit {

  _departments: DepartmentList[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (response) => {
        console.log(response);
        this._departments = response.data.map((department: DepartmentDTO) => ({
          departmentValues: department,
          activeTab: activeTab.Info
        }));
      },
      error: (response) => {
        console.log(response);
        this._departments = [];
      }
    })
  }

  editDepartment(){

  }

  gotToEmployeeOfTheDepartment(){

  }
}
