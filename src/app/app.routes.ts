import { Routes } from '@angular/router';
import { HomeScreen } from './modules/home/components/home-screen/home-screen';

export const routes: Routes = [
    { path: "", component: HomeScreen },
    { path: "departments", loadChildren: () => import('./modules/department/department.module').then(m => m.DepartmentModule) },
    { path: "employees", loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule) },
    { path: "**", redirectTo: "/" }
];
