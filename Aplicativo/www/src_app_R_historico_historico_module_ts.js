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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".meio {\n  width: 100%;\n}\n.meio .top {\n  width: 90%;\n  margin-left: 5%;\n  margin-top: calc((100vw / 5) + 20px);\n}\n.meio .top .bloco:nth-of-type(2) {\n  width: calc(100% - 40px);\n}\n.meio .top svg {\n  background-color: var(--dark-space-cadet);\n  width: 40px;\n  border-radius: 50%;\n  padding: 10px;\n  fill: var(--white);\n  transform: rotate(180deg);\n}\n.meio .top h3 {\n  margin-left: 5%;\n}\n.meio .historico {\n  margin-left: 5%;\n  flex-direction: row;\n  justify-content: left;\n  margin-bottom: 40px;\n}\n.meio .historico .conteudo {\n  min-width: 45vw;\n}\n.meio .historico .linha {\n  width: 90vw;\n  margin-top: 40px;\n}\n.meio .historico .bloco {\n  background-color: var(--lavander);\n  min-width: 42vw;\n  height: 130px;\n  border-radius: 10px;\n  margin-top: 20px;\n  margin-right: 5vw;\n  box-shadow: 0px 4px 4px rgba(122, 122, 165, 0.5);\n}\n.meio .historico .bloco .bot:nth-of-type(1) {\n  width: 100%;\n  height: 80px;\n}\n.meio .historico .bloco .bot:nth-of-type(1) img {\n  height: 60%;\n}\n.meio .historico .bloco .bot:nth-of-type(2) {\n  background-color: var(--state-blue);\n  width: 100%;\n  height: 40px;\n  margin-top: 10px;\n  padding: 5px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.meio .historico .bloco .bot:nth-of-type(2) h3 {\n  color: var(--white);\n}\n.semMedicamento {\n  height: 50vh;\n  color: var(--space-cadet);\n}\n.semMedicamento svg {\n  width: 40%;\n  fill: var(--lavander);\n  margin-top: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3Rvcmljby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxXQUFBO0FBREo7QUFHSTtFQUVJLFVBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFIUjtBQUtRO0VBRUksd0JBQUE7QUFKWjtBQU9RO0VBRUkseUNBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFFQSxhQUFBO0VBRUEsa0JBQUE7RUFFQSx5QkFBQTtBQVZaO0FBYVE7RUFFSSxlQUFBO0FBWlo7QUFnQkk7RUFFSSxlQUFBO0VBRUEsbUJBQUE7RUFDQSxxQkFBQTtFQUVBLG1CQUFBO0FBakJSO0FBbUJRO0VBRUksZUFBQTtBQWxCWjtBQXFCUTtFQUVJLFdBQUE7RUFFQSxnQkFBQTtBQXJCWjtBQXdCUTtFQUVJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnREFBQTtBQTFCWjtBQTRCWTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBM0JoQjtBQTZCZ0I7RUFFSSxXQUFBO0FBNUJwQjtBQWdDWTtFQUVJLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUVBLFlBQUE7RUFFQSwrQkFBQTtFQUNBLGdDQUFBO0FBbENoQjtBQW9DZ0I7RUFFSSxtQkFBQTtBQW5DcEI7QUE0Q0E7RUFFSSxZQUFBO0VBVUEseUJBQUE7QUFuREo7QUEyQ0k7RUFFSSxVQUFBO0VBQ0EscUJBQUE7RUFFQSxnQkFBQTtBQTNDUiIsImZpbGUiOiJoaXN0b3JpY28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIE1laW9cclxuLm1laW9cclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnRvcFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgMjBweCk7XHJcblxyXG4gICAgICAgIC5ibG9jbzpudGgtb2YtdHlwZSgyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3ZnXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgZmlsbDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oaXN0b3JpY29cclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG5cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICAgICAgICAuY29udGV1ZG9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDV2dztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAubGluaGFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmJsb2NvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZhbmRlcik7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDJ2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIFxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXZ3O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYigxMjIsIDEyMiwgMTY1LCAwLjUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5ib3Q6bnRoLW9mLXR5cGUoMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmJvdDpudGgtb2YtdHlwZSgyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGF0ZS1ibHVlKTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaDNcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIFNlbU1lZGljYW1lbnRvXHJcbi5zZW1NZWRpY2FtZW50b1xyXG57XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcblxyXG4gICAgc3ZnXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBmaWxsOiB2YXIoLS1sYXZhbmRlcik7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcclxufVxyXG4vLyNlbmRyZWdpb25cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"nav vertical flex\">\r\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\r\n  </div>\r\n\r\n  <div id=\"hisDep\" class=\"dep vertical flex invisivel\">\r\n    <p>Dependente: {{nomeDependente}}</p>\r\n    <p class=\"aviso sair\" (click)=\"removDependente()\">Voltar</p>\r\n  </div>\r\n\r\n  <div id=\"hisMeio\" class=\"meio\">\r\n    <div class=\"top full flex\">\r\n      <div class=\"bloco\">\r\n        <svg viewBox=\"0 0 24 24\" class=\"svg\" (click)=\"voltar()\">\r\n          <path d=\"M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z\"/>\r\n        </svg>\r\n      </div>\r\n\r\n      <div class=\"bloco\">\r\n        <h3>Medicamentos já adicionados</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"temLista\" class=\"historico full flex\">\r\n      <div *ngFor=\"let l of lista\" [ngSwitch]=\"l.Letra\" class=\"conteudo\">\r\n        <div *ngSwitchDefault class=\"linha\">\r\n          <h3 class=\"leftA\">{{l.Letra}}</h3>\r\n        </div>\r\n  \r\n        <div *ngSwitchCase=\"ordem[0]\" class=\"bloco full flex\">\r\n          <div class=\"bot full flex\">\r\n            <img src=\"../../../assets/IMG/Icon/{{l.FormaFarma}}.png\">\r\n          </div>\r\n  \r\n          <div class=\"bot full flex\">\r\n            <h3>{{l.Nome}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"temListaNao\">\r\n      <div class=\"semMedicamento full flex\">\r\n        <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z\"/>\r\n        </svg>\r\n        \r\n        <p>Você ainda não possui nenhum medicamento vá para lembretes, clique no botão: \"Novo Lembrete\" e crie o primeiro!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_historico_historico_module_ts.js.map