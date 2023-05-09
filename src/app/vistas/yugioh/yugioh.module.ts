import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyVideoModule } from "./apartado-2/body-video.module";
import { YugiohComponent } from './yugioh.component';



@NgModule({
    declarations: [
        YugiohComponent,
    ],
    providers: [],
    exports: [
        YugiohComponent
    ],
    imports: [
        CommonModule,
        BodyVideoModule
    ]
})
export class YugiohModule { }
