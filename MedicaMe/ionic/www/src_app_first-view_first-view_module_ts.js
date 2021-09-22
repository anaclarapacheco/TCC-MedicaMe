(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_first-view_first-view_module_ts"],{

/***/ 8117:
/*!*********************************************************!*\
  !*** ./src/app/first-view/first-view-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstViewPageRoutingModule": () => (/* binding */ FirstViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _first_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-view.page */ 2607);




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

/***/ 2286:
/*!*************************************************!*\
  !*** ./src/app/first-view/first-view.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstViewPageModule": () => (/* binding */ FirstViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _first_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-view-routing.module */ 8117);
/* harmony import */ var _first_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-view.page */ 2607);







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

/***/ 2607:
/*!***********************************************!*\
  !*** ./src/app/first-view/first-view.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstViewPage": () => (/* binding */ FirstViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_first_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./first-view.page.html */ 8658);
/* harmony import */ var _first_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-view.page.scss */ 4826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let FirstViewPage = class FirstViewPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    criarConta() {
        this.navCtrl.navigateForward("cadastro");
    }
    entrar() {
        this.navCtrl.navigateForward('entrar');
    }
    ngOnInit() {
    }
};
FirstViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
FirstViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-first-view',
        template: _raw_loader_first_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_first_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FirstViewPage);



/***/ }),

/***/ 4826:
/*!*************************************************!*\
  !*** ./src/app/first-view/first-view.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.card {\n  padding: 0px;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  background-color: var(--baby-blue);\n  width: 100%;\n  height: 50vh;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.top img {\n  height: 100%;\n}\n.degrade {\n  background-image: linear-gradient(0deg, var(--dark-space-cadet), var(--state-blue), rgba(255, 255, 255, 0.1));\n  width: 100%;\n  height: 50vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n.trianguloUp {\n  position: absolute;\n  top: 17vh;\n  border-left-width: 50vw;\n  border-right-width: 50vw;\n  border-bottom-width: calc(35vh + 1px);\n  z-index: 4;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 85vw;\n  height: 30vh;\n  position: relative;\n  top: -10vh;\n  left: 7.5vw;\n  z-index: 5;\n}\n.mid h3 {\n  margin-bottom: 15px;\n  color: var(--white);\n}\n.mid button {\n  margin-bottom: 20px;\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 85vw;\n  height: 20vh;\n  position: relative;\n  top: -7vh;\n  left: 7.5vw;\n  z-index: 5;\n}\n.bot img {\n  height: 100%;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFFSSxZQUFBO0FBQUo7QUFFQSxhQUFBO0FBRUEsY0FBQTtBQUNBO0VBRUksa0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxVQUFBO0FBSEo7QUFLSTtFQUVJLFlBQUE7QUFIUjtBQU1BO0VBRUksNkdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxVQUFBO0FBTko7QUFTQTtFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtFQUVBLFVBQUE7QUFUSjtBQVdBLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsVUFBQTtBQVpKO0FBY0k7RUFFSSxtQkFBQTtFQUNBLG1CQUFBO0FBWlI7QUFjSTtFQUVJLG1CQUFBO0FBWlI7QUFjQSxhQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLFVBQUE7QUFmSjtBQWlCSTtFQUVJLFlBQUE7QUFmUjtBQWlCQSxhQUFBIiwiZmlsZSI6ImZpcnN0LXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIEdlcmFsKi9cclxuLmNhcmRcclxue1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gVG9wKi9cclxuLnRvcFxyXG57ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFieS1ibHVlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4gICAgLnRvcCBpbWdcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4uZGVncmFkZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZyx2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KSwgdmFyKC0tc3RhdGUtYmx1ZSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi50cmlhbmd1bG9VcFxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE3dmg7XHJcblxyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDUwdnc7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDUwdnc7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiBjYWxjKDM1dmggKyAxcHgpO1xyXG5cclxuICAgIHotaW5kZXg6IDQ7XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBNaWRkbGUqL1xyXG4ubWlkXHJcbntcclxuICAgIHdpZHRoOiA4NXZ3O1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTEwdmg7XHJcbiAgICBsZWZ0OiA3LjV2dztcclxuXHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcbiAgICAubWlkIGgzXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG4gICAgLm1pZCBidXR0b25cclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIEJvdHRvbSovXHJcbi5ib3Rcclxue1xyXG4gICAgd2lkdGg6IDg1dnc7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtN3ZoO1xyXG4gICAgbGVmdDogNy41dnc7XHJcblxyXG4gICAgei1pbmRleDogNTtcclxufVxyXG4gICAgLmJvdCBpbWdcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbi8qI2VuZHJlZ2lvbiovXHJcbiJdfQ== */");

/***/ }),

/***/ 8658:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/first-view/first-view.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card\">\r\n    <div class=\"top\">\r\n      <div class=\"degrade\"></div>\r\n\r\n      <div class=\"trianguloUp leftP\"></div>\r\n      <div class=\"trianguloUp rightP\"></div>\r\n    </div>\r\n    \r\n    <div class=\"mid full flex\">\r\n      <h3>Já possui uma conta?</h3>\r\n\r\n      <button (click)=\"criarConta()\" class=\"important\">Criar conta</button>\r\n      <button (click)=\"entrar()\" class=\"normal\">Entrar</button>\r\n    </div>\r\n\r\n    <div class=\"bot full flex\">\r\n      <img src=\"../../assets/IMG/Logo/Light (Cima).png\" alt=\"Logo do aplicativo: Medicame\">\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_first-view_first-view_module_ts.js.map