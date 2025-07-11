import { NgModule } from "@angular/core";
import { DepartmentsList } from "./components/departments-list/departments-list";
import { SHARED_IMPORTS } from "../shared/consts/shared-imports";
import { DepartmentRoutingModule } from "./department-routing.module";

 @NgModule({
    declarations: [
        DepartmentsList
    ],
    imports: [
        SHARED_IMPORTS,
        DepartmentRoutingModule
    ]
 })
 export class DepartmentModule {}