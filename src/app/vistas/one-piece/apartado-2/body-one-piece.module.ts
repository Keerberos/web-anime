import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';
import { BodyOnePieceComponent } from './body-one-piece.component';



@NgModule({
    declarations: [
        BodyOnePieceComponent,
    ],
    exports: [
        BodyOnePieceComponent,
    ],
    imports: [
        CommonModule,
        WebAnimeModule
    ]
})
export class BodyOnePieceModule { }
