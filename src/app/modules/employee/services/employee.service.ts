import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { ResponseBase } from "../../shared/models/responseBase";
import { EmployeeDTO } from "../models/employeeDTO";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { EMPLOYEES_MOCKUPS } from "../../shared/consts/employees-mockups";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private readonly _API = environment.api;

    constructor(private http: HttpClient) {}

    public getEmployees(): Observable<ResponseBase<EmployeeDTO[]>> {
        return this.http.get<ResponseBase<EmployeeDTO[]>>(`${this._API}/Employee`);
    }

    // Use the mockup(localStotage) if you do not have access to the back end or database.
    public initializedLocalStorageEmployee() {
        let employees = JSON.parse(localStorage.getItem('employeesMockups') || '[]');

        employees = EMPLOYEES_MOCKUPS;
        localStorage.setItem('employeesMockups', JSON.stringify(employees));
    }

    public getEmployeesMockups(): ResponseBase<EmployeeDTO[]> {
        return JSON.parse(localStorage.getItem('employeesMockups') || '[]');
    }
}