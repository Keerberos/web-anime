import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';
import { BodyYugiohComponent } from './body-video.component';



@NgModule({
    declarations: [
        BodyYugiohComponent,
    ],
    exports: [
        BodyYugiohComponent,
    ],
    imports: [
        CommonModule,
        WebAnimeModule
    ]
})
export class BodyYugiohModule { }
