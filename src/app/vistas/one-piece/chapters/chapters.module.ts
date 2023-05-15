import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cap1Module } from './1/cap1.module';
import { Cap2Module } from './2/cap2.module';
import { Cap3Module } from './3/cap3.module';
import { Cap4Module } from './4/cap4.module';
import { Cap5Module } from './5/cap5.module';
import { Cap6Module } from './6/cap6.module';
import { Cap7Module } from './7/cap7.module';
import { Cap8Module } from './8/cap8.module';
import { Cap9Module } from './9/cap9.module';
import { Cap10Module } from './10/cap10.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Cap1Module,
    Cap2Module,
    Cap3Module,
    Cap4Module,
    Cap5Module,
    Cap6Module,
    Cap7Module,
    Cap8Module,
    Cap9Module,
    Cap10Module,
  ],
  exports: [],
})
export class ChaptersModule {

}
