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
    // Use this method if you have the back-end and the database
    // this.getDepartments();

    // You must initialize the localStorage first if it is empty.
    this.departmentService.initializeLocalStorageDepartment();
    // Use this method to use the mockup in localStorage(). 
    this.getDepartmentsByLocalStorage();
  }

  onSearch(searchValue: string): void {
    console.log(searchValue);
    const query = searchValue.toLowerCase().trim();

    if(!query) {
      this.getDepartmentsByLocalStorage();
      return;
    }

    this._departments = this._departments.filter(department =>
      department.departmentValues.name.toLowerCase().includes(query));

    console.log(this._departments);
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

  createDepartment(){
    
  }

  editDepartment(){

  }

  getDepartmentsByLocalStorage(): void {
    try {
      const response = this.departmentService.getDepartmentsMockups();
      console.log(response);

      this._departments = response.data.map((department: DepartmentDTO) => ({
        departmentValues: department,
        activeTab: activeTab.Info
      }));
    } catch (error) {
      console.log(error);
      this._departments = [];
    }
  }

}
