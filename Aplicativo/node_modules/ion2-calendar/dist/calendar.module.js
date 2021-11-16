"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var calendar_controller_1 = require("./calendar.controller");
var calendar_options_provider_1 = require("./services/calendar-options.provider");
var calendar_service_1 = require("./services/calendar.service");
var components_1 = require("./components");
function calendarController(modalCtrl, calSvc) {
    return new calendar_controller_1.CalendarController(modalCtrl, calSvc);
}
exports.calendarController = calendarController;
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule_1 = CalendarModule;
    CalendarModule.forRoot = function (defaultOptions) {
        if (defaultOptions === void 0) { defaultOptions = {}; }
        return {
            ngModule: CalendarModule_1,
            providers: [
                { provide: calendar_options_provider_1.DEFAULT_CALENDAR_OPTIONS, useValue: defaultOptions }
            ]
        };
    };
    var CalendarModule_1;
    CalendarModule = CalendarModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, angular_1.IonicModule, forms_1.FormsModule],
            declarations: components_1.CALENDAR_COMPONENTS,
            exports: components_1.CALENDAR_COMPONENTS,
            entryComponents: components_1.CALENDAR_COMPONENTS,
            providers: [
                calendar_service_1.CalendarService,
                {
                    provide: calendar_controller_1.CalendarController,
                    useFactory: calendarController,
                    deps: [angular_1.ModalController, calendar_service_1.CalendarService],
                },
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
    ], CalendarModule);
    return CalendarModule;
}());
exports.CalendarModule = CalendarModule;
//# sourceMappingURL=calendar.module.js.map