import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';
import { BodyYugiohComponent } from './body-yugioh.component';
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
    { path: 'yugioh/1', component: Cap1Component },
    { path: 'yugioh/2', component: Cap2Component },
    { path: 'yugioh/3', component: Cap3Component },
    { path: 'yugioh/4', component: Cap4Component },
    { path: 'yugioh/5', component: Cap5Component },
    { path: 'yugioh/6', component: Cap6Component },
    { path: 'yugioh/7', component: Cap7Component },
    { path: 'yugioh/8', component: Cap8Component },
    { path: 'yugioh/9', component: Cap9Component },
    { path: 'yugioh/10', component: Cap10Component },
  ];

@NgModule({
    declarations: [
        BodyYugiohComponent,
    ],
    exports: [
        BodyYugiohComponent,
    ],
    imports: [
        CommonModule,
        WebAnimeModule,
        ChaptersModule,
        RouterModule.forRoot(chaptersRoutes),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BodyYugiohModule { }