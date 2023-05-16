import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-ippo',
  templateUrl: './body-ippo.component.html',
  styleUrls: ['./body-ippo.component.scss'],
})
export class BodyIppoComponent {
  constructor(private router: Router) {}
  redirect(event: any) {
    console.log('event', event);
    this.router.navigate([`ippo/${event}`]);
  }
}
