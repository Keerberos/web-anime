import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnePieceComponent } from './one-piece.component';
import { BodyOnePieceModule } from "./apartado-2/body-one-piece.module";
// import { OnePieceRoutingModule } from './one-piece-routing.module';



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
        BodyOnePieceModule,
        // OnePieceRoutingModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class OnePieceModule { }
