(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_lembretes_lembretes_module_ts"],{

/***/ 53500:
/*!*********************************************************!*\
  !*** ./src/app/R/lembretes/lembretes-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LembretesPageRoutingModule": () => (/* binding */ LembretesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _lembretes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lembretes.page */ 94400);




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

/***/ 17016:
/*!*************************************************!*\
  !*** ./src/app/R/lembretes/lembretes.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LembretesPageModule": () => (/* binding */ LembretesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _lembretes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lembretes-routing.module */ 53500);
/* harmony import */ var _lembretes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lembretes.page */ 94400);







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

/***/ 94400:
/*!***********************************************!*\
  !*** ./src/app/R/lembretes/lembretes.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LembretesPage": () => (/* binding */ LembretesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lembretes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lembretes.page.html */ 83041);
/* harmony import */ var _lembretes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lembretes.page.scss */ 56941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 58914);






let LembretesPage = class LembretesPage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        this.lista = [];
        this.semData = ['Sem data prevista'];
    }
    //#endregion
    //#region Abrir e Fechar o Menu
    open() {
        //Variaveis
        var menu = document.getElementById('mLembretes');
        var content = document.getElementById('lMenu');
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
        var menu = document.getElementById('mLembretes');
        var content = document.getElementById('lMenu');
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
    //#region Editar
    editar(codigo) {
        localStorage.setItem('agendamento', codigo);
        this.novoLembrete();
    }
    //#endregion
    //#region Remover Lembrete
    removerMedicamento(codigo) {
        document.getElementById('rMedicamento').classList.remove('invisivel');
        //Preparação
        document.getElementById('rFundo').classList.remove('OutFundo');
        document.getElementById('rAlert').classList.remove('OutAlerta');
        //Animação
        setTimeout(function () {
            document.getElementById('rAlert').classList.add('InAlerta');
            document.getElementById('rFundo').classList.add('InFundo');
        }, 100);
        this.codigo = codigo;
    }
    nao() {
        if (event.target == document.getElementById('rFundo') || event.target == document.getElementById('rBtn')) {
            //Preparação
            document.getElementById('rFundo').classList.remove('InFundo');
            document.getElementById('rAlert').classList.remove('InAlerta');
            //Animação
            document.getElementById('rFundo').classList.add('OutFundo');
            document.getElementById('rAlert').classList.add('OutAlerta');
            //Fecha
            setTimeout(function () {
                document.getElementById('rMedicamento').classList.add('invisivel');
            }, 301);
        }
    }
    sim() {
        //Deletar o medicamento
        let dados = 'phpEmail=' + this.email + '&phpCodigo=' + this.codigo;
        this.servidor.enviar('Responsavel/Lembretes/remover.php', dados).subscribe(res => { });
        //Preparação
        document.getElementById('rFundo').classList.remove('InFundo');
        document.getElementById('rAlert').classList.remove('InFundo');
        //Animação
        document.getElementById('rFundo').classList.add('OutFundo');
        document.getElementById('rAlert').classList.add('OutAlerta');
        //Fecha
        setTimeout(function () {
            document.getElementById('rMedicamento').classList.add('invisivel');
        }, 301);
        //Recaregar lembretes
        this.listalembretes();
    }
    //#endregion
    //#region Puxar Lembretes
    listalembretes() {
        let dados = 'phpEmail=' + this.email;
        this.servidor.enviar('Responsavel/Lembretes/main.php', dados).subscribe(res => {
            if (res[0]['Erro'] == true) {
                this.temLista = false;
                this.temListaNao = true;
            }
            else {
                this.lista = res;
                this.temLista = true;
                this.temListaNao = false;
            }
        });
    }
    //#endregion
    //#region Navegação
    novoLembrete() {
        this.nav.rNovoLembrete();
    }
    tutorial() {
        localStorage.setItem('RTutorial', 'rLembretes');
        this.nav.rTutorial();
    }
    adicionarResponsavel() {
        localStorage.setItem('digitarResponsavel', 'rLembretes');
        this.nav.digitarResponsavel();
    }
    adicionarSintomas() {
        localStorage.setItem('sintomas', 'rLembretes');
        this.nav.adicionarSintomas();
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
            document.getElementById('lDep').classList.remove('invisivel');
            document.getElementById('lMeio').classList.add('depMeio');
            document.getElementById('lTabs').classList.add('invisivel');
            document.getElementById('lNav').classList.add('invisivel');
            document.getElementById('lButton').classList.add('baixo');
            document.getElementById('lContent').classList.add('baixoButton');
            this.nomeDependente = localStorage.getItem('nomeDependente');
            this.email = localStorage.getItem('emailDependente');
        }
        else {
            document.getElementById('lDep').classList.add('invisivel');
            document.getElementById('lMeio').classList.remove('depMeio');
            document.getElementById('lTabs').classList.remove('invisivel');
            document.getElementById('lNav').classList.remove('invisivel');
            document.getElementById('lButton').classList.remove('baixo');
            document.getElementById('lContent').classList.remove('baixoButton');
            this.email = localStorage.getItem('email');
        }
        //Puxar lista de lembretes
        this.listalembretes();
    }
    //#endregion
    ngOnInit() { }
};
LembretesPage.ctorParameters = () => [
    { type: src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
LembretesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-lembretes',
        template: _raw_loader_lembretes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewEncapsulation.None,
        styles: [_lembretes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LembretesPage);



/***/ }),

/***/ 56941:
/*!*************************************************!*\
  !*** ./src/app/R/lembretes/lembretes.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n/*#region Geral*/\n.meio {\n  width: 90%;\n  margin-top: calc((100vw / 5) + 20px);\n  margin-left: 5%;\n  color: var(--dark-space-cadet);\n}\n.meio .top {\n  margin: 0px 0px 20px 0px;\n}\n.meio .content {\n  margin-bottom: calc((100vw / 5) + ((100vw / 5) / 2) + 65px);\n}\n.semMedicamento {\n  height: 50vh;\n}\n.semMedicamento svg {\n  width: 40%;\n  fill: var(--lavander);\n  margin-top: 10vh;\n}\n/*#endregion*/\n/*#region Lembretes*/\n.lembretes {\n  background-color: var(--lavander);\n  width: 100%;\n  height: 130px;\n  margin: 0px 0px 20px 0px;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.lembretes img {\n  width: 50px;\n  height: 50px;\n  margin: 0px 20px 0px 10px;\n}\n.lembretes .svg {\n  height: 30px;\n  fill: var(--red);\n  position: relative;\n  right: 0px;\n  top: -10px;\n}\n.lembretes .text {\n  width: calc(70% - 30px);\n  margin: 10px 0px 0px 0px;\n}\n.lembretes .text h3 {\n  color: var(--dark-space-cadet);\n  font-family: \"Saira\";\n}\n.lembretes .text p {\n  color: var(--space-cadet);\n  margin: 10px 0px 0px 0px;\n}\n.lembretes .text .descricao {\n  font-family: \"Roboto Light\";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.lembretes button {\n  height: 30px;\n  margin: auto 0px 0px 0px;\n  border-radius: 0% 0% 10px 10px;\n}\n.lembretes button svg {\n  fill: var(--white);\n  height: 70%;\n  margin: 0px 0px 0px 15px;\n}\n/*#endregion*/\n/*#region Botão*/\n.important {\n  width: 80vw;\n  position: fixed;\n  left: 10vw;\n  bottom: calc((100vw / 5) + ((100vw / 5) / 2) + 10px);\n}\n.important svg {\n  stroke: var(--dark-space-cadet);\n  height: 40%;\n  margin: 0px 10px 0px 0px;\n}\n/*#endregion*/\n#rMedicamento {\n  background-color: var(--dark-space-cadet);\n}\n#rMedicamento .alert {\n  opacity: 0;\n}\n#rMedicamento .alert h3 {\n  font-size: 1em;\n  color: var(--white) !important;\n}\n#rMedicamento .important {\n  position: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlbWJyZXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLGdCQUFBO0FBQ0E7RUFFSSxVQUFBO0VBRUEsb0NBQUE7RUFDQSxlQUFBO0VBRUEsOEJBQUE7QUFESjtBQUdJO0VBRUksd0JBQUE7QUFGUjtBQUtJO0VBRUksMkRBQUE7QUFKUjtBQVFBO0VBRUksWUFBQTtBQU5KO0FBUUk7RUFFSSxVQUFBO0VBQ0EscUJBQUE7RUFFQSxnQkFBQTtBQVJSO0FBWUEsYUFBQTtBQUVBLG9CQUFBO0FBQ0E7RUFFSSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsd0JBQUE7RUFFQSxtQkFBQTtFQUVBLHNCQUFBO0FBZEo7QUFnQkk7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0FBaEJSO0FBbUJJO0VBRUksWUFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQW5CUjtBQXNCSTtFQUVJLHVCQUFBO0VBQ0Esd0JBQUE7QUFyQlI7QUF1QlE7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0FBdEJaO0FBeUJRO0VBRUkseUJBQUE7RUFFQSx3QkFBQTtBQXpCWjtBQTRCUTtFQUVJLDJCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBNUJaO0FBZ0NJO0VBRUksWUFBQTtFQUVBLHdCQUFBO0VBRUEsOEJBQUE7QUFqQ1I7QUFtQ1E7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx3QkFBQTtBQW5DWjtBQXVDQSxhQUFBO0FBRUEsZ0JBQUE7QUFDQTtFQUVJLFdBQUE7RUFFQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG9EQUFBO0FBdkNKO0FBeUNJO0VBRUksK0JBQUE7RUFDQSxXQUFBO0VBRUEsd0JBQUE7QUF6Q1I7QUE0Q0EsYUFBQTtBQUdBO0VBRUkseUNBQUE7QUE1Q0o7QUE4Q0k7RUFFSSxVQUFBO0FBN0NSO0FBK0NRO0VBRUksY0FBQTtFQUNBLDhCQUFBO0FBOUNaO0FBa0RJO0VBRUksaUJBQUE7QUFqRFIiLCJmaWxlIjoibGVtYnJldGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qI3JlZ2lvbiBHZXJhbCovXG4ubWVpbyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IGNhbGMoKDEwMHZ3IC8gNSkgKyAyMHB4KTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBjb2xvcjogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XG59XG4ubWVpbyAudG9wIHtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xufVxuLm1laW8gLmNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKCgxMDB2dyAvIDUpICsgKCgxMDB2dyAvIDUpIC8gMikgKyA2NXB4KTtcbn1cblxuLnNlbU1lZGljYW1lbnRvIHtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuLnNlbU1lZGljYW1lbnRvIHN2ZyB7XG4gIHdpZHRoOiA0MCU7XG4gIGZpbGw6IHZhcigtLWxhdmFuZGVyKTtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbn1cblxuLyojZW5kcmVnaW9uKi9cbi8qI3JlZ2lvbiBMZW1icmV0ZXMqL1xuLmxlbWJyZXRlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmFuZGVyKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sZW1icmV0ZXMgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMTBweDtcbn1cbi5sZW1icmV0ZXMgLnN2ZyB7XG4gIGhlaWdodDogMzBweDtcbiAgZmlsbDogdmFyKC0tcmVkKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMHB4O1xuICB0b3A6IC0xMHB4O1xufVxuLmxlbWJyZXRlcyAudGV4dCB7XG4gIHdpZHRoOiBjYWxjKDcwJSAtIDMwcHgpO1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG59XG4ubGVtYnJldGVzIC50ZXh0IGgzIHtcbiAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xuICBmb250LWZhbWlseTogXCJTYWlyYVwiO1xufVxuLmxlbWJyZXRlcyAudGV4dCBwIHtcbiAgY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xufVxuLmxlbWJyZXRlcyAudGV4dCAuZGVzY3JpY2FvIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmxlbWJyZXRlcyBidXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogYXV0byAwcHggMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMCUgMCUgMTBweCAxMHB4O1xufVxuLmxlbWJyZXRlcyBidXR0b24gc3ZnIHtcbiAgZmlsbDogdmFyKC0td2hpdGUpO1xuICBoZWlnaHQ6IDcwJTtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAxNXB4O1xufVxuXG4vKiNlbmRyZWdpb24qL1xuLyojcmVnaW9uIEJvdMOjbyovXG4uaW1wb3J0YW50IHtcbiAgd2lkdGg6IDgwdnc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMTB2dztcbiAgYm90dG9tOiBjYWxjKCgxMDB2dyAvIDUpICsgKCgxMDB2dyAvIDUpIC8gMikgKyAxMHB4KTtcbn1cbi5pbXBvcnRhbnQgc3ZnIHtcbiAgc3Ryb2tlOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcbiAgaGVpZ2h0OiA0MCU7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcbn1cblxuLyojZW5kcmVnaW9uKi9cbiNyTWVkaWNhbWVudG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcbn1cbiNyTWVkaWNhbWVudG8gLmFsZXJ0IHtcbiAgb3BhY2l0eTogMDtcbn1cbiNyTWVkaWNhbWVudG8gLmFsZXJ0IGgzIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbn1cbiNyTWVkaWNhbWVudG8gLmltcG9ydGFudCB7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufSJdfQ== */");

/***/ }),

/***/ 83041:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/lembretes/lembretes.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"nav vertical flex\">\r\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\r\n    <div id=\"lNav\" class=\"button full flex\" (click)=\"open()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"lDep\" class=\"dep vertical flex invisivel\">\r\n    <p>Dependente: {{nomeDependente}}</p>\r\n    <p class=\"aviso sair\" (click)=\"removDependente()\">Voltar</p>  \r\n  </div>\r\n\r\n  <div id=\"mLembretes\" class=\"menu invisivel\">\r\n    <div id=\"back\" (click)=\"close()\"></div>\r\n\r\n    <div id=\"lMenu\" class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <h3>Configurações</h3>\r\n\r\n        <div class=\"button full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mid\">\r\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Tutorial</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"adicionarResponsavel()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Adicionar responsável</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"adicionarSintomas()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M19.099 11.136c-1.449 1.97-3.599 3.914-6.021 3.597-.655.916-1.387 2.194-2.199 3.678l-1.879.589c1.589-3.101 3.712-6.53 5.989-9.136-.986.642-2.606 2.023-4.016 3.479-1.271-2.656.069-5.115 2.012-6.994-.056.885.337 1.692.631 2.107-.05-.74.036-2.062.576-3.207 1.082-.913 2.039-1.57 3.132-2.145-.177.647-.025 1.423.182 1.907.095-.67.494-1.937.955-2.462 1.364-.88 3.384-1.584 5.539-1.548-.238 1.328-.936 3.484-1.877 4.821-.761.489-1.766.775-2.566.913.663.186 1.407.24 2.052.192-.469.987-.946 1.891-1.667 3-.995.555-2.267.8-3.135.846.607.319 1.714.505 2.292.363zm-1.099 4.009v5.855h-16v-12h6.875c.229-.673.547-1.342.979-2h-9.854v16h20v-9.788c-.574.679-1.239 1.355-2 1.933z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Adicionar sintomas</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"sair()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Sair</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"lMeio\" class=\"meio\">\r\n    <div class=\"top centerA\">\r\n      <h3>Seus lembretes</h3>\r\n    </div>\r\n\r\n    <div id=\"lContent\" class=\"content\">\r\n      <div *ngIf=\"temLista\">\r\n        <div *ngFor=\"let l of lista\"  class=\"lembretes full flex\">\r\n          <img src=\"../../../assets/IMG/Icon/{{l.FormaFarmaceutica}}.png\">\r\n\r\n          <div [ngSwitch]=\"l.DataFinal\" class=\"text leftA\">\r\n            <h3>{{l.Nome}}</h3>\r\n            <p class=\"descricao\">{{l.Descricao}}</p>\r\n            <p *ngSwitchCase=\"semData[0]\">Sem data prevista</p>\r\n            <p *ngSwitchDefault>{{ 'Até o dia ' + l.DataFinal.substring(8, 10) + '/' + l.DataFinal.substring(5, 7) + '/' + l.DataFinal.substring(0, 4) }}</p>\r\n          </div>\r\n\r\n          <svg class=\"svg\" viewBox=\"0 0 24 24\" (click)=\"removerMedicamento(l.Agendamento)\">\r\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n          </svg>\r\n\r\n          <button class=\"normal full flex\" (click)=\"editar(l.Agendamento)\"> Editar\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n            </svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"temListaNao\">\r\n        <div class=\"semMedicamento full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n          <path d=\"M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z\"/>\r\n          </svg>\r\n          \r\n          <p>Você ainda não agendou lembretes para os seus medicamentos, clique no botão: \"Novo Lembrete\", para criar o primeiro!</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <button id=\"lButton\" class=\"botao important full flex\" (click)=\"novoLembrete()\">\r\n    <svg viewBox=\"0 0 100 100\">\r\n      <line x1=\"50\" y1=\"0\" x2=\"50\" y2=\"100\" stroke-width=\"15\"></line>\r\n      <line x1=\"0\" y1=\"50\" x2=\"100\" y2=\"50\" stroke-width=\"15\"></line>\r\n    </svg>\r\n    \r\n    <span>Novo lembrete</span>\r\n  </button>\r\n\r\n  <div id=\"rMedicamento\" class=\"invisivel\">\r\n    <div id=\"rFundo\" class=\"centraliza full flex\" (click)=\"nao()\">\r\n      <div id=\"rAlert\" class=\"alert\">\r\n        <div class=\"top full flex\">\r\n          <h3>TEM CERTEZA DISSO?</h3>\r\n        </div>\r\n\r\n        <div class=\"content centerA\">\r\n          <p>Deseja realmente REMOVER esse Lembrete?</p>\r\n\r\n          <button id=\"rBtn\" class=\"important\" (click)=\"nao()\">Não</button>\r\n          <button id=\"rBtn\" class=\"normal\" (click)=\"sim()\">Sim</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"lTabs\" class=\"tabs full flex\">\r\n    <div class=\"button middle\">\r\n      <div class=\"principal full flex\">\r\n        <svg viewBox=\"0 0 24 24\">\r\n          <path d=\"M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z\"/>\r\n        </svg>\r\n      </div>\r\n      <p>Lembretes</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"estoque()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M1 24h22v-12h-22v12zm8-9h6v2h-6v-2zm15-7v2h-24v-2l4.474-8h15.087l4.439 8z\"/>\r\n      </svg>\r\n      <p>Estoque</p>\r\n    </div>\r\n    \r\n    <div class=\"button full flex\" (click)=\"home()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z\"/>\r\n      </svg>\r\n      <p>Home</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"dependentes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z\"/>\r\n      </svg>\r\n      <p>Dependentes</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"relatorio()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z\"/>\r\n      </svg>\r\n      <p>Relatório</p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_lembretes_lembretes_module_ts.js.map