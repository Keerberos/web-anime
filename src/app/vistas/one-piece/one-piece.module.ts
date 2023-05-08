import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnePieceComponent } from './one-piece.component';
import { BodyVideoModule } from "./apartado-2/body-video.module";



@NgModule({
    declarations: [
        OnePieceComponent,
    ],
    providers: [],
    exports: [
        OnePieceComponent
    ],
    imports: [
        CommonModule,
        BodyVideoModule
    ]
})
export class OnePieceModule { }
