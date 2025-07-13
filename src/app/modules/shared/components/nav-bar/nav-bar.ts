import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../consts/shared-imports';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [SHARED_IMPORTS],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  constructor(private router: Router) { }

  public goToHome(): void {
    this.router.navigate([""]);
  }

  public goToDepartments(): void {
    this.router.navigate(["/departments"]);
  }

  public goToEmployees(): void {
    this.router.navigate(["/employees"])
  }
}
