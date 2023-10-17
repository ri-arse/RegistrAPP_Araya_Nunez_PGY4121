import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasededatosPage } from './basededatos.page';

const routes: Routes = [
  {
    path: '',
    component: BasededatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasededatosPageRoutingModule {}
