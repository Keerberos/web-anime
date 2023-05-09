import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePieceModule } from '../one-piece/one-piece.module';

const routes: Routes = [
  {
    path: 'one-piece',
    component: OnePieceModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
