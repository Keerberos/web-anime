import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap4Component } from './cap4.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';

@NgModule({
  declarations: [Cap4Component],
  imports: [CommonModule, WebAnimeModule],
  exports: [Cap4Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cap4Module {}
