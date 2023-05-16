import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap2Component } from './cap2.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';

@NgModule({
  declarations: [Cap2Component],
  imports: [CommonModule, WebAnimeModule],
  exports: [Cap2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cap2Module {}
