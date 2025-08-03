import { NgModule } from "@angular/core";
import { SHARED_IMPORTS } from "../shared/consts/shared-imports";
import { EmployeeRoutingModule } from "./employee-routing.module";

@NgModule({
    declarations: [],
    imports: [
        SHARED_IMPORTS,
        EmployeeRoutingModule,
    ]
})
export class EmployeeModule {}