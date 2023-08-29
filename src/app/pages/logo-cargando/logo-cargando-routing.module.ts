import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoCargandoPage } from './logo-cargando.page';

const routes: Routes = [
  {
    path: '',
    component: LogoCargandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoCargandoPageRoutingModule {}
