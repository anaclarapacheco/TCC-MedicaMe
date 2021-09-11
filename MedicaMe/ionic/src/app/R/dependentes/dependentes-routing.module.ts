import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DependentesPage } from './dependentes.page';

const routes: Routes = [
  {
    path: '',
    component: DependentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependentesPageRoutingModule {}
