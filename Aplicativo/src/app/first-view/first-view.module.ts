import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstViewPageRoutingModule } from './first-view-routing.module';

import { FirstViewPage } from './first-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstViewPageRoutingModule
  ],
  declarations: [FirstViewPage]
})
export class FirstViewPageModule {}
