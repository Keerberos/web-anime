import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IppoComponent } from './ippo.component';
import { BodyIppoModule } from "./apartado-2/body-ippo.module";



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
        BodyIppoModule
    ]
})
export class IppoModule { }
