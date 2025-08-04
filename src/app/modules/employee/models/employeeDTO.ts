import { activeTab } from './../../shared/enums/activeTab';
import { genderEmployee } from "../enums/employeeEnum";

export class EmployeeDTO {
    id: string = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
    name: string = "";
    isActive: boolean = false;
    creationDate: string = "";
    modificationDate: string = "";
    imageUrl?: string = "";
    documentId: string = "";
    birthDate: string = "";
    role: string = "";
    gender: genderEmployee = genderEmployee.male;
    departmentId: string = "";
}

export class EmployeeListDTO {
    employeeValues: EmployeeDTO = new EmployeeDTO();
    activeTab: activeTab = activeTab.Info;
}