import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IppoComponent } from './ippo.component';
import { BodyVideoModule } from "./apartado-2/body-video.module";



@NgModule({
    declarations: [
        IppoComponent,
    ],
    providers: [],
    exports: [
        IppoComponent
    ],
    imports: [
        CommonModule,
        BodyVideoModule
    ]
})
export class IppoModule { }
