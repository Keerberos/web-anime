import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';



@NgModule({
    declarations: [
        HomeComponent,
    ],
    providers: [],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        WebAnimeModule,
    ]
})
export class HomeModule { }
