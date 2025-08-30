import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { ResponseBase } from "../../shared/models/responseBase";
import { DepartmentDTO } from "../models/departmentDTO";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DEPARTMENTS_MOCKUPS } from "../../shared/consts/departments-mockups";

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {

    private readonly _API = environment.api;

    constructor(private http: HttpClient) {}

    public getDepartments(): Observable<ResponseBase<DepartmentDTO[]>> {
        return this.http.get<ResponseBase<DepartmentDTO[]>>(`${this._API}/Department`);
    }

    // Use the mockup(localStotage) if you do not have access to the back end or database.
    public initializeLocalStorageDepartment() {
        let departments = JSON.parse(localStorage.getItem('departmentsMockups') || '[]');

        departments = DEPARTMENTS_MOCKUPS;
        localStorage.setItem('departmentsMockups', JSON.stringify(departments));
    }

    public getDepartmentsMockups(): ResponseBase<DepartmentDTO[]> {
        return JSON.parse(localStorage.getItem('departmentsMockups') || '[]');
    }
}