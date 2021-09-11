import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DependentesPageRoutingModule } from './dependentes-routing.module';

import { DependentesPage } from './dependentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DependentesPageRoutingModule
  ],
  declarations: [DependentesPage]
})
export class DependentesPageModule {}
