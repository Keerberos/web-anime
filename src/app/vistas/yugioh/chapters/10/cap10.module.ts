import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap10Component } from './cap10.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';

@NgModule({
  declarations: [Cap10Component],
  imports: [CommonModule, WebAnimeModule],
  exports: [Cap10Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cap10Module {}
