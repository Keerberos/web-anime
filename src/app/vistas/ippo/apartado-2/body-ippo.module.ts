import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';
import { BodyIppoComponent } from './body-ippo.component';
import { RouterModule, Routes } from '@angular/router';
import { Cap1Component } from '../chapters/1/cap1.component';
import { Cap10Component } from '../chapters/10/cap10.component';
import { Cap2Component } from '../chapters/2/cap2.component';
import { Cap3Component } from '../chapters/3/cap3.component';
import { Cap4Component } from '../chapters/4/cap4.component';
import { Cap5Component } from '../chapters/5/cap5.component';
import { Cap6Component } from '../chapters/6/cap6.component';
import { Cap7Component } from '../chapters/7/cap7.component';
import { Cap8Component } from '../chapters/8/cap8.component';
import { Cap9Component } from '../chapters/9/cap9.component';
import { ChaptersModule } from '../chapters/chapters.module';

const chaptersRoutes: Routes = [
  { path: 'ippo/1', component: Cap1Component },
  { path: 'ippo/2', component: Cap2Component },
  { path: 'ippo/3', component: Cap3Component },
  { path: 'ippo/4', component: Cap4Component },
  { path: 'ippo/5', component: Cap5Component },
  { path: 'ippo/6', component: Cap6Component },
  { path: 'ippo/7', component: Cap7Component },
  { path: 'ippo/8', component: Cap8Component },
  { path: 'ippo/9', component: Cap9Component },
  { path: 'ippo/10', component: Cap10Component },
];

@NgModule({
  declarations: [BodyIppoComponent],
  exports: [BodyIppoComponent],
  imports: [
    CommonModule,
    WebAnimeModule,
    ChaptersModule,
    RouterModule.forRoot(chaptersRoutes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BodyIppoModule {}
