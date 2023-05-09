import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';
import { BodyIppoComponent } from './body-ippo.component';



@NgModule({
    declarations: [
        BodyIppoComponent,
    ],
    exports: [
        BodyIppoComponent,
    ],
    imports: [
        CommonModule,
        WebAnimeModule
    ]
})
export class BodyIppoModule { }
