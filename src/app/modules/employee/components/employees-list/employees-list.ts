import { Component, OnInit } from '@angular/core';
import { EmployeeDTO, EmployeeListDTO } from '../../models/employeeDTO';
import { EmployeeService } from '../../services/employee.service';
import { activeTab } from '../../../shared/enums/activeTab';

@Component({
  selector: 'app-employees-list',
  standalone: false,
  templateUrl: './employees-list.html',
  styleUrl: './employees-list.css'
})
export class EmployeesList implements OnInit {

  _employees: EmployeeListDTO[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
     // Use this method if you have the back-end and the database
    // this.getEmployees();

    // You must initialize the localStorage first if it is empty.
    this.employeeService.initializedLocalStorageEmployee();
    // Use this method to use the mockup in localStorage().
     this.getEployeesByLocalStorage();
  }

  onSearch(searchValue: string): void {
    const query = searchValue.toLowerCase().trim();

    if(!query) {
      this.getEployeesByLocalStorage();
      return;
    }

    this._employees = this._employees.filter(employee =>
      employee.employeeValues.name.toLowerCase().includes(query)
    );
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response) => {
        console.log(response);
        this._employees = response.data.map((employee: EmployeeDTO) => ({
          employeeValues: employee,
          activeTab: activeTab.Info
        }));
      },
      error: (response) => {
        console.log(response);
        this._employees = [];
      }
    })
  }

  createEmployee(): void {

  }

  getEployeesByLocalStorage(): void {
    try {
      const response = this.employeeService.getEmployeesMockups();
      console.log(response);

      this._employees = response.data.map((employee: EmployeeDTO) => ({
        employeeValues: employee,
        activeTab: activeTab.Info
      }));
    } catch (error) {
      console.log(error);
      this._employees = [];
    }
  }
}
