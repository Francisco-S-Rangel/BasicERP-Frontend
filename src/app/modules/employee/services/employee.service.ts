import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

export class EmployeeService {

    private readonly API = environment.api;

    constructor(private hhtp: HttpClient) {}
}