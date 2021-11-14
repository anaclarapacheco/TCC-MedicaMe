import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatorioPageRoutingModule } from './relatorio-routing.module';

import { RelatorioPage } from './relatorio.page';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
// import { DemoUtilsModule } from '../demo-utils/module';
// import { adapterFactory } from 'angular-calendar/date-adapters/moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatorioPageRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [RelatorioPage]
})
export class RelatorioPageModule {}
