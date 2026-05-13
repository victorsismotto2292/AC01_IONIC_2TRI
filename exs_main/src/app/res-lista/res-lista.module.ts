import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResListaPageRoutingModule } from './res-lista-routing.module';

import { ResListaPage } from './res-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResListaPageRoutingModule
  ],
  declarations: [ResListaPage]
})
export class ResListaPageModule {}
