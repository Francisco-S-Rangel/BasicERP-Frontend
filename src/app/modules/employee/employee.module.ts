import { NgModule } from "@angular/core";
import { SHARED_IMPORTS } from "../shared/consts/shared-imports";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { EmployeesList } from "./components/employees-list/employees-list";
import { ModalEmployee } from "./components/modal-employee/modal-employee";

@NgModule({
    declarations: [
        EmployeesList,
        ModalEmployee
    ],
    imports: [
        SHARED_IMPORTS,
        EmployeeRoutingModule,
    ]
})
export class EmployeeModule {}