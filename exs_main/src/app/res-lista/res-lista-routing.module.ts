import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResListaPage } from './res-lista.page';

const routes: Routes = [
  {
    path: '',
    component: ResListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResListaPageRoutingModule {}
