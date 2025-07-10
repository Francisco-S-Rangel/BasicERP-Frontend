import { Component } from "@angular/core";
import { NavBar } from "./modules/shared/components/nav-bar/nav-bar";
import { SHARED_IMPORTS } from "./modules/shared/models/shared-imports";

@Component({
  selector: 'app-root',
  imports: [SHARED_IMPORTS, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
