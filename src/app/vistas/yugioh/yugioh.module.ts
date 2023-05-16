import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YugiohComponent } from './yugioh.component';
import { BodyYugiohModule } from './apartado-2/body-yugioh.module';



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
        BodyYugiohModule
    ]
})
export class YugiohModule { }
