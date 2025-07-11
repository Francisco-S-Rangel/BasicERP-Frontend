import { Routes } from '@angular/router';
import { HomeScreen } from './modules/home/components/home-screen/home-screen';

export const routes: Routes = [
    { path: "", component: HomeScreen },
    { path: "departments", loadChildren: () => import('./modules/department/department.module').then(m => m.DepartmentModule) },
    { path: "**", redirectTo: "/" }
];
