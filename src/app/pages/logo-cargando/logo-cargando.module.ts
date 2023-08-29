import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoCargandoPageRoutingModule } from './logo-cargando-routing.module';

import { LogoCargandoPage } from './logo-cargando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoCargandoPageRoutingModule
  ],
  declarations: [LogoCargandoPage]
})
export class LogoCargandoPageModule {}
