import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstoquePageRoutingModule } from './estoque-routing.module';

import { EstoquePage } from './estoque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstoquePageRoutingModule
  ],
  declarations: [EstoquePage]
})
export class EstoquePageModule {}
