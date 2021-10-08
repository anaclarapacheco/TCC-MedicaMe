import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DependentePage } from './dependente.page';

const routes: Routes = [
  {
    path: '',
    component: DependentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependentePageRoutingModule {}
