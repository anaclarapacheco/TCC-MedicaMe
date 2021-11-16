(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_relatorio_relatorio_module_ts"],{

/***/ 3397:
/*!*********************************************************!*\
  !*** ./src/app/R/relatorio/relatorio-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelatorioPageRoutingModule": () => (/* binding */ RelatorioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _relatorio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relatorio.page */ 5372);




const routes = [
    {
        path: '',
        component: _relatorio_page__WEBPACK_IMPORTED_MODULE_0__.RelatorioPage
    }
];
let RelatorioPageRoutingModule = class RelatorioPageRoutingModule {
};
RelatorioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RelatorioPageRoutingModule);



/***/ }),

/***/ 3911:
/*!*************************************************!*\
  !*** ./src/app/R/relatorio/relatorio.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelatorioPageModule": () => (/* binding */ RelatorioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _relatorio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relatorio-routing.module */ 3397);
/* harmony import */ var _relatorio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relatorio.page */ 5372);







let RelatorioPageModule = class RelatorioPageModule {
};
RelatorioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _relatorio_routing_module__WEBPACK_IMPORTED_MODULE_0__.RelatorioPageRoutingModule
        ],
        declarations: [_relatorio_page__WEBPACK_IMPORTED_MODULE_1__.RelatorioPage]
    })
], RelatorioPageModule);



/***/ }),

/***/ 5372:
/*!***********************************************!*\
  !*** ./src/app/R/relatorio/relatorio.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelatorioPage": () => (/* binding */ RelatorioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_relatorio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./relatorio.page.html */ 8519);
/* harmony import */ var _relatorio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relatorio.page.scss */ 2658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 8914);






let RelatorioPage = class RelatorioPage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
    }
    //#endregion
    //#region Abrir e Fechar o Menu
    open() {
        //Variaveis
        var menu = document.getElementById('mRelatorio');
        var content = document.getElementById('rMenu');
        //Abre
        menu.classList.remove('invisivel');
        //Preparação
        menu.classList.remove('OutFundo');
        content.classList.remove('OutMenu');
        //Animação
        setTimeout(function () {
            menu.classList.add('InFundo');
            content.classList.add('InMenu');
        }, 100);
    }
    close() {
        //Variaveis
        var menu = document.getElementById('mRelatorio');
        var content = document.getElementById('rMenu');
        //Preparação
        menu.classList.remove('InFundo');
        content.classList.remove('InMenu');
        //Animação
        menu.classList.add('OutFundo');
        content.classList.add('OutMenu');
        //Fecha
        setTimeout(function () {
            menu.classList.add('invisivel');
        }, 301);
    }
    //#endregion
    //#region Navegação
    tutorial() {
        localStorage.setItem('RTutorial', 'rRelatorio');
        this.nav.rTutorial();
    }
    dadosAdicionais() {
        localStorage.setItem('dadosAdicionais', 'rRelatorio');
        this.nav.dadosAdicionais();
    }
    adicionarResponsavel() {
        localStorage.setItem('digitarResponsavel', 'rRelatorio');
        this.nav.digitarResponsavel();
    }
    removDependente() {
        this.nav.rDependente();
    }
    sair() {
        this.servidor.limpar();
    }
    home() {
        this.nav.rHome();
    }
    lembretes() {
        this.nav.rLembretes();
    }
    estoque() {
        this.nav.rEstoque();
    }
    dependentes() {
        this.nav.rDependentes();
    }
    relatorio() {
        this.nav.rRelatorio();
    }
    //#endregion
    //#region ViewWillEnter
    ionViewWillEnter() {
        //Verificar Login
        this.servidor.verificar();
        //Dependente
        if (localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '') {
            document.getElementById('rDep').classList.remove('invisivel');
            document.getElementById('rMeio').classList.add('depMeio');
            document.getElementById('rTabs').classList.add('invisivel');
            document.getElementById('rNav').classList.add('invisivel');
            document.getElementById('rContent').classList.add('baixoButton2');
            this.nomeDependente = localStorage.getItem('nomeDependente');
            this.email = localStorage.getItem('emailDependente');
        }
        else {
            document.getElementById('rDep').classList.add('invisivel');
            document.getElementById('rMeio').classList.remove('depMeio');
            document.getElementById('rTabs').classList.remove('invisivel');
            document.getElementById('rNav').classList.remove('invisivel');
            document.getElementById('rContent').classList.remove('baixoButton2');
            this.email = localStorage.getItem('email');
        }
    }
    //#endregion
    ngOnInit() {
    }
};
RelatorioPage.ctorParameters = () => [
    { type: src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
RelatorioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-relatorio',
        template: _raw_loader_relatorio_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_relatorio_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RelatorioPage);



/***/ }),

/***/ 2658:
/*!*************************************************!*\
  !*** ./src/app/R/relatorio/relatorio.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.meio {\n  width: 90%;\n  margin-top: calc((100vw / 5) + 20px);\n  margin-left: 5%;\n  color: var(--dark-space-cadet);\n}\n.meio .content {\n  margin-bottom: calc((100vw / 5) + ((100vw / 5) / 2) + 20px);\n}\n.visivel {\n  margin-top: calc((100vw / 5) + 60px);\n}\n/*#endregion*/\n/*#region Meio*/\n.calendario {\n  background-color: var(--dark-space-cadet);\n  width: 90%;\n  height: 250px;\n  margin: 20px 0px 0px 5%;\n  border-radius: 10px;\n}\n.relatorio {\n  background-color: var(--lavander);\n  width: 100%;\n  height: 50px;\n  margin: 20px 0px 30px 0px;\n  border-radius: 10px;\n  box-shadow: 0px 4px 4px rgba(122, 122, 165, 0.5);\n}\n.relatorio h3 {\n  font-family: \"Saira\";\n}\n.buttons {\n  width: 90%;\n  margin: 0px 0px 0px 5%;\n}\n.buttons button {\n  position: initial;\n  margin: 20px 0px 0px 0px;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGF0b3Jpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQUE7QUFDQTtFQUVJLFVBQUE7RUFFQSxvQ0FBQTtFQUNBLGVBQUE7RUFFQSw4QkFBQTtBQUZKO0FBSUk7RUFFSSwyREFBQTtBQUhSO0FBT0E7RUFFSSxvQ0FBQTtBQUxKO0FBT0EsYUFBQTtBQUVBLGVBQUE7QUFDQTtFQUVJLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0FBUko7QUFXQTtFQUVJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUVBLG1CQUFBO0VBRUEsZ0RBQUE7QUFaSjtBQWNJO0VBRUksb0JBQUE7QUFiUjtBQWlCQTtFQUVJLFVBQUE7RUFFQSxzQkFBQTtBQWhCSjtBQWtCSTtFQUVJLGlCQUFBO0VBQ0Esd0JBQUE7QUFqQlI7QUFvQkEsYUFBQSIsImZpbGUiOiJyZWxhdG9yaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIEdlcmFsKi9cclxuLm1laW9cclxue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgMjBweCk7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gICAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xyXG5cclxuICAgIC5jb250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygoMTAwdncgLyA1KSArICgoMTAwdncgLyA1KSAvIDIpICsgMjBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi52aXNpdmVsXHJcbntcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoKDEwMHZ3IC8gNSkgKyA2MHB4KTtcclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIE1laW8qL1xyXG4uY2FsZW5kYXJpb1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG5cclxuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDUlO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5yZWxhdG9yaW9cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2YW5kZXIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAzMHB4IDBweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYigxMjIsIDEyMiwgMTY1LCAwLjUpO1xyXG5cclxuICAgIGgzXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTYWlyYSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b25zXHJcbntcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA1JTtcclxuXHJcbiAgICBidXR0b25cclxuICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuIl19 */");

/***/ }),

/***/ 8519:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/relatorio/relatorio.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"nav vertical flex\">\r\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\r\n    <div id=\"rNav\" class=\"button full flex\" (click)=\"open()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"mRelatorio\" class=\"menu invisivel\">\r\n    <div id=\"back\" (click)=\"close()\"></div>\r\n\r\n    <div id=\"rMenu\" class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <h3>Configurações</h3>\r\n\r\n        <div class=\"button full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mid\">\r\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Tutorial</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"dadosAdicionais()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v2.501c-.771-.322-1.614-.501-2.5-.501-3.584 0-6.5 2.916-6.5 6.5 0 1.747.696 3.331 1.82 4.5zm-.252-23.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Dados adicionais</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"adicionarResponsavel()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Adicionar responsável</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"sair()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Sair</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"rDep\" class=\"dep vertical flex invisivel\">\r\n    <p>Dependente: {{nomeDependente}}</p>\r\n    <p class=\"aviso sair\" (click)=\"removDependente()\">Sair</p>\r\n  </div>\r\n\r\n  <div id=\"rMeio\" class=\"meio\">\r\n    <div class=\"top centerA\">\r\n      <h3>Relatórios Mensais e Semanais</h3>\r\n    </div>\r\n\r\n    <div id=\"rContent\" class=\"content\">\r\n      <div class=\"calendario\"></div>\r\n\r\n      <div class=\"relatorio full flex\">\r\n        <h3>Relatório Semanal 08 - 14/03</h3>\r\n      </div>\r\n\r\n      <div class=\"buttons\">\r\n        <button class=\"important\">Sintomas</button>\r\n        <button (click)=\"historico()\" class=\"normal\">Histórico</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"rTabs\" class=\"tabs full flex\">\r\n    <div class=\"button full flex\" (click)=\"home()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z\"/>\r\n      </svg>\r\n      <p>Home</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"lembretes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z\"/>\r\n      </svg>\r\n      <p>Lembretes</p>\r\n    </div>\r\n\r\n    <div class=\"button middle\">\r\n      <div class=\"principal full flex\">\r\n        <svg viewBox=\"0 0 24 24\">\r\n          <path d=\"M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z\"/>\r\n          \r\n        </svg>\r\n      </div>\r\n      <p>Relatório</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"estoque()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M1 24h22v-12h-22v12zm8-9h6v2h-6v-2zm15-7v2h-24v-2l4.474-8h15.087l4.439 8z\"/>\r\n      </svg>\r\n      <p>Estoque</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"dependentes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z\"/>\r\n      </svg>\r\n      <p>Dependentes</p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_relatorio_relatorio_module_ts.js.map