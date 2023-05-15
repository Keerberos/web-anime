import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';
import { ChaptersComponent } from './chapters.component';



@NgModule({
  declarations: [ChaptersComponent],
  imports: [
    CommonModule,
    WebAnimeModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ChaptersModule { }
