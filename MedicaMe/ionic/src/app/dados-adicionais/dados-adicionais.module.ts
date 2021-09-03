import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosAdicionaisPageRoutingModule } from './dados-adicionais-routing.module';

import { DadosAdicionaisPage } from './dados-adicionais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosAdicionaisPageRoutingModule
  ],
  declarations: [DadosAdicionaisPage]
})
export class DadosAdicionaisPageModule {}
