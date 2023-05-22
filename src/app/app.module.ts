import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OnePieceModule } from './vistas/one-piece/one-piece.module';
import { WebAnimeModule } from 'src/libs/stencil-generated/web-anime.module';
import { IppoModule } from './vistas/ippo/ippo.module';
import { HomeModule } from './vistas/home/home.module';
import { YugiohModule } from './vistas/yugioh/yugioh.module';
import { HomeComponent } from './vistas/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { OnePieceComponent } from './vistas/one-piece/one-piece.component';
import { IppoComponent } from './vistas/ippo/ippo.component';
import { YugiohComponent } from './vistas/yugioh/yugioh.component';
import { LoginComponent } from './vistas/login/login.component';
import { SignUpComponent } from './vistas/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpModule } from './vistas/sign-up/sign-up.module';
import { LoginModule } from './vistas/login/login.module';

const appRoutes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'one', component: OnePieceComponent},
  {path: 'ippo', component: IppoComponent},
  {path: 'yugioh', component: YugiohComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    OnePieceModule,
    WebAnimeModule,
    IppoModule,
    HomeModule,
    YugiohModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    SignUpModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
