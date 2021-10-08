import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitarResponsavelPage } from './digitar-responsavel.page';

const routes: Routes = [
  {
    path: '',
    component: DigitarResponsavelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitarResponsavelPageRoutingModule {}
