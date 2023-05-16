import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap8Component } from './cap8.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';

@NgModule({
  declarations: [Cap8Component],
  imports: [CommonModule, WebAnimeModule],
  exports: [Cap8Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cap8Module {}
