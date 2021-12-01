(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_dependentes_dependentes_module_ts"],{

/***/ 76442:
/*!*************************************************************!*\
  !*** ./src/app/R/dependentes/dependentes-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependentesPageRoutingModule": () => (/* binding */ DependentesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dependentes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependentes.page */ 79199);




const routes = [
    {
        path: '',
        component: _dependentes_page__WEBPACK_IMPORTED_MODULE_0__.DependentesPage
    }
];
let DependentesPageRoutingModule = class DependentesPageRoutingModule {
};
DependentesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DependentesPageRoutingModule);



/***/ }),

/***/ 7242:
/*!*****************************************************!*\
  !*** ./src/app/R/dependentes/dependentes.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependentesPageModule": () => (/* binding */ DependentesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dependentes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependentes-routing.module */ 76442);
/* harmony import */ var _dependentes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependentes.page */ 79199);







let DependentesPageModule = class DependentesPageModule {
};
DependentesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dependentes_routing_module__WEBPACK_IMPORTED_MODULE_0__.DependentesPageRoutingModule
        ],
        declarations: [_dependentes_page__WEBPACK_IMPORTED_MODULE_1__.DependentesPage]
    })
], DependentesPageModule);



/***/ }),

/***/ 79199:
/*!***************************************************!*\
  !*** ./src/app/R/dependentes/dependentes.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependentesPage": () => (/* binding */ DependentesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dependentes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dependentes.page.html */ 50457);
/* harmony import */ var _dependentes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependentes.page.scss */ 42642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 58914);






let DependentesPage = class DependentesPage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        this.dependente = [];
        this.temLista = false;
        this.temListaNao = false;
        this.idade = [null];
    }
    //#endregion
    //#region Abrir e Fechar o Menu
    open() {
        //Variaveis
        var menu = document.getElementById('mDependentes');
        var content = document.getElementById('dMenu');
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
        var menu = document.getElementById('mDependentes');
        var content = document.getElementById('dMenu');
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
    //#region Carregar o Estoque
    carregarDependentes() {
        let dados = 'phpEmail=' + localStorage.getItem('email');
        this.servidor.enviar('Responsavel/Dependentes/main.php', dados).subscribe(res => {
            if (res[0].Erro != true) {
                this.temLista = true;
                this.temListaNao = false;
                this.dependente = res;
            }
            else {
                this.temLista = false;
                this.temListaNao = true;
            }
        });
    }
    //#endregion
    //#region Remover Dependente
    removerDependente(email) {
        document.getElementById('rDependentes').classList.remove('invisivel');
        //Preparação
        document.getElementById('dFundo').classList.remove('OutFundo');
        document.getElementById('dAlert').classList.remove('OutAlerta');
        //Animação
        setTimeout(function () {
            document.getElementById('dAlert').classList.add('InAlerta');
            document.getElementById('dFundo').classList.add('InFundo');
        }, 100);
        this.email = email;
    }
    nao() {
        if (event.target == document.getElementById('dFundo') || event.target == document.getElementById('dBtn')) {
            //Preparação
            document.getElementById('dFundo').classList.remove('InFundo');
            document.getElementById('dAlert').classList.remove('InAlerta');
            //Animação
            document.getElementById('dFundo').classList.add('OutFundo');
            document.getElementById('dAlert').classList.add('OutAlerta');
            //Fecha
            setTimeout(function () {
                document.getElementById('rDependentes').classList.add('invisivel');
            }, 301);
        }
    }
    sim() {
        //Remover o dependente
        let dados = 'phpEmail=' + this.email;
        this.servidor.enviar('Responsavel/Dependentes/remover.php', dados).subscribe(res => {
            if (res == 'Removeu') {
                //Preparação
                document.getElementById('dFundo').classList.remove('InFundo');
                document.getElementById('dAlert').classList.remove('InFundo');
                //Animação
                document.getElementById('dFundo').classList.add('OutFundo');
                document.getElementById('dAlert').classList.add('OutAlerta');
                //Fecha
                setTimeout(function () {
                    document.getElementById('rDependentes').classList.add('invisivel');
                }, 301);
                //Recaregar lembretes
                this.carregarDependentes();
            }
        });
    }
    //#endregion
    //#region Editar Dependente
    editarDependente(email, nome) {
        localStorage.setItem('emailDependente', email);
        if (nome == null) {
            localStorage.setItem('nomeDependente', email);
        }
        else {
            localStorage.setItem('nomeDependente', nome);
        }
        this.nav.rDependente();
    }
    //#endregion
    //#region Adicionar Dependente
    novoDependente() {
        document.getElementById('aDependentes').classList.remove('invisivel');
        //Preparação
        document.getElementById('entendi').classList.remove('OutFundo');
        document.getElementById('entendiAlert').classList.remove('OutAlerta');
        //Animação
        setTimeout(function () {
            document.getElementById('entendiAlert').classList.add('InAlerta');
            document.getElementById('entendi').classList.add('InFundo');
        }, 100);
    }
    entendi() {
        if (event.target == document.getElementById('entendi') || event.target == document.getElementById('entendiBtn')) {
            //Preparação
            document.getElementById('entendi').classList.remove('InFundo');
            document.getElementById('entendiAlert').classList.remove('InAlerta');
            //Animação
            document.getElementById('entendi').classList.add('OutFundo');
            document.getElementById('entendiAlert').classList.add('OutAlerta');
            //Fecha
            setTimeout(function () {
                document.getElementById('aDependentes').classList.add('invisivel');
            }, 301);
        }
    }
    //#endregion 
    //#region Navegação
    tutorial() {
        localStorage.setItem('RTutorial', 'rDependentes');
        this.nav.rTutorial();
    }
    adicionarResponsavel() {
        localStorage.setItem('digitarResponsavel', 'rDependentes');
        this.nav.digitarResponsavel();
    }
    adicionarSintomas() {
        localStorage.setItem('sintomas', 'rDependentes');
        this.nav.adicionarSintomas();
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
        //Puxar lista de lembretes
        this.carregarDependentes();
    }
    //#endregion
    ngOnInit() {
    }
};
DependentesPage.ctorParameters = () => [
    { type: src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
DependentesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dependentes',
        template: _raw_loader_dependentes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dependentes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DependentesPage);



/***/ }),

/***/ 42642:
/*!*****************************************************!*\
  !*** ./src/app/R/dependentes/dependentes.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n/*#region Geral*/\n.meio {\n  width: 90%;\n  margin-left: 5%;\n  margin-top: calc((100vw / 5) + 20px);\n  color: var(--dark-space-cadet);\n}\n.meio .top, .meio .content {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.meio .content {\n  margin-bottom: calc((100vw / 5) + ((100vw / 5) / 2) + 65px);\n}\n#rDependentes #back, #aDependentes #back {\n  width: 100vw;\n}\n/*#endregion*/\n/*#region Dependentes*/\n.dependentes {\n  background-color: var(--lavander);\n  width: 100%;\n  height: 130px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.dependentes svg:nth-of-type(1) {\n  fill: var(--dark-space-cadet) !important;\n  width: 50px;\n  margin-right: 20px;\n}\n.dependentes svg:nth-of-type(2) {\n  fill: var(--red) !important;\n  height: 30px;\n  position: relative;\n  top: -20px;\n  right: 0px;\n}\n.dependentes .text {\n  width: calc(65% - 30px);\n  margin-top: 10px;\n}\n.dependentes .text h3 {\n  width: calc(100% - 30px);\n  color: vasr(--dark-space-cadet);\n  font-family: \"Saira\";\n}\n.dependentes .text p {\n  color: var(--space-cadet);\n  font-family: \"Roboto Light\";\n}\n.dependentes button {\n  height: 30px;\n  margin-top: auto;\n  border-top-right-radius: 0%;\n  border-top-left-radius: 0%;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.dependentes svg {\n  fill: var(--white);\n  height: 80%;\n  margin-left: 10px;\n}\n/*#endregion*/\n#rDependentes, #aDependentes {\n  background-color: var(--dark-space-cadet);\n}\n#rDependentes .alert, #aDependentes .alert {\n  opacity: 0;\n}\n#rDependentes .alert h3, #aDependentes .alert h3 {\n  font-size: 1em;\n  color: var(--white) !important;\n}\n#rDependentes .important, #aDependentes .important {\n  position: initial;\n}\n/*#region Botão*/\n#botao .important {\n  background-color: var(--space-cadet);\n  width: 80vw;\n  position: fixed;\n  bottom: calc((100vw / 5) + ((100vw / 5) / 2) + 10px);\n  left: 10vw;\n}\n#botao .important span {\n  color: var(--white) !important;\n}\n/*#endregion*/\n.semDependentes {\n  height: 50vh;\n}\n.semDependentes svg {\n  width: 40%;\n  fill: var(--lavander);\n  margin-top: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVudGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsZ0JBQUE7QUFDQTtFQUVJLFVBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7RUFFQSw4QkFBQTtBQURKO0FBR0k7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFLSTtFQUVJLDJEQUFBO0FBSlI7QUFRQTtFQUVJLFlBQUE7QUFOSjtBQVFBLGFBQUE7QUFFQSxzQkFBQTtBQUNBO0VBRUksaUNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxzQkFBQTtBQVRKO0FBV0k7RUFFSSx3Q0FBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQVhSO0FBY0k7RUFFSSwyQkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBZFI7QUFpQkk7RUFFSSx1QkFBQTtFQUNBLGdCQUFBO0FBaEJSO0FBa0JRO0VBRUksd0JBQUE7RUFFQSwrQkFBQTtFQUNBLG9CQUFBO0FBbEJaO0FBcUJRO0VBRUkseUJBQUE7RUFDQSwyQkFBQTtBQXBCWjtBQXdCSTtFQUVJLFlBQUE7RUFFQSxnQkFBQTtFQUVBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FBekJSO0FBNEJJO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBRUEsaUJBQUE7QUE1QlI7QUErQkEsYUFBQTtBQUdBO0VBRUkseUNBQUE7QUEvQko7QUFpQ0k7RUFFSSxVQUFBO0FBaENSO0FBa0NRO0VBRUksY0FBQTtFQUNBLDhCQUFBO0FBakNaO0FBcUNJO0VBRUksaUJBQUE7QUFwQ1I7QUF5Q0EsZ0JBQUE7QUFDQTtFQUVJLG9DQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxvREFBQTtFQUNBLFVBQUE7QUF4Q0o7QUEwQ0k7RUFFSSw4QkFBQTtBQXpDUjtBQTRDQSxhQUFBO0FBR0E7RUFFSSxZQUFBO0FBNUNKO0FBOENJO0VBRUksVUFBQTtFQUNBLHFCQUFBO0VBRUEsZ0JBQUE7QUE5Q1IiLCJmaWxlIjoiZGVwZW5kZW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyojcmVnaW9uIEdlcmFsKi9cbi5tZWlvIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgMjBweCk7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcbn1cbi5tZWlvIC50b3AsIC5tZWlvIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tZWlvIC5jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygoMTAwdncgLyA1KSArICgoMTAwdncgLyA1KSAvIDIpICsgNjVweCk7XG59XG5cbiNyRGVwZW5kZW50ZXMgI2JhY2ssICNhRGVwZW5kZW50ZXMgI2JhY2sge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi8qI2VuZHJlZ2lvbiovXG4vKiNyZWdpb24gRGVwZW5kZW50ZXMqL1xuLmRlcGVuZGVudGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2YW5kZXIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5kZXBlbmRlbnRlcyBzdmc6bnRoLW9mLXR5cGUoMSkge1xuICBmaWxsOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KSAhaW1wb3J0YW50O1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmRlcGVuZGVudGVzIHN2ZzpudGgtb2YtdHlwZSgyKSB7XG4gIGZpbGw6IHZhcigtLXJlZCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG4uZGVwZW5kZW50ZXMgLnRleHQge1xuICB3aWR0aDogY2FsYyg2NSUgLSAzMHB4KTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5kZXBlbmRlbnRlcyAudGV4dCBoMyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgY29sb3I6IHZhc3IoLS1kYXJrLXNwYWNlLWNhZGV0KTtcbiAgZm9udC1mYW1pbHk6IFwiU2FpcmFcIjtcbn1cbi5kZXBlbmRlbnRlcyAudGV4dCBwIHtcbiAgY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG59XG4uZGVwZW5kZW50ZXMgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi5kZXBlbmRlbnRlcyBzdmcge1xuICBmaWxsOiB2YXIoLS13aGl0ZSk7XG4gIGhlaWdodDogODAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLyojZW5kcmVnaW9uKi9cbiNyRGVwZW5kZW50ZXMsICNhRGVwZW5kZW50ZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcbn1cbiNyRGVwZW5kZW50ZXMgLmFsZXJ0LCAjYURlcGVuZGVudGVzIC5hbGVydCB7XG4gIG9wYWNpdHk6IDA7XG59XG4jckRlcGVuZGVudGVzIC5hbGVydCBoMywgI2FEZXBlbmRlbnRlcyAuYWxlcnQgaDMge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xufVxuI3JEZXBlbmRlbnRlcyAuaW1wb3J0YW50LCAjYURlcGVuZGVudGVzIC5pbXBvcnRhbnQge1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cblxuLyojcmVnaW9uIEJvdMOjbyovXG4jYm90YW8gLmltcG9ydGFudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcbiAgd2lkdGg6IDgwdnc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiBjYWxjKCgxMDB2dyAvIDUpICsgKCgxMDB2dyAvIDUpIC8gMikgKyAxMHB4KTtcbiAgbGVmdDogMTB2dztcbn1cbiNib3RhbyAuaW1wb3J0YW50IHNwYW4ge1xuICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG59XG5cbi8qI2VuZHJlZ2lvbiovXG4uc2VtRGVwZW5kZW50ZXMge1xuICBoZWlnaHQ6IDUwdmg7XG59XG4uc2VtRGVwZW5kZW50ZXMgc3ZnIHtcbiAgd2lkdGg6IDQwJTtcbiAgZmlsbDogdmFyKC0tbGF2YW5kZXIpO1xuICBtYXJnaW4tdG9wOiAxMHZoO1xufSJdfQ== */");

/***/ }),

/***/ 50457:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/dependentes/dependentes.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"nav vertical flex\">\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\n    <div class=\"button full flex\" (click)=\"open()\">\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\n      </svg>\n    </div>\n  </div>\n\n  <div id=\"mDependentes\" class=\"menu invisivel\">\n    <div id=\"back\" (click)=\"close()\"></div>\n\n    <div id=\"dMenu\" class=\"content\">\n      <div class=\"top full flex\">\n        <h3>Configurações</h3>\n\n        <div class=\"button full flex\">\n          <svg viewBox=\"0 0 24 24\">\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\n          </svg>\n        </div>\n      </div>\n\n      <div class=\"mid\">\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\n          <div class=\"button full flex\">\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\n            </svg>\n          </div>\n          <h3>Tutorial</h3>\n        </div>\n\n        <div class=\"itens vertical flex\" (click)=\"adicionarResponsavel()\">\n          <div class=\"button full flex\">\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z\"/>\n            </svg>\n          </div>\n          <h3>Adicionar responsável</h3>\n        </div>\n\n        <div class=\"itens vertical flex\" (click)=\"adicionarSintomas()\">\n          <div class=\"button full flex\">\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M19.099 11.136c-1.449 1.97-3.599 3.914-6.021 3.597-.655.916-1.387 2.194-2.199 3.678l-1.879.589c1.589-3.101 3.712-6.53 5.989-9.136-.986.642-2.606 2.023-4.016 3.479-1.271-2.656.069-5.115 2.012-6.994-.056.885.337 1.692.631 2.107-.05-.74.036-2.062.576-3.207 1.082-.913 2.039-1.57 3.132-2.145-.177.647-.025 1.423.182 1.907.095-.67.494-1.937.955-2.462 1.364-.88 3.384-1.584 5.539-1.548-.238 1.328-.936 3.484-1.877 4.821-.761.489-1.766.775-2.566.913.663.186 1.407.24 2.052.192-.469.987-.946 1.891-1.667 3-.995.555-2.267.8-3.135.846.607.319 1.714.505 2.292.363zm-1.099 4.009v5.855h-16v-12h6.875c.229-.673.547-1.342.979-2h-9.854v16h20v-9.788c-.574.679-1.239 1.355-2 1.933z\"/>\n            </svg>\n          </div>\n          <h3>Adicionar sintomas</h3>\n        </div>\n\n        <div class=\"itens vertical flex\" (click)=\"sair()\">\n          <div class=\"button full flex\">\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z\"/>\n            </svg>\n          </div>\n          <h3>Sair</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"meio\">\n    <div class=\"top centerA\">\n      <h3>Seus dependentes</h3>\n    </div>\n\n    <div class=\"content\">\n      <div *ngIf=\"temLista\">\n        <div *ngFor=\"let l of dependente\" class=\"dependentes full flex\">\n          <svg viewBox=\"0 0 24 24\">\n            <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z\"/>\n          </svg>\n\n          <div [ngSwitch]=\"l.Idade\" class=\"text flex leftA\">\n            <div *ngSwitchDefault>\n              <h3>{{l.Nome}}</h3>\n\n              <p>E-mail: {{l.Email}}</p>\n              <p>Idade: {{l.Idade}} anos</p>\n            </div>\n\n            <div *ngSwitchCase=\"idade[0]\" class=\"text flex leftA\">\n              <h3>{{l.Nome}}</h3>\n\n              <p>E-mail: {{l.Email}}</p>\n            </div>\n          </div>\n\n          <svg viewBox=\"0 0 24 24\" (click)=\"removerDependente(l.Email)\">\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\n          </svg>\n\n          <button class=\"normal full flex\" (click)=\"editarDependente(l.Email, l.Nome)\">Administrar</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"temListaNao\">\n        <div class=\"semDependentes full flex\">\n          <svg viewBox=\"0 0 24 24\">\n          <path d=\"M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z\"/>\n          </svg>\n          \n          <p>Você ainda não possui nenhum dependente, para isso você deve adicionar o seu e-mail pelo nosso aplicativo no celular do usuário que será o dependente.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"rDependentes\" class=\"invisivel\">\n    <div id=\"dFundo\" class=\"centraliza full flex\" (click)=\"nao()\">\n      <div id=\"dAlert\" class=\"alert\">\n        <div class=\"top full flex\">\n          <h3>TEM CERTEZA DISSO?</h3>\n        </div>\n\n        <div class=\"content centerA\">\n          <p>Deseja realmente REMOVER esse Dependente?</p>\n\n          <button id=\"dBtn\" class=\"important\" (click)=\"nao()\">Não</button>\n          <button id=\"dBtn\" class=\"normal\" (click)=\"sim()\">Sim</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"aDependentes\" class=\"invisivel\">\n    <div id=\"entendi\" class=\"centraliza full flex\" (click)=\"entendi()\">\n      <div id=\"entendiAlert\" class=\"alert\">\n        <div class=\"top full flex\">\n          <h3>Adicionando dependente</h3>\n        </div>\n\n        <div class=\"content centerA\">\n          <p>Você deve adicionar o seu e-mail pelo nosso aplicativo no celular do usuário que será o dependente.</p>\n\n          <button id=\"entendiBtn\" class=\"important\" (click)=\"entendi()\">Entendi!</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"botao\">\n    <button class=\"important\" (click)=\"novoDependente()\"><span>Novo dependente</span></button>\n  </div>\n\n  <div class=\"tabs full flex\">\n    <div class=\"button full flex\" (click)=\"lembretes()\">\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z\"/>\n      </svg>\n      <p>Lembretes</p>\n    </div>\n\n    <div class=\"button full flex\" (click)=\"estoque()\">\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M1 24h22v-12h-22v12zm8-9h6v2h-6v-2zm15-7v2h-24v-2l4.474-8h15.087l4.439 8z\"/>\n      </svg>\n      <p>Estoque</p>\n    </div>\n    \n    <div class=\"button full flex\" (click)=\"home()\">\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z\"/>\n      </svg>\n      <p>Home</p>\n    </div>\n\n    <div class=\"button middle\">\n      <div class=\"principal full flex\">\n        <svg viewBox=\"0 0 24 24\">\n          <path d=\"M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z\"/>\n        </svg>\n      </div>\n      <p>Dependentes</p>\n    </div>\n\n    <div class=\"button full flex\" (click)=\"relatorio()\">\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z\"/>\n      </svg>\n      <p>Relatório</p>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_dependentes_dependentes_module_ts.js.map