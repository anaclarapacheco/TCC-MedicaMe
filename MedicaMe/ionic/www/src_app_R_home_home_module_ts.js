(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_home_home_module_ts"],{

/***/ 3293:
/*!***********************************************!*\
  !*** ./src/app/R/home/home-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 6294);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 933:
/*!***************************************!*\
  !*** ./src/app/R/home/home.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 3293);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 6294);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 6294:
/*!*************************************!*\
  !*** ./src/app/R/home/home.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 799);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 8021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let HomePage = class HomePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.data = "";
        let nowData = new Date();
        this.data = String(nowData.getDate()).padStart(2, '0') + '/' + String(nowData.getMonth() + 1).padStart(2, '0') + '/' + nowData.getFullYear();
    }
    //#region Abrir e Fechar o Menu
    open() {
        var menu = document.getElementById('menu');
        menu.classList.add('visivel');
        menu.classList.remove('invisivel');
    }
    close() {
        var menu = document.getElementById('menu');
        menu.classList.add('invisivel');
        menu.classList.remove('visivel');
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
    //#endregion
    //#region Tabs
    dependentes() {
        this.navCtrl.navigateForward('R/dependentes');
    }
    lembretes() {
        this.navCtrl.navigateForward('R/lembretes');
    }
    estoque() {
        this.navCtrl.navigateForward('R/estoque');
    }
    relatorio() {
        this.navCtrl.navigateForward('R/relatorio');
    }
    //#endregion
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 8021:
/*!***************************************!*\
  !*** ./src/app/R/home/home.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n/*#region Mid Geral*/\n.meio {\n  width: 90%;\n  margin-left: 5%;\n  margin-top: calc((100vw / 5) + 20px);\n  color: var(--rich-black);\n}\n.meio .top, .meio .content {\n  margin-top: 20px;\n}\n.meio .content {\n  margin-bottom: calc((100vw / 5) + 40px);\n}\n/*#endregion*/\n/*#region Medicamentos - Geral*/\n.medicamentos {\n  width: 100%;\n  height: 70px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 15px;\n}\n.medicamentos img {\n  height: 100%;\n}\n.medicamentos .text {\n  height: 100%;\n  margin-left: 20px;\n}\n.medicamentos h3 {\n  font-family: \"Saira\";\n}\n.medicamentos p {\n  color: var(--space-cadet);\n}\n/*#endregion*/\n/*#region Medicamentos - Pedente*/\n.pendente h3 {\n  color: var(--red);\n}\n.pendente .medicamentos {\n  border-color: var(--red);\n  border-style: solid;\n  border-width: 2px;\n  color: var(--rich-black);\n}\n.pendente svg {\n  height: 40px;\n}\n.tomei {\n  fill: var(--state-blue);\n  margin-left: auto;\n}\n.nao-tomei {\n  fill: var(--red);\n  margin-left: 10px;\n}\n/*#endregion*/\n/*#region Medicamentos - Próximo*/\n.proximo .medicamentos {\n  background-color: var(--lavander);\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixvQkFBQTtBQUNBO0VBRUksVUFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtFQUVBLHdCQUFBO0FBREo7QUFJQTtFQUVJLGdCQUFBO0FBRko7QUFLQTtFQUVJLHVDQUFBO0FBSEo7QUFLQSxhQUFBO0FBRUEsK0JBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FBUEo7QUFTSTtFQUVJLFlBQUE7QUFQUjtBQVVJO0VBRUksWUFBQTtFQUVBLGlCQUFBO0FBVFI7QUFZSTtFQUVJLG9CQUFBO0FBVlI7QUFZSTtFQUVJLHlCQUFBO0FBVlI7QUFZQSxhQUFBO0FBRUEsaUNBQUE7QUFDQTtFQUVJLGlCQUFBO0FBWEo7QUFjQTtFQUVJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLHdCQUFBO0FBYko7QUFnQkE7RUFFSSxZQUFBO0FBZEo7QUFpQkE7RUFFSSx1QkFBQTtFQUVBLGlCQUFBO0FBaEJKO0FBbUJBO0VBRUksZ0JBQUE7RUFFQSxpQkFBQTtBQWxCSjtBQW9CQSxhQUFBO0FBRUEsaUNBQUE7QUFDQTtFQUVJLGlDQUFBO0FBbkJKO0FBcUJBLGFBQUEiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiNyZWdpb24gTWlkIEdlcmFsKi9cbi5tZWlvIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgMjBweCk7XG4gIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrKTtcbn1cblxuLm1laW8gLnRvcCwgLm1laW8gLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWVpbyAuY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoKDEwMHZ3IC8gNSkgKyA0MHB4KTtcbn1cblxuLyojZW5kcmVnaW9uKi9cbi8qI3JlZ2lvbiBNZWRpY2FtZW50b3MgLSBHZXJhbCovXG4ubWVkaWNhbWVudG9zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLm1lZGljYW1lbnRvcyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZWRpY2FtZW50b3MgLnRleHQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubWVkaWNhbWVudG9zIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FpcmFcIjtcbn1cblxuLm1lZGljYW1lbnRvcyBwIHtcbiAgY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcbn1cblxuLyojZW5kcmVnaW9uKi9cbi8qI3JlZ2lvbiBNZWRpY2FtZW50b3MgLSBQZWRlbnRlKi9cbi5wZW5kZW50ZSBoMyB7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xufVxuXG4ucGVuZGVudGUgLm1lZGljYW1lbnRvcyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcmVkKTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrKTtcbn1cblxuLnBlbmRlbnRlIHN2ZyB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnRvbWVpIHtcbiAgZmlsbDogdmFyKC0tc3RhdGUtYmx1ZSk7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ubmFvLXRvbWVpIHtcbiAgZmlsbDogdmFyKC0tcmVkKTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qI2VuZHJlZ2lvbiovXG4vKiNyZWdpb24gTWVkaWNhbWVudG9zIC0gUHLDs3hpbW8qL1xuLnByb3hpbW8gLm1lZGljYW1lbnRvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmFuZGVyKTtcbn1cblxuLyojZW5kcmVnaW9uKi8iXX0= */");

/***/ }),

/***/ 799:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/home/home.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"nav vertical flex\">\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\n    <div class=\"button full flex\" (click)=\"open()\">\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\n      </svg>\n    </div>\n  </div>\n\n  <div id=\"menu\" class=\"invisivel\">\n    <div id=\"back\" (click)=\"close()\"></div>\n\n    <div class=\"content\">\n      <div class=\"top full flex\">\n        <h3>Configurações</h3>\n\n        <div class=\"button full flex\">\n          <svg viewBox=\"0 0 24 24\">\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\n          </svg>\n        </div>\n      </div>\n\n      <div class=\"mid\">\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\n          <div class=\"button full flex\">\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\n            </svg>\n          </div>\n          <h3>Tutorial</h3>\n        </div>\n\n        <div class=\"itens vertical flex\" (click)=\"dadosAdicionais()\">\n          <div class=\"button full flex\">\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v2.501c-.771-.322-1.614-.501-2.5-.501-3.584 0-6.5 2.916-6.5 6.5 0 1.747.696 3.331 1.82 4.5zm-.252-23.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z\"/>\n            </svg>\n          </div>\n          <h3>Dados adicionais</h3>\n        </div>\n\n        <div class=\"itens vertical flex\" (click)=\"adicionarResponsavel()\">\n          <div class=\"button full flex\">\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z\"/>\n            </svg>\n          </div>\n          <h3>Adicionar responsável</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"meio\">\n    <div class=\"top centerA\">\n      <h3>Medicamentos do dia</h3>\n      <h3>{{data}}</h3>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"pendente\">\n        <h3>Pendentes</h3>\n\n        <div class=\"medicamentos vertical flex\">\n          <img src=\"../../../assets/IMG/Logo/Light (Base).png\" alt=\"Logo do aplicativo MedicaMe\">\n\n          <div class=\"text\">\n            <h3>DipperZac</h3>\n            <p>14h00 - 25ml</p>\n          </div>\n\n          <svg viewBox=\"0 0 24 24\" class=\"tomei\">\n            <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z\"/>\n          </svg>\n\n          <svg viewBox=\"0 0 24 24\" class=\"nao-tomei\">\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\n          </svg>\n        </div>\n\n        <div class=\"medicamentos vertical flex\">\n          <img src=\"../../../assets/IMG/Logo/Light (Base).png\" alt=\"Logo do aplicativo MedicaMe\">\n\n          <div class=\"text\">\n            <h3>DipperZac</h3>\n            <p>14h00 - 25ml</p>\n          </div>\n\n          <svg viewBox=\"0 0 24 24\" class=\"tomei\">\n            <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z\"/>\n          </svg>\n\n          <svg viewBox=\"0 0 24 24\" class=\"nao-tomei\">\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\n          </svg>\n        </div>\n      </div>\n\n      <div class=\"proximo\">\n        <h3>Próximos</h3>\n\n        <div class=\"medicamentos vertical flex\">\n          <img src=\"../../../assets/IMG/Logo/Light (Base).png\" alt=\"Logo do aplicativo MedicaMe\">\n\n          <div class=\"text\">\n            <h3>DipperZac</h3>\n            <p>14h00 - 25ml</p>\n          </div>\n        </div>\n\n        <div class=\"medicamentos vertical flex\">\n          <img src=\"../../../assets/IMG/Logo/Light (Base).png\" alt=\"Logo do aplicativo MedicaMe\">\n\n          <div class=\"text\">\n            <h3>DipperZac</h3>\n            <p>14h00 - 25ml</p>\n          </div>\n        </div>\n\n        <div class=\"medicamentos vertical flex\">\n          <img src=\"../../../assets/IMG/Logo/Light (Base).png\" alt=\"Logo do aplicativo MedicaMe\">\n\n          <div class=\"text\">\n            <h3>DipperZac</h3>\n            <p>14h00 - 25ml</p>\n          </div>\n        </div>\n\n        <div class=\"medicamentos vertical flex\">\n          <img src=\"../../../assets/IMG/Logo/Light (Base).png\" alt=\"Logo do aplicativo MedicaMe\">\n\n          <div class=\"text\">\n            <h3>DipperZac</h3>\n            <p>14h00 - 25ml</p>\n          </div>\n        </div>\n\n        <div class=\"medicamentos vertical flex\">\n          <img src=\"../../../assets/IMG/Logo/Light (Base).png\" alt=\"Logo do aplicativo MedicaMe\">\n\n          <div class=\"text\">\n            <h3>DipperZac</h3>\n            <p>14h00 - 25ml</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"tabs full flex\">\n    <div class=\"button full flex\" (click)=\"dependentes()\">\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z\"/>\n      </svg>\n      <p>Dependentes</p>\n    </div>\n\n    <div class=\"button full flex\" (click)=\"lembretes()\">\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z\"/>\n      </svg>\n      <p>Lembretes</p>\n    </div>\n\n    <div class=\"button middle\">\n      <div class=\"principal full flex\">\n        <svg viewBox=\"0 0 24 24\">\n          <path d=\"M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z\"/>\n        </svg>\n      </div>\n      <p>Home</p>\n    </div>\n\n    <div class=\"button full flex\" (click)=\"estoque()\">\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M1 24h22v-12h-22v12zm8-9h6v2h-6v-2zm15-7v2h-24v-2l4.474-8h15.087l4.439 8z\"/>\n      </svg>\n      <p>Estoque</p>\n    </div>\n\n    <div class=\"button full flex\" (click)=\"relatorio()\">\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z\"/>\n      </svg>\n      <p>Relatório</p>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_home_home_module_ts.js.map