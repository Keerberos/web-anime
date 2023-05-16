import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap1Component } from './cap1.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';

@NgModule({
  declarations: [Cap1Component ],
  imports: [CommonModule, WebAnimeModule],
  exports: [Cap1Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cap1Module {}
