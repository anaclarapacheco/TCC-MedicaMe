import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitarResponsavelPageRoutingModule } from './digitar-responsavel-routing.module';

import { DigitarResponsavelPage } from './digitar-responsavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitarResponsavelPageRoutingModule
  ],
  declarations: [DigitarResponsavelPage]
})
export class DigitarResponsavelPageModule {}
