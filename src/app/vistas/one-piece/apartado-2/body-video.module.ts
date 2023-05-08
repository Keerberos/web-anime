import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyVideoComponent } from './body-video.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';



@NgModule({
    declarations: [
        BodyVideoComponent,
    ],
    exports: [
        BodyVideoComponent,
    ],
    imports: [
        CommonModule,
        WebAnimeModule
    ]
})
export class BodyVideoModule { }
