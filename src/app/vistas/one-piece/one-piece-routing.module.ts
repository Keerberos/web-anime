import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePieceComponent } from './one-piece.component';

const routes: Routes = [
  {
    // path: '',
    // component: OnePieceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnePieceRoutingModule { }
