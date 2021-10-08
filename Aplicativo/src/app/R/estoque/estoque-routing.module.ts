import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstoquePage } from './estoque.page';

const routes: Routes = [
  {
    path: '',
    component: EstoquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstoquePageRoutingModule {}
