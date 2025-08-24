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
    this.getEmployees();
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

}
