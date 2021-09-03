import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosAdicionaisPage } from './dados-adicionais.page';

const routes: Routes = [
  {
    path: '',
    component: DadosAdicionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosAdicionaisPageRoutingModule {}
