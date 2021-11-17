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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.card {\n  padding: 0px;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  background-image: url('First-View.jpg');\n  background-color: var(--baby-blue);\n  background-position-x: center;\n  background-size: cover;\n  width: 100%;\n  height: 50vh;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.top .degrade {\n  background-image: linear-gradient(0deg, var(--dark-space-cadet), rgba(23, 23, 59, 0.8), rgba(96, 99, 204, 0.5), rgba(255, 255, 255, 0.1));\n  width: 100%;\n  height: 50vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n.top .trianguloUp {\n  position: absolute;\n  top: 17vh;\n  border-left-width: 50vw;\n  border-right-width: 50vw;\n  border-bottom-width: calc(35vh + 1px);\n  z-index: 4;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 85vw;\n  position: absolute;\n  top: 40vh;\n  left: 7.5vw;\n  z-index: 5;\n}\n.mid h3 {\n  color: var(--white);\n}\n.mid button {\n  width: 100%;\n  position: relative !important;\n  left: 0px;\n  bottom: 0px;\n  margin-top: 30px;\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 85vw;\n  height: 20vh;\n  position: absolute;\n  bottom: 10vh;\n  left: 7.5vw;\n}\n.bot img {\n  height: 90%;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFFSSxZQUFBO0FBQUo7QUFFQSxhQUFBO0FBRUEsY0FBQTtBQUNBO0VBRUksdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxVQUFBO0FBSEo7QUFLSTtFQUVJLHlJQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsVUFBQTtBQU5SO0FBU0k7RUFFSSxrQkFBQTtFQUNBLFNBQUE7RUFFQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7RUFFQSxVQUFBO0FBVlI7QUFhQSxhQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUVJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsVUFBQTtBQWRKO0FBZ0JJO0VBRUksbUJBQUE7QUFmUjtBQWtCSTtFQUVJLFdBQUE7RUFFQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7QUFuQlI7QUFzQkEsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF0Qko7QUF3Qkk7RUFFSSxXQUFBO0FBdkJSO0FBMEJBLGFBQUEiLCJmaWxlIjoiZmlyc3Qtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gR2VyYWwqL1xyXG4uY2FyZFxyXG57XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBUb3AqL1xyXG4udG9wXHJcbnsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL0lNRy9UZWxhcy9GaXJzdC1WaWV3LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWJ5LWJsdWUpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgIC5kZWdyYWRlXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHZhcigtLWRhcmstc3BhY2UtY2FkZXQpLCByZ2JhKDIzLCAyMywgNTksIDAuOCksIHJnYmEoOTYsIDk5LCAyMDQsIDAuNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyaWFuZ3Vsb1VwXHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTd2aDtcclxuXHJcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDUwdnc7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA1MHZ3O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IGNhbGMoMzV2aCArIDFweCk7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDQ7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBNaWRkbGUqL1xyXG4ubWlkXHJcbntcclxuICAgIHdpZHRoOiA4NXZ3O1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDB2aDtcclxuICAgIGxlZnQ6IDcuNXZ3O1xyXG5cclxuICAgIHotaW5kZXg6IDU7XHJcblxyXG4gICAgaDNcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBCb3R0b20qL1xyXG4uYm90XHJcbntcclxuICAgIHdpZHRoOiA4NXZ3O1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwdmg7XHJcbiAgICBsZWZ0OiA3LjV2dztcclxuXHJcbiAgICBpbWdcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card\">\r\n    <div class=\"top\">\r\n      <div class=\"degrade\"></div>\r\n\r\n      <div class=\"trianguloUp leftP\"></div>\r\n      <div class=\"trianguloUp rightP\"></div>\r\n    </div>\r\n    \r\n    <div class=\"mid centerA\">\r\n      <h3>Já possui uma conta?</h3>\r\n\r\n      <button (click)=\"criarConta()\" class=\"important full flex\"><span> Criar conta</span></button>\r\n\r\n      <button (click)=\"entrar()\" class=\"normal full flex\"><span>Entrar</span></button>\r\n    </div>\r\n\r\n    <div class=\"bot full flex\">\r\n      <img src=\"../../assets/IMG/Logo/Light (Cima).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_first-view_first-view_module_ts.js.map