import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DependentePageRoutingModule } from './dependente-routing.module';

import { DependentePage } from './dependente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DependentePageRoutingModule
  ],
  declarations: [DependentePage]
})
export class DependentePageModule {}
