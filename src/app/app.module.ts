import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnePieceModule } from './vistas/one-piece/one-piece.module';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-components/web-anime.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnePieceModule,
    WebAnimeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
