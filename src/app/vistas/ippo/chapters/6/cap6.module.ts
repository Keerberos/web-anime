import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap6Component } from './cap6.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';

@NgModule({
  declarations: [Cap6Component],
  imports: [CommonModule, WebAnimeModule],
  exports: [Cap6Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cap6Module {}
