(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_historico_historico_module_ts"],{

/***/ 84309:
/*!*********************************************************!*\
  !*** ./src/app/R/historico/historico-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoricoPageRoutingModule": () => (/* binding */ HistoricoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _historico_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historico.page */ 72475);




const routes = [
    {
        path: '',
        component: _historico_page__WEBPACK_IMPORTED_MODULE_0__.HistoricoPage
    }
];
let HistoricoPageRoutingModule = class HistoricoPageRoutingModule {
};
HistoricoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoricoPageRoutingModule);



/***/ }),

/***/ 96513:
/*!*************************************************!*\
  !*** ./src/app/R/historico/historico.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoricoPageModule": () => (/* binding */ HistoricoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _historico_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historico-routing.module */ 84309);
/* harmony import */ var _historico_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historico.page */ 72475);







let HistoricoPageModule = class HistoricoPageModule {
};
HistoricoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _historico_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoricoPageRoutingModule
        ],
        declarations: [_historico_page__WEBPACK_IMPORTED_MODULE_1__.HistoricoPage]
    })
], HistoricoPageModule);



/***/ }),

/***/ 72475:
/*!***********************************************!*\
  !*** ./src/app/R/historico/historico.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoricoPage": () => (/* binding */ HistoricoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_historico_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./historico.page.html */ 67549);
/* harmony import */ var _historico_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historico.page.scss */ 78724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 58914);






let HistoricoPage = class HistoricoPage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        this.ordem = [null];
    }
    //#endregion
    //#region Carregar
    carregar() {
        let dados = 'phpEmail=' + this.email;
        this.servidor.enviar('Responsavel/Relatorio/historico.php', dados).subscribe(res => {
            if (res[0]['Erro'] != true) {
                this.temLista = true;
                this.temListaNao = false;
                this.lista = res;
            }
            else {
                this.temLista = false;
                this.temListaNao = true;
            }
        });
    }
    //#endregion
    //#region Navegação
    voltar() {
        this.nav.rRelatorio();
    }
    removDependente() {
        this.nav.rDependente();
    }
    //#endregion
    //#region ViewWillEnter
    ionViewWillEnter() {
        //Verificar Login
        this.servidor.verificar();
        //Dependente
        if (localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '') {
            document.getElementById('hisDep').classList.remove('invisivel');
            document.getElementById('hisMeio').classList.add('depMeio');
            this.nomeDependente = localStorage.getItem('nomeDependente');
            this.email = localStorage.getItem('emailDependente');
        }
        else {
            document.getElementById('hisDep').classList.add('invisivel');
            document.getElementById('hisMeio').classList.remove('depMeio');
            this.email = localStorage.getItem('email');
        }
        this.carregar();
    }
    //#endregion
    ngOnInit() { }
};
HistoricoPage.ctorParameters = () => [
    { type: src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
HistoricoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-historico',
        template: _raw_loader_historico_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_historico_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoricoPage);



/***/ }),

/***/ 78724:
/*!*************************************************!*\
  !*** ./src/app/R/historico/historico.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".meio {\n  width: 100%;\n  margin-left: 5%;\n}\n.meio .top {\n  width: 90%;\n  margin-top: calc((100vw / 5) + 20px);\n}\n.meio .top .bloco:nth-of-type(2) {\n  width: calc(100% - 40px);\n}\n.meio .top svg {\n  background-color: var(--dark-space-cadet);\n  width: 40px;\n  border-radius: 50%;\n  padding: 10px;\n  fill: var(--white);\n  transform: rotate(180deg);\n}\n.meio .top h3 {\n  margin-left: 5%;\n}\n.meio .historico {\n  flex-direction: row;\n  justify-content: left;\n  margin-bottom: 40px;\n}\n.meio .historico .conteudo {\n  min-width: 45vw;\n}\n.meio .historico .linha {\n  width: 90vw;\n  margin-top: 40px;\n}\n.meio .historico .bloco {\n  background-color: var(--lavander);\n  min-width: 42vw;\n  height: 130px;\n  border-radius: 10px;\n  margin-top: 20px;\n  margin-right: 5vw;\n  box-shadow: 0px 4px 4px rgba(122, 122, 165, 0.5);\n}\n.meio .historico .bloco .bot:nth-of-type(1) {\n  width: 100%;\n  height: 80px;\n}\n.meio .historico .bloco .bot:nth-of-type(1) img {\n  height: 60%;\n}\n.meio .historico .bloco .bot:nth-of-type(2) {\n  background-color: var(--state-blue);\n  width: 100%;\n  height: 40px;\n  margin-top: 10px;\n  padding: 5px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.meio .historico .bloco .bot:nth-of-type(2) h3 {\n  color: var(--white);\n}\n.semMedicamento {\n  height: 50vh;\n  color: var(--space-cadet);\n}\n.semMedicamento svg {\n  width: 40%;\n  fill: var(--lavander);\n  margin-top: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3Rvcmljby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxXQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFFSSxVQUFBO0VBQ0Esb0NBQUE7QUFGUjtBQUlRO0VBRUksd0JBQUE7QUFIWjtBQU1RO0VBRUkseUNBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFFQSxhQUFBO0VBRUEsa0JBQUE7RUFFQSx5QkFBQTtBQVRaO0FBWVE7RUFFSSxlQUFBO0FBWFo7QUFlSTtFQUVJLG1CQUFBO0VBQ0EscUJBQUE7RUFFQSxtQkFBQTtBQWZSO0FBaUJRO0VBRUksZUFBQTtBQWhCWjtBQW1CUTtFQUVJLFdBQUE7RUFFQSxnQkFBQTtBQW5CWjtBQXNCUTtFQUVJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnREFBQTtBQXhCWjtBQTBCWTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBekJoQjtBQTJCZ0I7RUFFSSxXQUFBO0FBMUJwQjtBQThCWTtFQUVJLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUVBLFlBQUE7RUFFQSwrQkFBQTtFQUNBLGdDQUFBO0FBaENoQjtBQWtDZ0I7RUFFSSxtQkFBQTtBQWpDcEI7QUEwQ0E7RUFFSSxZQUFBO0VBVUEseUJBQUE7QUFqREo7QUF5Q0k7RUFFSSxVQUFBO0VBQ0EscUJBQUE7RUFFQSxnQkFBQTtBQXpDUiIsImZpbGUiOiJoaXN0b3JpY28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIE1laW9cbi5tZWlvXG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuXG4gICAgLnRvcFxuICAgIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogY2FsYygoMTAwdncgLyA1KSArIDIwcHgpO1xuXG4gICAgICAgIC5ibG9jbzpudGgtb2YtdHlwZSgyKVxuICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdmdcbiAgICAgICAge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcblxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAgICAgICBmaWxsOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICBoM1xuICAgICAgICB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaGlzdG9yaWNvXG4gICAge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcblxuICAgICAgICAuY29udGV1ZG9cbiAgICAgICAge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0NXZ3O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5saW5oYVxuICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogOTB2dztcbiAgICBcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmJsb2NvXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmFuZGVyKTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDJ2dztcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXZ3O1xuICAgIFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiKDEyMiwgMTIyLCAxNjUsIDAuNSk7XG4gICAgXG4gICAgICAgICAgICAuYm90Om50aC1vZi10eXBlKDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIFxuICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmJvdDpudGgtb2YtdHlwZSgyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YXRlLWJsdWUpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICBcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICBcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIFxuICAgICAgICAgICAgICAgIGgzXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gU2VtTWVkaWNhbWVudG9cbi5zZW1NZWRpY2FtZW50b1xue1xuICAgIGhlaWdodDogNTB2aDtcblxuICAgIHN2Z1xuICAgIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgZmlsbDogdmFyKC0tbGF2YW5kZXIpO1xuXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgfVxuXG4gICAgY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcbn1cbi8vI2VuZHJlZ2lvblxuIl19 */");

/***/ }),

/***/ 67549:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/historico/historico.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"nav vertical flex\">\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\n  </div>\n\n  <div id=\"hisDep\" class=\"dep vertical flex invisivel\">\n    <p>Dependente: {{nomeDependente}}</p>\n    <p class=\"aviso sair\" (click)=\"removDependente()\">Voltar</p>\n  </div>\n\n  <div id=\"hisMeio\" class=\"meio\">\n    <div class=\"top full flex\">\n      <div class=\"bloco\">\n        <svg viewBox=\"0 0 24 24\" class=\"svg\" (click)=\"voltar()\">\n          <path d=\"M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z\"/>\n        </svg>\n      </div>\n\n      <div class=\"bloco\">\n        <h3>Medicamentos já adicionados</h3>\n      </div>\n    </div>\n\n    <div *ngIf=\"temLista\" class=\"historico full flex\">\n      <div *ngFor=\"let l of lista\" [ngSwitch]=\"l.Letra\" class=\"conteudo\">\n        <div *ngSwitchDefault class=\"linha\">\n          <h3 class=\"leftA\">{{l.Letra}}</h3>\n        </div>\n  \n        <div *ngSwitchCase=\"ordem[0]\" class=\"bloco full flex\">\n          <div class=\"bot full flex\">\n            <img src=\"../../../assets/IMG/Icon/{{l.FormaFarma}}.png\">\n          </div>\n  \n          <div class=\"bot full flex\">\n            <h3>{{l.Nome}}</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"temListaNao\">\n      <div class=\"semMedicamento full flex\">\n        <svg viewBox=\"0 0 24 24\">\n        <path d=\"M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z\"/>\n        </svg>\n        \n        <p>Você ainda não possui nenhum medicamento vá para lembretes, clique no botão: \"Novo Lembrete\" e crie o primeiro!</p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_historico_historico_module_ts.js.map