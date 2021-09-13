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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Top*/\n.top {\n  background-color: var(--baby-blue);\n  width: 100%;\n  height: 50vh;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.top img {\n  height: 100%;\n}\n.degrade {\n  background-image: linear-gradient(0deg, var(--dark-space-cadet), var(--state-blue), rgba(255, 255, 255, 0.1));\n  width: 100%;\n  height: 50vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n.trianguloUp {\n  position: absolute;\n  top: 17vh;\n  border-left-width: 50vw;\n  border-right-width: 50vw;\n  border-bottom-width: calc(35vh + 1px);\n  z-index: 4;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 85vw;\n  height: 30vh;\n  position: relative;\n  top: -10vh;\n  left: 7.5vw;\n  z-index: 5;\n}\n.mid h3 {\n  margin-bottom: 15px;\n  color: var(--white);\n}\n.mid button {\n  margin-bottom: 20px;\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 85vw;\n  height: 20vh;\n  position: relative;\n  top: -7vh;\n  left: 7.5vw;\n  z-index: 5;\n}\n.bot img {\n  height: 100%;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUVJLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsVUFBQTtBQUZKO0FBSUk7RUFFSSxZQUFBO0FBRlI7QUFLQTtFQUVJLDZHQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsVUFBQTtBQUxKO0FBUUE7RUFFSSxrQkFBQTtFQUNBLFNBQUE7RUFFQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7RUFFQSxVQUFBO0FBUko7QUFVQSxhQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLFVBQUE7QUFYSjtBQWFJO0VBRUksbUJBQUE7RUFDQSxtQkFBQTtBQVhSO0FBYUk7RUFFSSxtQkFBQTtBQVhSO0FBYUEsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxVQUFBO0FBZEo7QUFnQkk7RUFFSSxZQUFBO0FBZFI7QUFnQkEsYUFBQSIsImZpbGUiOiJmaXJzdC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qI3JlZ2lvbiBUb3AqL1xyXG4udG9wXHJcbnsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWJ5LWJsdWUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbiAgICAudG9wIGltZ1xyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbi5kZWdyYWRlXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLHZhcigtLWRhcmstc3BhY2UtY2FkZXQpLCB2YXIoLS1zdGF0ZS1ibHVlKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgei1pbmRleDogMztcclxufVxyXG5cclxuLnRyaWFuZ3Vsb1VwXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTd2aDtcclxuXHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogNTB2dztcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogNTB2dztcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IGNhbGMoMzV2aCArIDFweCk7XHJcblxyXG4gICAgei1pbmRleDogNDtcclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIE1pZGRsZSovXHJcbi5taWRcclxue1xyXG4gICAgd2lkdGg6IDg1dnc7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTB2aDtcclxuICAgIGxlZnQ6IDcuNXZ3O1xyXG5cclxuICAgIHotaW5kZXg6IDU7XHJcbn1cclxuICAgIC5taWQgaDNcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB9XHJcbiAgICAubWlkIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gQm90dG9tKi9cclxuLmJvdFxyXG57XHJcbiAgICB3aWR0aDogODV2dztcclxuICAgIGhlaWdodDogMjB2aDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC03dmg7XHJcbiAgICBsZWZ0OiA3LjV2dztcclxuXHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcbiAgICAuYm90IGltZ1xyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuLyojZW5kcmVnaW9uKi9cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"card\">\n    <div class=\"top\">\n      <div class=\"degrade\"></div>\n\n      <div class=\"trianguloUp leftP\"></div>\n      <div class=\"trianguloUp rightP\"></div>\n    </div>\n    \n    <div class=\"mid full flex\">\n      <h3>Já possui uma conta?</h3>\n\n      <button (click)=\"criarConta()\" class=\"important\">Criar conta</button>\n      <button (click)=\"entrar()\" class=\"normal\">Entrar</button>\n    </div>\n\n    <div class=\"bot full flex\">\n      <img src=\"../../assets/IMG/Logo/Light (Cima).png\" alt=\"Logo do aplicativo: Medicame\">\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_first-view_first-view_module_ts.js.map