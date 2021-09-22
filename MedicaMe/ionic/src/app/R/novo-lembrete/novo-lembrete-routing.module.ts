import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoLembretePage } from './novo-lembrete.page';

const routes: Routes = [
  {
    path: '',
    component: NovoLembretePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoLembretePageRoutingModule {}
