import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LembretesPage } from './lembretes.page';

const routes: Routes = [
  {
    path: '',
    component: LembretesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LembretesPageRoutingModule {}
