import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentsList } from "./components/departments-list/departments-list";

const routes: Routes = [
    { path: "", component: DepartmentsList }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRoutingModule {}