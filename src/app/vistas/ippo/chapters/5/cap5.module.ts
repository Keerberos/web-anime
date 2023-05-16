import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap5Component } from './cap5.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';

@NgModule({
  declarations: [Cap5Component],
  imports: [CommonModule, WebAnimeModule],
  exports: [Cap5Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cap5Module {}
