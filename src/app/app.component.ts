import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web-anime';
  usernameEmisor!: string;

  constructor(private router: Router, public userService: UserService) {}
  
  ngOnInit() {
    this.userService.getUsername$().subscribe((username) => {
      this.usernameEmisor = username;
      console.log('nombre usuario',this.usernameEmisor);
    });
  }
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
