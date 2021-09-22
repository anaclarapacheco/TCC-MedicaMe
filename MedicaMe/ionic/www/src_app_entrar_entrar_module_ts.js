(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_entrar_entrar_module_ts"],{

/***/ 9428:
/*!*************************************************!*\
  !*** ./src/app/entrar/entrar-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrarPageRoutingModule": () => (/* binding */ EntrarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _entrar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrar.page */ 3540);




const routes = [
    {
        path: '',
        component: _entrar_page__WEBPACK_IMPORTED_MODULE_0__.EntrarPage
    }
];
let EntrarPageRoutingModule = class EntrarPageRoutingModule {
};
EntrarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EntrarPageRoutingModule);



/***/ }),

/***/ 1096:
/*!*****************************************!*\
  !*** ./src/app/entrar/entrar.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrarPageModule": () => (/* binding */ EntrarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _entrar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrar-routing.module */ 9428);
/* harmony import */ var _entrar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrar.page */ 3540);







let EntrarPageModule = class EntrarPageModule {
};
EntrarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _entrar_routing_module__WEBPACK_IMPORTED_MODULE_0__.EntrarPageRoutingModule
        ],
        declarations: [_entrar_page__WEBPACK_IMPORTED_MODULE_1__.EntrarPage]
    })
], EntrarPageModule);



/***/ }),

/***/ 3540:
/*!***************************************!*\
  !*** ./src/app/entrar/entrar.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrarPage": () => (/* binding */ EntrarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_entrar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./entrar.page.html */ 2127);
/* harmony import */ var _entrar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrar.page.scss */ 6221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let EntrarPage = class EntrarPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    entrar() {
        //Verificar se o usuário existe e ver se é Dependete ou Responsável
        this.navCtrl.navigateForward('R/home');
        //this.navCtrl.navigateForward('D/home');
    }
    cadastrar() {
        this.navCtrl.navigateForward('cadastro');
    }
    ngOnInit() {
    }
};
EntrarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
EntrarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-entrar',
        template: _raw_loader_entrar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_entrar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EntrarPage);



/***/ }),

/***/ 6221:
/*!*****************************************!*\
  !*** ./src/app/entrar/entrar.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.content {\n  overflow: hidden;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  width: 80vw;\n  overflow: hidden;\n}\n.top img {\n  width: 90%;\n  margin-bottom: 30px;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  overflow: hidden;\n}\n.mid span, .mid p, .mid button {\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n.mid span, .mid h3 {\n  color: var(--white);\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQUE7QUFDQTtFQUVJLGdCQUFBO0FBQUo7QUFFQSxhQUFBO0FBRUEsY0FBQTtBQUNBO0VBRUksV0FBQTtFQUNBLGdCQUFBO0FBREo7QUFHSTtFQUVJLFVBQUE7RUFDQSxtQkFBQTtBQUZSO0FBS0EsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU1JO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQUxSO0FBUUk7RUFFSSxtQkFBQTtBQVBSO0FBVUEsYUFBQSIsImZpbGUiOiJlbnRyYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIEdlcmFsKi9cclxuLmNvbnRlbnRcclxue1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIFRvcCovXHJcbi50b3Bcclxue1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGltZ1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIE1pZGRsZSovXHJcbi5taWRcclxue1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIHNwYW4sIHAsIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLCBoM1xyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuIl19 */");

/***/ }),

/***/ 2127:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entrar/entrar.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card full flex\">\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <img src=\"../../assets/IMG/Logo/Light (Lado).png\" alt=\"Logo do aplicativo: Medicame\">\r\n      </div>\r\n      \r\n      <div class=\"mid horizontal flex centerA\">\r\n        <h3 class=\"line\">Preencha os campos para criar sua conta!</h3>\r\n\r\n        <span class=\"line leftA\">E-mail</span>\r\n        <input type=\"email\" class=\"input\">\r\n\r\n        <span class=\"line leftA\">Senha</span>\r\n        <input type=\"password\" class=\"input\">\r\n        <p class=\"aviso invisivel\">Preencha todos os campos</p>\r\n\r\n        <button (click)=\"entrar()\" class=\"important\">Entrar</button>\r\n        \r\n        <p>Não possui uma conta? <a (click)=\"cadastrar()\">Cadastre-se!</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_entrar_entrar_module_ts.js.map