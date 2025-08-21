import { Component } from "@angular/core";
import { SHARED_IMPORTS } from "./modules/shared/consts/shared-imports";

@Component({
  selector: 'app-root',
  imports: [SHARED_IMPORTS],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
