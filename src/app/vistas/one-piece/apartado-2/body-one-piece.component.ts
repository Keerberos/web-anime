import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-one-piece',
  templateUrl: './body-one-piece.component.html',
  styleUrls: ['./body-one-piece.component.scss']
})
export class BodyOnePieceComponent {
   constructor(private router: Router) {}
  redirect(event: any) {
    console.log('event', event);
    this.router.navigate([`/${event}`]);
  }
}
