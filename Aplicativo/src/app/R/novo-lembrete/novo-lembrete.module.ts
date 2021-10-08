import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoLembretePageRoutingModule } from './novo-lembrete-routing.module';

import { NovoLembretePage } from './novo-lembrete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoLembretePageRoutingModule
  ],
  declarations: [NovoLembretePage]
})
export class NovoLembretePageModule {}
