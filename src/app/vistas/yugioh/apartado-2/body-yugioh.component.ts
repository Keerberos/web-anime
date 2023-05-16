import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-yugioh',
  templateUrl: './body-yugioh.component.html',
  styleUrls: ['./body-yugioh.component.scss'],
})
export class BodyYugiohComponent {
  constructor(private router: Router) {}
  redirect(event: any) {
    console.log('event', event);
    this.router.navigate([`yugioh/${event}`]);
  }
}
