import { NgModule } from "@angular/core";
import { DepartmentsList } from "./components/departments-list/departments-list";
import { SHARED_IMPORTS } from "../shared/consts/shared-imports";
import { DepartmentRoutingModule } from "./department-routing.module";
import { ModalDepartment } from "./components/modal-department/modal-department";

 @NgModule({
    declarations: [
        DepartmentsList,
        ModalDepartment
    ],
    imports: [
        SHARED_IMPORTS,
        DepartmentRoutingModule
    ]
 })
 export class DepartmentModule {}