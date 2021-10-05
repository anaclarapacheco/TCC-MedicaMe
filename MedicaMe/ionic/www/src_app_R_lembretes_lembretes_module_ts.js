(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_lembretes_lembretes_module_ts"],{

/***/ 3500:
/*!*********************************************************!*\
  !*** ./src/app/R/lembretes/lembretes-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LembretesPageRoutingModule": () => (/* binding */ LembretesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _lembretes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lembretes.page */ 4400);




const routes = [
    {
        path: '',
        component: _lembretes_page__WEBPACK_IMPORTED_MODULE_0__.LembretesPage
    }
];
let LembretesPageRoutingModule = class LembretesPageRoutingModule {
};
LembretesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LembretesPageRoutingModule);



/***/ }),

/***/ 7016:
/*!*************************************************!*\
  !*** ./src/app/R/lembretes/lembretes.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LembretesPageModule": () => (/* binding */ LembretesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _lembretes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lembretes-routing.module */ 3500);
/* harmony import */ var _lembretes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lembretes.page */ 4400);







let LembretesPageModule = class LembretesPageModule {
};
LembretesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _lembretes_routing_module__WEBPACK_IMPORTED_MODULE_0__.LembretesPageRoutingModule
        ],
        declarations: [_lembretes_page__WEBPACK_IMPORTED_MODULE_1__.LembretesPage]
    })
], LembretesPageModule);



/***/ }),

/***/ 4400:
/*!***********************************************!*\
  !*** ./src/app/R/lembretes/lembretes.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LembretesPage": () => (/* binding */ LembretesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_lembretes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lembretes.page.html */ 3041);
/* harmony import */ var _lembretes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lembretes.page.scss */ 6941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let LembretesPage = class LembretesPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //#region Novo Lembrete
    novoLembrete() {
        this.navCtrl.navigateForward('R/novo-lembrete');
    }
    //#endregion
    //#region Abrir e Fechar o Menu
    open() {
        var menu = document.getElementById('mLembretes');
        menu.classList.remove('invisivel');
    }
    close() {
        var menu = document.getElementById('mLembretes');
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
    dependentes() {
        this.navCtrl.navigateForward('R/dependentes');
    }
    home() {
        this.navCtrl.navigateForward('R/home');
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
LembretesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
LembretesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-lembretes',
        template: _raw_loader_lembretes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lembretes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LembretesPage);



/***/ }),

/***/ 6941:
/*!*************************************************!*\
  !*** ./src/app/R/lembretes/lembretes.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n/*#region Mid Geral*/\n.meio {\n  width: 90%;\n  margin-left: 5%;\n  margin-top: calc((100vw / 5) + 20px);\n  color: var(--dark-space-cadet);\n}\n.meio .top, .meio .content {\n  margin-top: 20px;\n}\n.meio .content {\n  margin-bottom: calc((100vw / 5) + ((100vw / 5) / 2) + 65px);\n}\n/*#endregion*/\n/*#region Lembretes*/\n.lembretes {\n  background-color: var(--lavander);\n  width: 100%;\n  height: 130px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.lembretes img {\n  width: 50px;\n  height: 50px;\n  margin-left: 10px;\n  margin-right: 20px;\n}\n.lembretes .text {\n  width: 70%;\n  margin-top: 10px;\n}\n.lembretes .text h3 {\n  color: var(--dark-space-cadet);\n  font-family: \"Saira\";\n}\n.lembretes .text p {\n  color: var(--space-cadet);\n  margin-top: 10px;\n}\n.lembretes .text .descricao {\n  font-family: \"Roboto Light\";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lembretes button {\n  height: 30px;\n  margin-top: auto;\n  border-top-right-radius: 0%;\n  border-top-left-radius: 0%;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.lembretes svg {\n  fill: var(--white);\n  height: 80%;\n  margin-left: 10px;\n}\n/*#endregion*/\n/*#region Botão*/\n.important {\n  width: 80vw;\n  position: fixed;\n  bottom: calc((100vw / 5) + ((100vw / 5) / 2) + 10px);\n  left: 10vw;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlbWJyZXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLG9CQUFBO0FBQ0E7RUFFSSxVQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBRUEsOEJBQUE7QUFESjtBQUdJO0VBRUksZ0JBQUE7QUFGUjtBQUtJO0VBRUksMkRBQUE7QUFKUjtBQU9BLGFBQUE7QUFFQSxvQkFBQTtBQUNBO0VBRUksaUNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxzQkFBQTtBQVJKO0FBVUk7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUFWUjtBQWFJO0VBRUksVUFBQTtFQUNBLGdCQUFBO0FBWlI7QUFjUTtFQUVJLDhCQUFBO0VBQ0Esb0JBQUE7QUFiWjtBQWdCUTtFQUVJLHlCQUFBO0VBRUEsZ0JBQUE7QUFoQlo7QUFtQlE7RUFFSSwyQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQW5CWjtBQXVCSTtFQUVJLFlBQUE7RUFFQSxnQkFBQTtFQUVBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FBeEJSO0FBMkJJO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBRUEsaUJBQUE7QUEzQlI7QUE4QkEsYUFBQTtBQUVBLGdCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBRUEsZUFBQTtFQUNBLG9EQUFBO0VBQ0EsVUFBQTtBQTlCSjtBQWdDQSxhQUFBIiwiZmlsZSI6ImxlbWJyZXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiNyZWdpb24gTWlkIEdlcmFsKi9cbi5tZWlvIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgMjBweCk7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcbn1cbi5tZWlvIC50b3AsIC5tZWlvIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tZWlvIC5jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygoMTAwdncgLyA1KSArICgoMTAwdncgLyA1KSAvIDIpICsgNjVweCk7XG59XG5cbi8qI2VuZHJlZ2lvbiovXG4vKiNyZWdpb24gTGVtYnJldGVzKi9cbi5sZW1icmV0ZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZhbmRlcik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmxlbWJyZXRlcyBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmxlbWJyZXRlcyAudGV4dCB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubGVtYnJldGVzIC50ZXh0IGgzIHtcbiAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xuICBmb250LWZhbWlseTogXCJTYWlyYVwiO1xufVxuLmxlbWJyZXRlcyAudGV4dCBwIHtcbiAgY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5sZW1icmV0ZXMgLnRleHQgLmRlc2NyaWNhbyB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBMaWdodFwiO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5sZW1icmV0ZXMgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi5sZW1icmV0ZXMgc3ZnIHtcbiAgZmlsbDogdmFyKC0td2hpdGUpO1xuICBoZWlnaHQ6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qI2VuZHJlZ2lvbiovXG4vKiNyZWdpb24gQm90w6NvKi9cbi5pbXBvcnRhbnQge1xuICB3aWR0aDogODB2dztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IGNhbGMoKDEwMHZ3IC8gNSkgKyAoKDEwMHZ3IC8gNSkgLyAyKSArIDEwcHgpO1xuICBsZWZ0OiAxMHZ3O1xufVxuXG4vKiNlbmRyZWdpb24qLyJdfQ== */");

/***/ }),

/***/ 3041:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/lembretes/lembretes.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"nav vertical flex\">\r\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\r\n    <div class=\"button full flex\" (click)=\"open()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"mLembretes\" class=\"menu invisivel\">\r\n    <div id=\"back\" (click)=\"close()\"></div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <h3>Configurações</h3>\r\n\r\n        <div class=\"button full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mid\">\r\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Tutorial</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"dadosAdicionais()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v2.501c-.771-.322-1.614-.501-2.5-.501-3.584 0-6.5 2.916-6.5 6.5 0 1.747.696 3.331 1.82 4.5zm-.252-23.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Dados adicionais</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"adicionarResponsavel()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Adicionar responsável</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"sair()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Sair</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"meio\">\r\n    <div class=\"top centerA\">\r\n      <h3>Seus lembretes</h3>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"lembretes full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Capsula.png\" alt=\"Logo do aplicativo MedicaMe\">\r\n\r\n        <div class=\"text leftA\">\r\n          <h3>DipperZec</h3>\r\n          <p class=\"descricao\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est saepe, dicta, sapiente quas nobis voluptates facere obcaecati numquam repellat doloremque quos! Amet numquam doloribus, ut alias cupiditate exercitationem maiores voluptates.</p>\r\n          <p>Até amanhã</p>\r\n        </div>\r\n\r\n        <button class=\"normal full flex\" (click)=\"editar()\">\r\n          Editar\r\n\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"lembretes full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Comprimido.png\" alt=\"Logo do aplicativo MedicaMe\">\r\n\r\n        <div class=\"text leftA\">\r\n          <h3>DipperZec</h3>\r\n          <p class=\"descricao\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est saepe, dicta, sapiente quas nobis voluptates facere obcaecati numquam repellat doloremque quos! Amet numquam doloribus, ut alias cupiditate exercitationem maiores voluptates.</p>\r\n          <p>Até amanhã</p>\r\n        </div>\r\n\r\n        <button class=\"normal full flex\" (click)=\"editar()\">\r\n          Editar\r\n\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"lembretes full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/ContaGotas.png\" alt=\"Logo do aplicativo MedicaMe\">\r\n\r\n        <div class=\"text leftA\">\r\n          <h3>DipperZec</h3>\r\n          <p class=\"descricao\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est saepe, dicta, sapiente quas nobis voluptates facere obcaecati numquam repellat doloremque quos! Amet numquam doloribus, ut alias cupiditate exercitationem maiores voluptates.</p>\r\n          <p>Até amanhã</p>\r\n        </div>\r\n\r\n        <button class=\"normal full flex\" (click)=\"editar()\">\r\n          Editar\r\n\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"lembretes full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Xarope.png\" alt=\"Logo do aplicativo MedicaMe\">\r\n\r\n        <div class=\"text leftA\">\r\n          <h3>DipperZec</h3>\r\n          <p class=\"descricao\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est saepe, dicta, sapiente quas nobis voluptates facere obcaecati numquam repellat doloremque quos! Amet numquam doloribus, ut alias cupiditate exercitationem maiores voluptates.</p>\r\n          <p>Até amanhã</p>\r\n        </div>\r\n\r\n        <button class=\"normal full flex\" (click)=\"editar()\">\r\n          Editar\r\n\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"lembretes full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Capsula.png\" alt=\"Logo do aplicativo MedicaMe\">\r\n\r\n        <div class=\"text leftA\">\r\n          <h3>DipperZec</h3>\r\n          <p class=\"descricao\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est saepe, dicta, sapiente quas nobis voluptates facere obcaecati numquam repellat doloremque quos! Amet numquam doloribus, ut alias cupiditate exercitationem maiores voluptates.</p>\r\n          <p>Até amanhã</p>\r\n        </div>\r\n\r\n        <button class=\"normal full flex\" (click)=\"editar()\">\r\n          Editar\r\n\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <button class=\"important\" (click)=\"novoLembrete()\">Novo lembrete</button>\r\n\r\n  <div class=\"tabs full flex\">\r\n    <div class=\"button full flex\" (click)=\"home()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z\"/>\r\n      </svg>\r\n      <p>Home</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"estoque()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M1 24h22v-12h-22v12zm8-9h6v2h-6v-2zm15-7v2h-24v-2l4.474-8h15.087l4.439 8z\"/>\r\n      </svg>\r\n      <p>Estoque</p>\r\n    </div>\r\n\r\n    <div class=\"button middle\">\r\n      <div class=\"principal full flex\">\r\n        <svg viewBox=\"0 0 24 24\">\r\n          <path d=\"M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z\"/>\r\n        </svg>\r\n      </div>\r\n      <p>Lembretes</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"dependentes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z\"/>\r\n      </svg>\r\n      <p>Dependentes</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"relatorio()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z\"/>\r\n      </svg>\r\n      <p>Relatório</p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_lembretes_lembretes_module_ts.js.map