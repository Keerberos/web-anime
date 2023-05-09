import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnePieceModule } from './vistas/one-piece/one-piece.module';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';
import { IppoModule } from './vistas/ippo/ippo.module';
import { HomeModule } from './vistas/home/home.module';
import { YugiohModule } from './vistas/yugioh/yugioh.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnePieceModule,
    WebAnimeModule,
    IppoModule,
    HomeModule,
    YugiohModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
