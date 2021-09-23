(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_estoque_estoque_module_ts"],{

/***/ 8400:
/*!*****************************************************!*\
  !*** ./src/app/R/estoque/estoque-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstoquePageRoutingModule": () => (/* binding */ EstoquePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _estoque_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estoque.page */ 9564);




const routes = [
    {
        path: '',
        component: _estoque_page__WEBPACK_IMPORTED_MODULE_0__.EstoquePage
    }
];
let EstoquePageRoutingModule = class EstoquePageRoutingModule {
};
EstoquePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EstoquePageRoutingModule);



/***/ }),

/***/ 1073:
/*!*********************************************!*\
  !*** ./src/app/R/estoque/estoque.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstoquePageModule": () => (/* binding */ EstoquePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _estoque_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estoque-routing.module */ 8400);
/* harmony import */ var _estoque_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estoque.page */ 9564);







let EstoquePageModule = class EstoquePageModule {
};
EstoquePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _estoque_routing_module__WEBPACK_IMPORTED_MODULE_0__.EstoquePageRoutingModule
        ],
        declarations: [_estoque_page__WEBPACK_IMPORTED_MODULE_1__.EstoquePage]
    })
], EstoquePageModule);



/***/ }),

/***/ 9564:
/*!*******************************************!*\
  !*** ./src/app/R/estoque/estoque.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstoquePage": () => (/* binding */ EstoquePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_estoque_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./estoque.page.html */ 9935);
/* harmony import */ var _estoque_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estoque.page.scss */ 7539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let EstoquePage = class EstoquePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        //this.carregarEstoque();
    }
    //#region Editar quantidade do medicamento
    fechar() {
        if (event.target == document.getElementById('fecha')) {
            var estoque = document.getElementById('eQuantidade');
            estoque.classList.add('invisivel');
        }
    }
    editar(quantidade) {
        this.editarQuantidade = quantidade;
        var estoque = document.getElementById('eQuantidade');
        estoque.classList.remove('invisivel');
    }
    menos() {
        if (this.editarQuantidade != 0) {
            this.editarQuantidade--;
        }
    }
    mais() {
        this.editarQuantidade++;
    }
    //#endregion
    //#region Carregar o Estoque
    carregarEstoque() {
        //
    }
    //#endregion
    //#region Abrir e Fechar o Menu
    open() {
        var menu = document.getElementById('mEstoque');
        menu.classList.remove('invisivel');
    }
    close() {
        var menu = document.getElementById('mEstoque');
        menu.classList.add('invisivel');
    }
    //#endregion
    //#region SideMenu
    tutorial() {
        this.navCtrl.navigateForward('R/tutorial');
    }
    dadosAdicionais() {
        this.navCtrl.navigateForward('dados-adicionais');
    }
    adicionarResponsavel() {
        this.navCtrl.navigateForward('digitar-responsavel');
    }
    sair() {
        this.navCtrl.navigateForward('first-view');
    }
    //#endregion
    //#region Tabs
    home() {
        this.navCtrl.navigateForward('R/home');
    }
    lembretes() {
        this.navCtrl.navigateForward('R/lembretes');
    }
    dependentes() {
        this.navCtrl.navigateForward('R/dependentes');
    }
    relatorio() {
        this.navCtrl.navigateForward('R/relatorio');
    }
    //#endregion
    ngOnInit() {
    }
};
EstoquePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
EstoquePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-estoque',
        template: _raw_loader_estoque_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_estoque_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EstoquePage);



/***/ }),

/***/ 7539:
/*!*********************************************!*\
  !*** ./src/app/R/estoque/estoque.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Mid Geral*/\n.meio {\n  width: 90%;\n  margin-left: 5%;\n  margin-top: calc((100vw / 5) + 20px);\n  color: var(--dark-space-cadet);\n}\n.meio .top, .meio .content {\n  margin-top: 20px;\n}\n.meio .content {\n  margin-bottom: calc((100vw / 5) + ((100vw / 5) / 2) + 10px);\n}\n.atencao {\n  color: var(--red) !important;\n}\n#eQuantidade #back {\n  width: 100vw;\n}\n/*#endregion*/\n/*#region Estoque*/\n.medicamentos {\n  background-color: var(--lavander);\n  width: 100%;\n  height: 110px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.medicamentos img {\n  width: 50px;\n  height: 50px;\n  margin-left: 10px;\n  margin-right: 20px;\n  margin-top: 10px;\n}\n.medicamentos .text {\n  width: 70%;\n  margin-top: 10px;\n}\n.medicamentos .text svg {\n  height: 30px;\n  fill: var(--red);\n  margin-left: auto;\n}\n.medicamentos .text h3 {\n  color: var(--dark-space-cadet);\n  font-family: \"Saira\";\n}\n.medicamentos .text p {\n  color: var(--space-cadet);\n  font-family: \"Roboto\";\n}\n.medicamentos button {\n  height: 30px;\n  margin-top: auto;\n  border-top-right-radius: 0%;\n  border-top-left-radius: 0%;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.medicamentos svg {\n  fill: var(--white);\n  height: 80%;\n  margin-left: 10px;\n}\n/*#endregion*/\n/*#region Alerta*/\n.alert {\n  width: 70vw;\n  padding: 0;\n}\n.alert h3 {\n  color: var(--white);\n}\n.alert .content {\n  margin-bottom: 20px;\n}\n.alert input, .alert p, .alert button {\n  width: 50%;\n  font-size: 2em;\n}\n.alert input {\n  background-color: transparent;\n  height: 60px;\n  border: none;\n  color: var(--dark-space-cadet);\n  outline: none;\n}\n.alert p {\n  color: var(--dark-space-cadet);\n  line-height: 60px;\n}\n.alert button {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  box-shadow: none;\n  color: var(--white);\n}\n.alert button:nth-of-type(1) {\n  background-color: var(--space-cadet);\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 0;\n}\n.alert button:nth-of-type(2) {\n  background-color: var(--dark-space-cadet);\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 0;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdG9xdWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBQ0E7RUFFSSxVQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBRUEsOEJBQUE7QUFGSjtBQUtBO0VBRUksZ0JBQUE7QUFISjtBQU1BO0VBRUksMkRBQUE7QUFKSjtBQU9BO0VBRUksNEJBQUE7QUFMSjtBQVFBO0VBRUksWUFBQTtBQU5KO0FBUUEsYUFBQTtBQUVBLGtCQUFBO0FBQ0E7RUFFSSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0FBVEo7QUFXSTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWFI7QUFjSTtFQUVJLFVBQUE7RUFDQSxnQkFBQTtBQWJSO0FBZVE7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxpQkFBQTtBQWZaO0FBa0JRO0VBRUksOEJBQUE7RUFDQSxvQkFBQTtBQWpCWjtBQW9CUTtFQUVJLHlCQUFBO0VBQ0EscUJBQUE7QUFuQlo7QUF1Qkk7RUFFSSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQXhCUjtBQTJCSTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0FBM0JSO0FBOEJBLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUVBLFVBQUE7QUE5Qko7QUFnQ0k7RUFFSSxtQkFBQTtBQS9CUjtBQWtDSTtFQUVJLG1CQUFBO0FBakNSO0FBb0NJO0VBRUksVUFBQTtFQUNBLGNBQUE7QUFuQ1I7QUFzQ0k7RUFFSSw2QkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBRUEsOEJBQUE7RUFFQSxhQUFBO0FBeENSO0FBMkNJO0VBRUksOEJBQUE7RUFDQSxpQkFBQTtBQTFDUjtBQTZDSTtFQUVJLHlCQUFBO0VBQ0EsMEJBQUE7RUFFQSxnQkFBQTtFQUVBLG1CQUFBO0FBOUNSO0FBaURJO0VBRUksb0NBQUE7RUFFQSwrQkFBQTtFQUNBLDZCQUFBO0FBakRSO0FBb0RJO0VBRUkseUNBQUE7RUFFQSxnQ0FBQTtFQUNBLDRCQUFBO0FBcERSO0FBdURBLGFBQUEiLCJmaWxlIjoiZXN0b3F1ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gTWlkIEdlcmFsKi9cclxuLm1laW9cclxue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgMjBweCk7XHJcblxyXG4gICAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xyXG59XHJcblxyXG4ubWVpbyAudG9wLCAubWVpbyAuY29udGVudFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubWVpbyAuY29udGVudFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCgxMDB2dyAvIDUpICsgKCgxMDB2dyAvIDUpIC8gMikgKyAxMHB4KTtcclxufVxyXG5cclxuLmF0ZW5jYW9cclxue1xyXG4gICAgY29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2VRdWFudGlkYWRlICNiYWNrXHJcbntcclxuICAgIHdpZHRoOiAxMDB2dztcclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIEVzdG9xdWUqL1xyXG4ubWVkaWNhbWVudG9zXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmFuZGVyKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIGltZ1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHRcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIHN2Z1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBmaWxsOiB2YXIoLS1yZWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoM1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1NhaXJhJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zcGFjZS1jYWRldCk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG5cclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzdmdcclxuICAgIHtcclxuICAgICAgICBmaWxsOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcblxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gQWxlcnRhKi9cclxuLmFsZXJ0XHJcbntcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG5cclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgaDNcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCwgcCwgYnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAgICAgIFxyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuXHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XHJcblxyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcFxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b25cclxuICAgIHtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG5cclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpudGgtb2YtdHlwZSgxKVxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcclxuXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246bnRoLW9mLXR5cGUoMilcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcclxuXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG4iXX0= */");

/***/ }),

/***/ 9935:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/estoque/estoque.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"nav vertical flex\">\r\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\r\n    <div class=\"button full flex\" (click)=\"open()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"mEstoque\" class=\"menu invisivel\">\r\n    <div id=\"back\" (click)=\"close()\"></div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <h3>Configurações</h3>\r\n\r\n        <div class=\"button full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mid\">\r\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Tutorial</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"dadosAdicionais()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v2.501c-.771-.322-1.614-.501-2.5-.501-3.584 0-6.5 2.916-6.5 6.5 0 1.747.696 3.331 1.82 4.5zm-.252-23.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Dados adicionais</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"adicionarResponsavel()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Adicionar responsável</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"sair()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Sair</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"meio\">\r\n    <div class=\"top centerA\">\r\n      <h3>Seus medicamentos</h3>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"medicamentos full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Capsula.png\" alt=\"Capsula\">\r\n\r\n        <div class=\"text flex leftA\">\r\n          <h3>DipperZec</h3>\r\n\r\n          <svg viewBox=\"0 0 24 24\" (click)=\"removerMedicamento(x)\">\r\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n          </svg>\r\n\r\n          <p class=\"line\">150ml</p>\r\n        </div>\r\n\r\n        <button class=\"normal full flex\" (click)=\"editar(150)\">\r\n          Editar quantidade\r\n\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"medicamentos full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Comprimido.png\" alt=\"Capsula\">\r\n\r\n        <div class=\"text flex leftA\">\r\n          <h3>DipperZec</h3>\r\n\r\n          <svg viewBox=\"0 0 24 24\" (click)=\"removerMedicamento(x)\">\r\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n          </svg>\r\n\r\n          <p class=\"line aviso\">150ml</p>\r\n        </div>\r\n\r\n        <button class=\"danger full flex\" (click)=\"editar(150)\">\r\n          Editar quantidade\r\n\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"medicamentos full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/ContaGotas.png\" alt=\"Capsula\">\r\n\r\n        <div class=\"text flex leftA\">\r\n          <h3>DipperZec</h3>\r\n\r\n          <svg viewBox=\"0 0 24 24\" (click)=\"removerMedicamento(x)\">\r\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n          </svg>\r\n\r\n          <p class=\"line\">150ml</p>\r\n        </div>\r\n\r\n        <button class=\"normal full flex\" (click)=\"editar(150)\">\r\n          Editar quantidade\r\n\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"medicamentos full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Xarope.png\" alt=\"Capsula\">\r\n\r\n        <div class=\"text flex leftA\">\r\n          <h3>DipperZec</h3>\r\n\r\n          <svg viewBox=\"0 0 24 24\" (click)=\"removerMedicamento(x)\">\r\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n          </svg>\r\n\r\n          <p class=\"line\">150ml</p>\r\n        </div>\r\n\r\n        <button class=\"normal full flex\" (click)=\"editar(150)\">\r\n          Editar quantidade\r\n\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"medicamentos full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Capsula.png\" alt=\"Capsula\">\r\n\r\n        <div class=\"text flex leftA\">\r\n          <h3>DipperZec</h3>\r\n\r\n          <svg viewBox=\"0 0 24 24\" (click)=\"removerMedicamento(x)\">\r\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n          </svg>\r\n\r\n          <p class=\"line\">150ml</p>\r\n        </div>\r\n\r\n        <button class=\"normal full flex\" (click)=\"editar(150)\">\r\n          Editar quantidade\r\n\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"eQuantidade\" class=\"invisivel\">\r\n    <div id=\"back\"></div>\r\n\r\n    <div id=\"fecha\" class=\"centraliza full flex\" (click)=\"fechar()\">\r\n      <div class=\"alert\">\r\n        <div class=\"top full flex\">\r\n          Ajuste a quantidade\r\n        </div>\r\n\r\n        <div class=\"content flex centerA\">\r\n          <input id=\"quantidade\" type=\"number\" class=\"rightA\" [(ngModel)]=\"editarQuantidade\">\r\n          <p class=\"leftA\">ml</p>\r\n        </div>\r\n\r\n        <button (click)=\"menos()\">-</button>\r\n        <button (click)=\"mais()\">+</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tabs full flex\">\r\n    <div class=\"button full flex\" (click)=\"home()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z\"/>\r\n      </svg>\r\n      <p>Home</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"lembretes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z\"/>\r\n      </svg>\r\n      <p>Lembretes</p>\r\n    </div>\r\n\r\n    <div class=\"button middle\">\r\n      <div class=\"principal full flex\">\r\n        <svg viewBox=\"0 0 24 24\">\r\n          <path d=\"M1 24h22v-12h-22v12zm8-9h6v2h-6v-2zm15-7v2h-24v-2l4.474-8h15.087l4.439 8z\"/>\r\n        </svg>\r\n      </div>\r\n      <p>Estoque</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"dependentes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z\"/>\r\n      </svg>\r\n      <p>Dependentes</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"relatorio()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z\"/>\r\n      </svg>\r\n      <p>Relatório</p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_estoque_estoque_module_ts.js.map