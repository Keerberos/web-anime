import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap1Module } from './1/cap1.module';
import { Cap2Module } from './2/cap2.module';
import { Cap3Module } from './3/cap3.module';
import { Cap4Module } from './4/cap4.module';
import { Cap5Module } from './5/cap5.module';
import { Cap6Module } from './6/cap6.module';
import { Cap7Module } from './7/cap7.module';
import { Cap8Module } from './8/cap8.module';
import { Cap9Module } from './9/cap9.module';
import { Cap10Module } from './10/cap10.module';
import { RouterModule, Routes } from '@angular/router';
import { Cap1Component } from './1/cap1.component';
import { Cap10Component } from './10/cap10.component';
import { Cap2Component } from './2/cap2.component';
import { Cap3Component } from './3/cap3.component';
import { Cap4Component } from './4/cap4.component';
import { Cap5Component } from './5/cap5.component';
import { Cap6Component } from './6/cap6.component';
import { Cap7Component } from './7/cap7.component';
import { Cap8Component } from './8/cap8.component';
import { Cap9Component } from './9/cap9.component';

const chaptersRoutes: Routes = [
  { path: '1', component: Cap1Component },
  { path: '2', component: Cap2Component },
  { path: '3', component: Cap3Component },
  { path: '4', component: Cap4Component },
  { path: '5', component: Cap5Component },
  { path: '6', component: Cap6Component },
  { path: '7', component: Cap7Component },
  { path: '8', component: Cap8Component },
  { path: '9', component: Cap9Component },
  { path: '10', component: Cap10Component },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Cap1Module,
    Cap2Module,
    Cap3Module,
    Cap4Module,
    Cap5Module,
    Cap6Module,
    Cap7Module,
    Cap8Module,
    Cap9Module,
    Cap10Module,
    RouterModule.forRoot(chaptersRoutes),
  ],
  exports: [RouterModule],
})
export class ChaptersModule {

}
