import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

export class EmployeeService {

    private readonly _API = environment.api;

    constructor(private hhtp: HttpClient) {}
}