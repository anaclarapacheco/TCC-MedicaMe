(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_first-view_first-view_module_ts"],{

/***/ 18117:
/*!*********************************************************!*\
  !*** ./src/app/first-view/first-view-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstViewPageRoutingModule": () => (/* binding */ FirstViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _first_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-view.page */ 12607);




const routes = [
    {
        path: '',
        component: _first_view_page__WEBPACK_IMPORTED_MODULE_0__.FirstViewPage
    }
];
let FirstViewPageRoutingModule = class FirstViewPageRoutingModule {
};
FirstViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FirstViewPageRoutingModule);



/***/ }),

/***/ 42286:
/*!*************************************************!*\
  !*** ./src/app/first-view/first-view.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstViewPageModule": () => (/* binding */ FirstViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _first_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-view-routing.module */ 18117);
/* harmony import */ var _first_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-view.page */ 12607);







let FirstViewPageModule = class FirstViewPageModule {
};
FirstViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _first_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.FirstViewPageRoutingModule
        ],
        declarations: [_first_view_page__WEBPACK_IMPORTED_MODULE_1__.FirstViewPage]
    })
], FirstViewPageModule);



/***/ }),

/***/ 12607:
/*!***********************************************!*\
  !*** ./src/app/first-view/first-view.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstViewPage": () => (/* binding */ FirstViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_first_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./first-view.page.html */ 98658);
/* harmony import */ var _first_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-view.page.scss */ 74826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navegation.service */ 6192);





let FirstViewPage = class FirstViewPage {
    constructor(nav) {
        this.nav = nav;
    }
    //#region Navegação
    criarConta() {
        this.nav.cadastro();
    }
    entrar() {
        this.nav.entrar();
    }
    //#endregion
    ngOnInit() {
    }
};
FirstViewPage.ctorParameters = () => [
    { type: _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService }
];
FirstViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-first-view',
        template: _raw_loader_first_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_first_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FirstViewPage);



/***/ }),

/***/ 74826:
/*!*************************************************!*\
  !*** ./src/app/first-view/first-view.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.card {\n  padding: 0px;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  background-image: url('First-View.jpg');\n  background-color: var(--baby-blue);\n  background-position-x: center;\n  background-size: cover;\n  width: 100%;\n  height: 50vh;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.top .degrade {\n  background-image: linear-gradient(0deg, var(--dark-space-cadet), rgba(23, 23, 59, 0.8), rgba(96, 99, 204, 0.5), rgba(255, 255, 255, 0.1));\n  width: 100%;\n  height: 50vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n.top .trianguloUp {\n  position: absolute;\n  top: 17vh;\n  border-left-width: 50vw;\n  border-right-width: 50vw;\n  border-bottom-width: calc(35vh + 1px);\n  z-index: 4;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 85vw;\n  position: absolute;\n  top: 40vh;\n  left: 7.5vw;\n  z-index: 5;\n}\n.mid h3 {\n  color: var(--white);\n}\n.mid button {\n  width: 100%;\n  position: relative !important;\n  left: 0px;\n  bottom: 0px;\n  margin-top: 30px;\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 85vw;\n  height: 20vh;\n  position: absolute;\n  bottom: 10vh;\n  left: 7.5vw;\n}\n.bot img {\n  height: 90%;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFFSSxZQUFBO0FBQUo7QUFFQSxhQUFBO0FBRUEsY0FBQTtBQUNBO0VBRUksdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxVQUFBO0FBSEo7QUFLSTtFQUVJLHlJQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsVUFBQTtBQU5SO0FBU0k7RUFFSSxrQkFBQTtFQUNBLFNBQUE7RUFFQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7RUFFQSxVQUFBO0FBVlI7QUFhQSxhQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUVJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsVUFBQTtBQWRKO0FBZ0JJO0VBRUksbUJBQUE7QUFmUjtBQWtCSTtFQUVJLFdBQUE7RUFFQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7QUFuQlI7QUFzQkEsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF0Qko7QUF3Qkk7RUFFSSxXQUFBO0FBdkJSO0FBMEJBLGFBQUEiLCJmaWxlIjoiZmlyc3Qtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gR2VyYWwqL1xuLmNhcmRcbntcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4vKiNlbmRyZWdpb24qL1xuXG4vKiNyZWdpb24gVG9wKi9cbi50b3BcbnsgICAgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9JTUcvVGVsYXMvRmlyc3QtVmlldy5qcGcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhYnktYmx1ZSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwdmg7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLmRlZ3JhZGVcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KSwgcmdiYSgyMywgMjMsIDU5LCAwLjgpLCByZ2JhKDk2LCA5OSwgMjA0LCAwLjUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgfVxuXG4gICAgLnRyaWFuZ3Vsb1VwXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTd2aDtcblxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogNTB2dztcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA1MHZ3O1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiBjYWxjKDM1dmggKyAxcHgpO1xuXG4gICAgICAgIHotaW5kZXg6IDQ7XG4gICAgfVxufVxuLyojZW5kcmVnaW9uKi9cblxuLyojcmVnaW9uIE1pZGRsZSovXG4ubWlkXG57XG4gICAgd2lkdGg6IDg1dnc7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDcuNXZ3O1xuXG4gICAgei1pbmRleDogNTtcblxuICAgIGgzXG4gICAge1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIH1cblxuICAgIGJ1dHRvblxuICAgIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG5cbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG59XG4vKiNlbmRyZWdpb24qL1xuXG4vKiNyZWdpb24gQm90dG9tKi9cbi5ib3RcbntcbiAgICB3aWR0aDogODV2dztcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTB2aDtcbiAgICBsZWZ0OiA3LjV2dztcblxuICAgIGltZ1xuICAgIHtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgfVxufVxuLyojZW5kcmVnaW9uKi9cbiJdfQ== */");

/***/ }),

/***/ 98658:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/first-view/first-view.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"card\">\n    <div class=\"top\">\n      <div class=\"degrade\"></div>\n\n      <div class=\"trianguloUp leftP\"></div>\n      <div class=\"trianguloUp rightP\"></div>\n    </div>\n    \n    <div class=\"mid centerA\">\n      <h3>Já possui uma conta?</h3>\n\n      <button (click)=\"criarConta()\" class=\"important full flex\"><span> Criar conta</span></button>\n\n      <button (click)=\"entrar()\" class=\"normal full flex\"><span>Entrar</span></button>\n    </div>\n\n    <div class=\"bot full flex\">\n      <img src=\"../../assets/IMG/Logo/Light (Cima).png\" alt=\"Logo do aplicativo: MedicaMe\">\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_first-view_first-view_module_ts.js.map