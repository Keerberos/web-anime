import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap7Component } from './cap7.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';

@NgModule({
  declarations: [Cap7Component],
  imports: [CommonModule, WebAnimeModule],
  exports: [Cap7Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cap7Module {}
