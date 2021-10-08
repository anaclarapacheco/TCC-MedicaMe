import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SintomasPage } from './sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: SintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SintomasPageRoutingModule {}
