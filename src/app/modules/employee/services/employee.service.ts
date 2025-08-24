import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { ResponseBase } from "../../shared/models/responseBase";
import { EmployeeDTO } from "../models/employeeDTO";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private readonly _API = environment.api;

    constructor(private http: HttpClient) {}

    public getEmployees(): Observable<ResponseBase<EmployeeDTO[]>> {
        return this.http.get<ResponseBase<EmployeeDTO[]>>(`${this._API}/Employee`);
    }

    // Use the mockup if you do not have access to the back end or database.
    public getEmployessOfMockups(): EmployeeDTO[] {
        return [];
    }
}