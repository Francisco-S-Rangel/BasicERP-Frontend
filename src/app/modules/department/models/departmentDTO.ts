import { EmployeeDTO } from "../../employee/models/employeeDTO";
import { activeTab } from "../../shared/enums/activeTab";

export class DepartmentDTO {
    id: string = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
    name: string = "";
    isActive: boolean = false;
    creationDate: string = "";
    modificationDate: string = "";
    imageUrl?: string = "";
    acronym: string = "";
    description: string = "";
    employees?: EmployeeDTO[] = [];
}

export class DepartmentList {
    departmentValues: DepartmentDTO = new DepartmentDTO();
    activeTab: activeTab = activeTab.Info;
}