import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap9Component } from './cap9.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';

@NgModule({
  declarations: [Cap9Component],
  imports: [CommonModule, WebAnimeModule],
  exports: [Cap9Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cap9Module {}
