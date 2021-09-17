(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_cadastro_cadastro_module_ts"],{

/***/ 4981:
/*!*****************************************************!*\
  !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageRoutingModule": () => (/* binding */ CadastroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro.page */ 4809);




const routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_0__.CadastroPage
    }
];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {
};
CadastroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CadastroPageRoutingModule);



/***/ }),

/***/ 8379:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageModule": () => (/* binding */ CadastroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-routing.module */ 4981);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page */ 4809);







let CadastroPageModule = class CadastroPageModule {
};
CadastroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__.CadastroPageRoutingModule
        ],
        declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_1__.CadastroPage]
    })
], CadastroPageModule);



/***/ }),

/***/ 4809:
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPage": () => (/* binding */ CadastroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cadastro.page.html */ 5525);
/* harmony import */ var _cadastro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page.scss */ 3583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let CadastroPage = class CadastroPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    criar() {
        this.navCtrl.navigateForward('dados-adicionais');
    }
    entrarGoogle() {
        //Coisas da Api
    }
    entrar() {
        this.navCtrl.navigateForward('entrar');
    }
    ngOnInit() {
    }
};
CadastroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
CadastroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cadastro',
        template: _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cadastro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CadastroPage);



/***/ }),

/***/ 3583:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Top*/\n.top {\n  width: 70vw;\n  height: 15vh;\n  position: relative;\n  left: 15vw;\n}\n.top img {\n  width: 100%;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 85vw;\n  height: calc(85vh - 1px);\n  position: relative;\n  left: 7.5vw;\n  padding-bottom: 20px;\n}\n.mid .leftA, .mid .important, .mid p {\n  margin-top: 10px;\n}\n.mid h3, .mid span {\n  color: var(--white);\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQURKO0FBR0k7RUFFSSxXQUFBO0FBRlI7QUFLQSxhQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSx3QkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLG9CQUFBO0FBTko7QUFRSTtFQUVJLGdCQUFBO0FBUFI7QUFTSTtFQUVJLG1CQUFBO0FBUlI7QUFXQSxhQUFBIiwiZmlsZSI6ImNhZGFzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qI3JlZ2lvbiBUb3AqL1xyXG4udG9wXHJcbntcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDE1dnc7XHJcblxyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBNaWRkbGUqL1xyXG4ubWlkXHJcbntcclxuICAgIHdpZHRoOiA4NXZ3O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDg1dmggLSAxcHgpO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDcuNXZ3O1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAubGVmdEEsIC5pbXBvcnRhbnQsIHBcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaDMsIHNwYW5cclxuICAgIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcbiJdfQ== */");

/***/ }),

/***/ 5525:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card flex\">\r\n    <div class=\"top full flex\">\r\n      <img src=\"../../assets/IMG/Logo/Light (Lado).png\" alt=\"Logo do aplicativo: Medicame\">\r\n    </div>\r\n    \r\n    <div class=\"mid horizontal centerA flex\">\r\n      <h3 class=\"line\">Preencha os campos para criar sua conta!</h3>\r\n\r\n      <span class=\"line leftA\">E-mail</span>\r\n      <input type=\"email\" class=\"input\">\r\n\r\n      <span class=\"line leftA\">Senha</span>\r\n      <input type=\"password\" class=\"input\">\r\n\r\n      <span class=\"line leftA\">Confirmar senha</span>\r\n      <input type=\"password\" class=\"input\">\r\n      <p class=\"aviso invisivel\">Preencha todos os campos</p>\r\n\r\n      <button (click)=\"criar()\" class=\"important\">Criar</button>\r\n      <span class=\"line\">- ou -</span>\r\n      <button (click)=\"entrarGoogle()\" class=\"normal\">Entrar com Google</button>\r\n      \r\n      <p>Já possui uma conta? Faça <a (click)=\"entrar()\">login!</a></p>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_cadastro_cadastro_module_ts.js.map