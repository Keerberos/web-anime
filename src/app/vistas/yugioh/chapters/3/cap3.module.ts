import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap3Component } from './cap3.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';

@NgModule({
  declarations: [Cap3Component],
  imports: [CommonModule, WebAnimeModule],
  exports: [Cap3Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cap3Module {}
