import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IppoComponent } from './ippo.component';
import { BodyIppoModule } from "./apartado-2/body-ippo.module";
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';



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
        BodyIppoModule,
        WebAnimeModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class IppoModule { }
