import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasededatosPageRoutingModule } from './basededatos-routing.module';

import { BasededatosPage } from './basededatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasededatosPageRoutingModule
  ],
  declarations: [BasededatosPage]
})
export class BasededatosPageModule {}
