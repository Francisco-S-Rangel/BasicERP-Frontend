import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { NavBar } from "../components/nav-bar/nav-bar";
import { SearchBar } from "../components/search-bar/search-bar";

export const SHARED_IMPORTS = [
    CommonModule,
    FormsModule,
    RouterOutlet,
    NavBar,
    SearchBar
]