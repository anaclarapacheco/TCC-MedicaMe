(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_dependente_dependente_module_ts"],{

/***/ 3367:
/*!*********************************************************!*\
  !*** ./src/app/dependente/dependente-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependentePageRoutingModule": () => (/* binding */ DependentePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dependente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependente.page */ 8070);




const routes = [
    {
        path: '',
        component: _dependente_page__WEBPACK_IMPORTED_MODULE_0__.DependentePage
    },
];
let DependentePageRoutingModule = class DependentePageRoutingModule {
};
DependentePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DependentePageRoutingModule);



/***/ }),

/***/ 2012:
/*!*************************************************!*\
  !*** ./src/app/dependente/dependente.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependentePageModule": () => (/* binding */ DependentePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dependente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependente-routing.module */ 3367);
/* harmony import */ var _dependente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependente.page */ 8070);







let DependentePageModule = class DependentePageModule {
};
DependentePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dependente_routing_module__WEBPACK_IMPORTED_MODULE_0__.DependentePageRoutingModule
        ],
        declarations: [_dependente_page__WEBPACK_IMPORTED_MODULE_1__.DependentePage]
    })
], DependentePageModule);



/***/ }),

/***/ 8070:
/*!***********************************************!*\
  !*** ./src/app/dependente/dependente.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependentePage": () => (/* binding */ DependentePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dependente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dependente.page.html */ 7934);
/* harmony import */ var _dependente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependente.page.scss */ 6830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let DependentePage = class DependentePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    nao() {
        this.navCtrl.navigateForward('R/tutorial');
    }
    sim() {
        this.navCtrl.navigateForward('digitar-responsavel');
    }
    dependente() {
        this.navCtrl.navigateForward('D/tutorial');
    }
    ngOnInit() {
    }
};
DependentePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
DependentePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dependente',
        template: _raw_loader_dependente_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dependente_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DependentePage);



/***/ }),

/***/ 6830:
/*!*************************************************!*\
  !*** ./src/app/dependente/dependente.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.card {\n  padding: 0px;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  background-image: url('Dependente.jpg');\n  background-color: var(--baby-blue);\n  background-position-x: center;\n  background-size: cover;\n  width: 100%;\n  height: 50vh;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.top img {\n  height: 100%;\n}\n.top .degrade {\n  background-image: linear-gradient(0deg, var(--dark-space-cadet), rgba(23, 23, 59, 0.8), rgba(96, 99, 204, 0.5), rgba(255, 255, 255, 0.1));\n  width: 100%;\n  height: 50vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n.top .trianguloUp {\n  position: absolute;\n  top: 17vh;\n  border-left-width: 50vw;\n  border-right-width: 50vw;\n  border-bottom-width: calc(35vh + 1px);\n  z-index: 4;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 85vw;\n  height: 30vh;\n  position: relative;\n  top: -10vh;\n  left: 7.5vw;\n  z-index: 5;\n}\n.mid h3 {\n  color: var(--white);\n  margin-bottom: 15px;\n}\n.mid p {\n  color: var(--white);\n}\n.mid button {\n  margin-bottom: 20px;\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 85vw;\n  height: 20vh;\n  position: relative;\n  top: -5vh;\n  left: 7.5vw;\n  z-index: 5;\n}\n.bot img {\n  height: 100%;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFFSSxZQUFBO0FBQUo7QUFFQSxhQUFBO0FBRUEsY0FBQTtBQUNBO0VBRUksdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxVQUFBO0FBSEo7QUFLSTtFQUVJLFlBQUE7QUFKUjtBQU9JO0VBRUkseUlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxVQUFBO0FBUlI7QUFXSTtFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtFQUVBLFVBQUE7QUFaUjtBQWVBLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsVUFBQTtBQWhCSjtBQWtCSTtFQUVJLG1CQUFBO0VBQ0EsbUJBQUE7QUFqQlI7QUFvQkk7RUFFSSxtQkFBQTtBQW5CUjtBQXNCSTtFQUVJLG1CQUFBO0FBckJSO0FBd0JBLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsVUFBQTtBQXpCSjtBQTJCSTtFQUVJLFlBQUE7QUExQlI7QUE2QkEsYUFBQSIsImZpbGUiOiJkZXBlbmRlbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qI3JlZ2lvbiBHZXJhbCovXHJcbi5jYXJkXHJcbntcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIFRvcCovXHJcbi50b3BcclxueyAgICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvSU1HL1RlbGFzL0RlcGVuZGVudGUuanBnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhYnktYmx1ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWdyYWRlXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHZhcigtLWRhcmstc3BhY2UtY2FkZXQpLCByZ2JhKDIzLCAyMywgNTksIDAuOCksIHJnYmEoOTYsIDk5LCAyMDQsIDAuNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyaWFuZ3Vsb1VwXHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTd2aDtcclxuXHJcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDUwdnc7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA1MHZ3O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IGNhbGMoMzV2aCArIDFweCk7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDQ7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBNaWRkbGUqL1xyXG4ubWlkXHJcbntcclxuICAgIHdpZHRoOiA4NXZ3O1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTEwdmg7XHJcbiAgICBsZWZ0OiA3LjV2dztcclxuXHJcbiAgICB6LWluZGV4OiA1O1xyXG5cclxuICAgIGgzXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHBcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBCb3R0b20qL1xyXG4uYm90XHJcbntcclxuICAgIHdpZHRoOiA4NXZ3O1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTV2aDtcclxuICAgIGxlZnQ6IDcuNXZ3O1xyXG5cclxuICAgIHotaW5kZXg6IDU7XHJcblxyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcbiJdfQ== */");

/***/ }),

/***/ 7934:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dependente/dependente.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card\">\r\n    <div class=\"top\">\r\n      <div class=\"degrade\"></div>\r\n\r\n      <div class=\"trianguloUp leftP\"></div>\r\n      <div class=\"trianguloUp rightP\"></div>\r\n    </div>\r\n    \r\n    <div class=\"mid full flex\">\r\n      <h3>Você é um dependente?</h3>\r\n\r\n      <button (click)=\"nao()\" class=\"important\">Não</button>\r\n      <button (click)=\"sim()\" class=\"normal\">Sim</button>\r\n\r\n      <div class=\"line leftA\">\r\n        <p>O que é um <a (click)=\"dependente()\">dependente?</a></p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"bot full flex\">\r\n      <img src=\"../../assets/IMG/Logo/Light (Cima).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dependente_dependente_module_ts.js.map