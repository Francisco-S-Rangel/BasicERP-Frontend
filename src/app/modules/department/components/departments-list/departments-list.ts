import { Component, OnInit } from '@angular/core';
import { DepartmentDTO } from '../../models/departmentDTO';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-departments-list',
  standalone: false,
  templateUrl: './departments-list.html',
  styleUrl: './departments-list.css'
})
export class DepartmentsList implements OnInit {

  _departments: DepartmentDTO[] = [];

  activeTab: 'info' | 'details' = 'info'; 

  constructor(private departmentService: DepartmentService) {}

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(){
    this.departmentService.getDepartments().subscribe({
      next: (response) => {
        console.log(response);
        this._departments = response.data;
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
