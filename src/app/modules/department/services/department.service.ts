import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { ResponseBase } from "../../shared/models/responseBase";
import { DepartmentDTO } from "../models/departmentDTO";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {

    private readonly _API = environment.api;

    constructor(private http: HttpClient) {}

    public getDepartments(): Observable<ResponseBase<DepartmentDTO[]>> {
        return this.http.get<ResponseBase<DepartmentDTO[]>>(`${this._API}/Department`);
    }
}