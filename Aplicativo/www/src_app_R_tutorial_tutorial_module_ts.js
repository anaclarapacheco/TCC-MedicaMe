(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_tutorial_tutorial_module_ts"],{

/***/ 6368:
/*!*******************************************************!*\
  !*** ./src/app/R/tutorial/tutorial-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPageRoutingModule": () => (/* binding */ TutorialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial.page */ 9012);




const routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_0__.TutorialPage
    }
];
let TutorialPageRoutingModule = class TutorialPageRoutingModule {
};
TutorialPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TutorialPageRoutingModule);



/***/ }),

/***/ 3404:
/*!***********************************************!*\
  !*** ./src/app/R/tutorial/tutorial.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPageModule": () => (/* binding */ TutorialPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial-routing.module */ 6368);
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial.page */ 9012);







let TutorialPageModule = class TutorialPageModule {
};
TutorialPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__.TutorialPageRoutingModule
        ],
        declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_1__.TutorialPage]
    })
], TutorialPageModule);



/***/ }),

/***/ 9012:
/*!*********************************************!*\
  !*** ./src/app/R/tutorial/tutorial.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPage": () => (/* binding */ TutorialPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tutorial.page.html */ 6141);
/* harmony import */ var _tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial.page.scss */ 9342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let TutorialPage = class TutorialPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    pular() {
        this.navCtrl.navigateForward('R/home');
    }
    ngOnInit() {
    }
};
TutorialPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
TutorialPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tutorial',
        template: _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TutorialPage);



/***/ }),

/***/ 9342:
/*!***********************************************!*\
  !*** ./src/app/R/tutorial/tutorial.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Tutorial*/\n.content {\n  width: 85vw;\n  height: 70vh;\n  position: relative;\n  top: 5vh;\n  left: 7.5vw;\n  color: var(--dark-space-cadet);\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 85vw;\n  height: 20vh;\n  position: absolute;\n  top: 75vh;\n  left: 7.5vw;\n}\n.bot svg {\n  height: 20px;\n  position: absolute;\n  right: 10px;\n  border-radius: 10px;\n  fill: var(--dark-space-cadet);\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBRUEsOEJBQUE7QUFGSjtBQUlBLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSko7QUFNSTtFQUVJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUVBLDZCQUFBO0FBUFI7QUFTQSxhQUFBIiwiZmlsZSI6InR1dG9yaWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qI3JlZ2lvbiBUdXRvcmlhbCovXHJcbi5jb250ZW50XHJcbntcclxuICAgIHdpZHRoOiA4NXZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDV2aDtcclxuICAgIGxlZnQ6IDcuNXZ3O1xyXG4gICAgXHJcbiAgICBjb2xvcjogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBCb3R0b20qL1xyXG4uYm90XHJcbntcclxuICAgIHdpZHRoOiA4NXZ3O1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzV2aDtcclxuICAgIGxlZnQ6IDcuNXZ3O1xyXG59XHJcbiAgICAuYm90IHN2Z1xyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZpbGw6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xyXG4gICAgfVxyXG4vKiNlbmRyZWdpb24qL1xyXG4iXX0= */");

/***/ }),

/***/ 6141:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/tutorial/tutorial.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content centerA\">\r\n    <h3>Sendo um responsável</h3>\r\n\r\n    <img src=\"\" alt=\"\">\r\n  </div>\r\n\r\n  <div class=\"bot vertical flex\">    \r\n    <button (click)=\"proximo()\" class=\"important full flex\">\r\n      Próximo\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z\"/>\r\n      </svg>\r\n    </button>\r\n    <button (click)=\"pular()\" class=\"normal\">Pular</button>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_R_tutorial_tutorial_module_ts.js.map