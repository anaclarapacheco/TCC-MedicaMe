(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_dados-adicionais_dados-adicionais_module_ts"],{

/***/ 3304:
/*!*********************************************************************!*\
  !*** ./src/app/dados-adicionais/dados-adicionais-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DadosAdicionaisPageRoutingModule": () => (/* binding */ DadosAdicionaisPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dados_adicionais_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dados-adicionais.page */ 5856);




const routes = [
    {
        path: '',
        component: _dados_adicionais_page__WEBPACK_IMPORTED_MODULE_0__.DadosAdicionaisPage
    }
];
let DadosAdicionaisPageRoutingModule = class DadosAdicionaisPageRoutingModule {
};
DadosAdicionaisPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DadosAdicionaisPageRoutingModule);



/***/ }),

/***/ 4597:
/*!*************************************************************!*\
  !*** ./src/app/dados-adicionais/dados-adicionais.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DadosAdicionaisPageModule": () => (/* binding */ DadosAdicionaisPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dados_adicionais_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dados-adicionais-routing.module */ 3304);
/* harmony import */ var _dados_adicionais_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dados-adicionais.page */ 5856);







let DadosAdicionaisPageModule = class DadosAdicionaisPageModule {
};
DadosAdicionaisPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dados_adicionais_routing_module__WEBPACK_IMPORTED_MODULE_0__.DadosAdicionaisPageRoutingModule
        ],
        declarations: [_dados_adicionais_page__WEBPACK_IMPORTED_MODULE_1__.DadosAdicionaisPage]
    })
], DadosAdicionaisPageModule);



/***/ }),

/***/ 5856:
/*!***********************************************************!*\
  !*** ./src/app/dados-adicionais/dados-adicionais.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DadosAdicionaisPage": () => (/* binding */ DadosAdicionaisPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dados_adicionais_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dados-adicionais.page.html */ 1919);
/* harmony import */ var _dados_adicionais_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dados-adicionais.page.scss */ 133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let DadosAdicionaisPage = class DadosAdicionaisPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
        this.customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
        this.customPickerOptions = {
            buttons: [{
                    text: 'Save',
                    handler: () => console.log('Clicked Save!')
                }, {
                    text: 'Log',
                    handler: () => {
                        console.log('Clicked Log. Do not Dismiss.');
                        return false;
                    }
                }]
        };
    }
    continuar() {
        //Verificar se os input estão vazios e dps inserir eles no banco
        this.navCtrl.navigateForward('dependente');
    }
    deixar() {
        this.navCtrl.navigateForward('dependente');
    }
    ngOnInit() {
    }
};
DadosAdicionaisPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
DadosAdicionaisPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dados-adicionais',
        template: _raw_loader_dados_adicionais_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dados_adicionais_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DadosAdicionaisPage);



/***/ }),

/***/ 133:
/*!*************************************************************!*\
  !*** ./src/app/dados-adicionais/dados-adicionais.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Top*/\n.top {\n  background-color: var(--baby-blue);\n  width: 100%;\n  height: 35vh;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.top img {\n  height: 100%;\n}\n.top .degrade {\n  background-image: linear-gradient(0deg, var(--dark-space-cadet), rgba(255, 255, 255, 0));\n  width: 100%;\n  height: calc(35vh);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n.top .trianguloUp {\n  position: absolute;\n  top: 1px;\n  border-left-width: calc(50vw + 1px);\n  border-right-width: calc(50vw + 1px);\n  border-bottom-width: calc(35vh + 1px);\n  z-index: 1000;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 85vw;\n  height: 50vh;\n  position: relative;\n  top: -6vh;\n  left: 7.5vw;\n  z-index: 5;\n}\n.mid .leftA, .mid .important, .mid .normal, .mid p {\n  margin-top: 10px;\n}\n.mid h3, .mid span {\n  color: var(--white);\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 65vw;\n  height: 15vh;\n  position: relative;\n  top: -3vh;\n  left: 17.5vw;\n  z-index: 5;\n}\n.bot img {\n  width: 100%;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZG9zLWFkaWNpb25haXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUVJLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsVUFBQTtBQUZKO0FBSUk7RUFFSSxZQUFBO0FBSFI7QUFNSTtFQUVJLHdGQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLFVBQUE7QUFQUjtBQVVJO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBRUEsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBRUEsYUFBQTtBQVhSO0FBY0EsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxVQUFBO0FBZko7QUFpQkk7RUFFSSxnQkFBQTtBQWhCUjtBQW1CSTtFQUVJLG1CQUFBO0FBbEJSO0FBcUJBLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtBQXRCSjtBQXdCSTtFQUVJLFdBQUE7QUF2QlI7QUEwQkEsYUFBQSIsImZpbGUiOiJkYWRvcy1hZGljaW9uYWlzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qI3JlZ2lvbiBUb3AqL1xyXG4udG9wXHJcbnsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWJ5LWJsdWUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1dmg7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgIGltZ1xyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVncmFkZVxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLHZhcigtLWRhcmstc3BhY2UtY2FkZXQpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMzV2aCk7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgIH1cclxuXHJcbiAgICAudHJpYW5ndWxvVXBcclxuICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxcHg7XHJcblxyXG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiBjYWxjKDUwdncgKyAxcHgpO1xyXG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogY2FsYyg1MHZ3ICsgMXB4KTtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiBjYWxjKDM1dmggKyAxcHgpO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gTWlkZGxlKi9cclxuLm1pZFxyXG57XHJcbiAgICB3aWR0aDogODV2dztcclxuICAgIGhlaWdodDogNTB2aDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC02dmg7XHJcbiAgICBsZWZ0OiA3LjV2dztcclxuXHJcbiAgICB6LWluZGV4OiA1O1xyXG5cclxuICAgIC5sZWZ0QSwgLmltcG9ydGFudCwgLm5vcm1hbCwgcFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDMsIHNwYW5cclxuICAgIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gQm90dG9tKi9cclxuLmJvdFxyXG57XHJcbiAgICB3aWR0aDogNjV2dztcclxuICAgIGhlaWdodDogMTV2aDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zdmg7XHJcbiAgICBsZWZ0OiAxNy41dnc7XHJcblxyXG4gICAgei1pbmRleDogNTtcclxuXHJcbiAgICBpbWdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG4iXX0= */");

/***/ }),

/***/ 1919:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dados-adicionais/dados-adicionais.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card flex\">\r\n    <div class=\"top full flex\">\r\n      <div class=\"degrade\"></div>\r\n\r\n      <div class=\"trianguloUp leftP\"></div>\r\n      <div class=\"trianguloUp rightP\"></div>\r\n    </div>\r\n    \r\n    <div class=\"mid horizontal centerA flex\">\r\n      <h3 class=\"line\">Dados adicionais</h3>\r\n\r\n      <span class=\"line leftA\">Nome</span>\r\n      <input type=\"text\" class=\"input\">\r\n\r\n      <span class=\"line leftA\">Data de nascimento</span>\r\n      <ion-item class=\"input\">\r\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"1950-01-01\" max=\"2040-12-31\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <p class=\"aviso invisivel\">Preencha todos os campos</p>\r\n\r\n      <button (click)=\"continuar()\" class=\"important\">Continuar</button>\r\n      <button (click)=\"deixar()\" class=\"normal\">Deixar para depois</button>\r\n    </div>\r\n\r\n    <div class=\"bot full flex\">\r\n      <img src=\"../../assets/IMG/Logo/Light (Lado).png\" alt=\"Logo do aplicativo: Medicame\">\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_dados-adicionais_dados-adicionais_module_ts.js.map