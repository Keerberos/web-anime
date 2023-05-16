import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-anime';
  constructor(private router: Router) {}
  redirect(event: any) {
    console.log('event', event);
    this.router.navigate([`/${event}`]);
  }

  openSideNav() {
    const sideNav = document.getElementById("nav-crud");
    if (sideNav) {
      sideNav.style.width = "250px";
    }
  }
  
  closeSideNav() {
    const sideNav = document.getElementById("nav-crud");
    if (sideNav) {
      sideNav.style.width = "0";
    }
  }
}
