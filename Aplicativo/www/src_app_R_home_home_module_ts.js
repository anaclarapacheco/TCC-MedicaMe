(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_home_home_module_ts"],{

/***/ 33293:
/*!***********************************************!*\
  !*** ./src/app/R/home/home-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 26294);




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

/***/ 90933:
/*!***************************************!*\
  !*** ./src/app/R/home/home.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 33293);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 26294);







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

/***/ 26294:
/*!*************************************!*\
  !*** ./src/app/R/home/home.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 799);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 28021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 58914);






let HomePage = class HomePage {
    //#region Constructor
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        //#endregion
        //#region Valores
        this.data = "";
        this.medicamentos = [];
        this.pendentes = [];
        this.temMedic = false;
        this.temPendente = false;
        this.temMedicNao = false;
        //Data de hoje
        let nowData = new Date();
        this.data = String(nowData.getDate()).padStart(2, '0') + '/' + String(nowData.getMonth() + 1).padStart(2, '0') + '/' + nowData.getFullYear();
    }
    //#endregion
    //#region Abrir e Fechar o Menu
    open() {
        //Variaveis
        var menu = document.getElementById('mHome');
        var content = document.getElementById('hMenu');
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
        var menu = document.getElementById('mHome');
        var content = document.getElementById('hMenu');
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
    //#region Tomei ou Não tomei
    enviar(codigo, situacao) {
        //Animação
        document.getElementById(codigo).classList.add('OutAlerta');
        setTimeout(function () { }, 301);
        //Enviar ao PHP
        let dados = 'phpSituacao=' + situacao + '&phpCodigo=' + codigo + '&phpEmail=' + localStorage.getItem('email');
        this.servidor.enviar('Home/situacao.php', dados).subscribe(res => {
            this.carregarPendente();
        });
    }
    //#endregion
    //#region Carregar medicamentos pendentes
    carregarPendente() {
        let dados = 'phpEmail=' + localStorage.getItem('email');
        this.servidor.enviar('Home/pendente.php', dados).subscribe(res => {
            if (res[0].Erro != true) {
                this.temPendente = true;
                this.pendentes = res;
                this.pendentes.forEach(medic => {
                    if (medic['FormaFarmaceutica'] == '4' || medic['FormaFarmaceutica'] == '3') {
                        let plural = false;
                        medic['Dosagem'] = Math.trunc(medic['Dosagem']);
                        if (medic['Dosagem'] > 1) {
                            plural = true;
                        }
                        if (medic['FormaFarmaceutica'] == '3') {
                            medic['Dosagem'] += ' comprimido';
                        }
                        else {
                            medic['Dosagem'] += ' cápsula';
                        }
                        if (plural) {
                            medic['Dosagem'] += 's';
                        }
                    }
                    else {
                        medic['Dosagem'] = medic['Dosagem'].replace('.', ',') + 'ml';
                    }
                });
            }
            else {
                this.temPendente = false;
            }
        });
    }
    //#endregion
    //#region Carregar medicamentos de hoje
    carregar() {
        let dados = 'phpEmail=' + localStorage.getItem('email');
        this.servidor.enviar('Home/main.php', dados).subscribe(res => {
            if (res[0].Erro != true) {
                this.temMedic = true;
                this.temMedicNao = false;
                this.medicamentos = res;
                console.log(this.medicamentos);
                this.medicamentos.forEach(medic => {
                    if (medic['FormaFarmaceutica'] == '4' || medic['FormaFarmaceutica'] == '3') {
                        let plural = false;
                        medic['Dosagem'] = Math.trunc(medic['Dosagem']);
                        if (medic['Dosagem'] > 1) {
                            plural = true;
                        }
                        if (medic['FormaFarmaceutica'] == '3') {
                            medic['Dosagem'] += ' comprimido';
                        }
                        else {
                            medic['Dosagem'] += ' cápsula';
                        }
                        if (plural) {
                            medic['Dosagem'] += 's';
                        }
                    }
                    else {
                        medic['Dosagem'] = medic['Dosagem'].replace('.', ',') + 'ml';
                    }
                });
            }
            else {
                this.temMedic = false;
                this.temMedicNao = true;
            }
        });
    }
    //#endregion
    //#region Navegação
    tutorial() {
        localStorage.setItem('RTutorial', 'rHome');
        this.nav.rTutorial();
    }
    dadosAdicionais() {
        localStorage.setItem('dadosAdicionais', 'rHome');
        this.nav.dadosAdicionais();
    }
    adicionarResponsavel() {
        localStorage.setItem('digitarResponsavel', 'rHome');
        this.nav.digitarResponsavel();
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
        //Carregar medicamentos
        this.carregar();
        this.carregarPendente();
    }
    //#endregion
    ngOnInit() { }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 28021:
/*!***************************************!*\
  !*** ./src/app/R/home/home.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n/*#region Mid Geral*/\n.meio {\n  width: 90%;\n  margin-top: calc((100vw / 5) + 20px);\n  margin-left: 5%;\n  color: var(--dark-space-cadet);\n}\n.meio .content {\n  margin-bottom: calc((100vw / 5) + ((100vw / 5) / 2) + 10px);\n}\n/*#endregion*/\n/*#region Medicamentos - Geral*/\n.medicamentos {\n  width: 100%;\n  height: 85px;\n  padding: 10px;\n  margin: 10px 0px 20px 0px;\n  border-radius: 15px;\n  box-sizing: border-box;\n}\n.medicamentos img {\n  width: 50px;\n  height: 50px;\n  margin: 0px 10px 0px 10px;\n}\n.medicamentos .text {\n  height: 100%;\n  margin: 0px 0px 0px 10px;\n}\n.medicamentos h3 {\n  color: var(--dark-space-cadet);\n  font-family: \"Saira\";\n}\n.medicamentos p {\n  color: var(--space-cadet);\n}\n/*#endregion*/\n/*#region Medicamentos - Pedente*/\n.pendente h3 {\n  color: var(--red);\n}\n.pendente .medicamentos {\n  border-color: var(--red);\n  border-style: solid;\n  border-width: 2px;\n  color: var(--dark-space-cadet);\n  animation-name: pendente;\n  animation-duration: 3s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n.pendente svg {\n  height: 40px;\n}\n.pendente .tomei {\n  fill: var(--state-blue);\n  margin-left: auto;\n}\n.pendente .nao-tomei {\n  fill: var(--red);\n  margin-left: 10px;\n}\n@keyframes pendente {\n  0% {\n    transform: rotate(0deg);\n  }\n  75% {\n    transform: rotate(0deg);\n  }\n  80% {\n    transform: rotate(-2deg);\n  }\n  85% {\n    transform: rotate(2deg);\n  }\n  90% {\n    transform: rotate(-2deg);\n  }\n  95% {\n    transform: rotate(2deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n/*#endregion*/\n/*#region Medicamentos - Próximo*/\n.proximo .medicamentos {\n  background-color: var(--lavander);\n}\n/*#endregion*/\n.naoTem {\n  height: 50vh;\n}\n.naoTem svg {\n  width: 40%;\n  fill: var(--lavander);\n  margin-top: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixvQkFBQTtBQUNBO0VBRUksVUFBQTtFQUVBLG9DQUFBO0VBQ0EsZUFBQTtFQUVBLDhCQUFBO0FBREo7QUFHSTtFQUVJLDJEQUFBO0FBRlI7QUFLQSxhQUFBO0FBRUEsK0JBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0VBRUEsbUJBQUE7RUFFQSxzQkFBQTtBQVBKO0FBU0k7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBUlI7QUFXSTtFQUVJLFlBQUE7RUFFQSx3QkFBQTtBQVhSO0FBY0k7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0FBYlI7QUFnQkk7RUFFSSx5QkFBQTtBQWZSO0FBa0JBLGFBQUE7QUFFQSxpQ0FBQTtBQUdJO0VBRUksaUJBQUE7QUFuQlI7QUFzQkk7RUFFSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSw4QkFBQTtFQUVBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FBdkJSO0FBMEJJO0VBRUksWUFBQTtBQXpCUjtBQTRCSTtFQUVJLHVCQUFBO0VBRUEsaUJBQUE7QUE1QlI7QUErQkk7RUFFSSxnQkFBQTtFQUVBLGlCQUFBO0FBL0JSO0FBbUNBO0VBRUk7SUFBRyx1QkFBQTtFQWhDTDtFQWlDRTtJQUFJLHVCQUFBO0VBOUJOO0VBK0JFO0lBQUksd0JBQUE7RUE1Qk47RUE2QkU7SUFBSSx1QkFBQTtFQTFCTjtFQTJCRTtJQUFJLHdCQUFBO0VBeEJOO0VBeUJFO0lBQUksdUJBQUE7RUF0Qk47RUF1QkU7SUFBSyx1QkFBQTtFQXBCUDtBQUNGO0FBcUJBLGFBQUE7QUFFQSxpQ0FBQTtBQUNBO0VBRUksaUNBQUE7QUFyQko7QUF1QkEsYUFBQTtBQUdBO0VBRUksWUFBQTtBQXZCSjtBQXlCSTtFQUVJLFVBQUE7RUFDQSxxQkFBQTtFQUVBLGdCQUFBO0FBekJSIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyojcmVnaW9uIE1pZCBHZXJhbCovXG4ubWVpbyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IGNhbGMoKDEwMHZ3IC8gNSkgKyAyMHB4KTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBjb2xvcjogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XG59XG4ubWVpbyAuY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoKDEwMHZ3IC8gNSkgKyAoKDEwMHZ3IC8gNSkgLyAyKSArIDEwcHgpO1xufVxuXG4vKiNlbmRyZWdpb24qL1xuLyojcmVnaW9uIE1lZGljYW1lbnRvcyAtIEdlcmFsKi9cbi5tZWRpY2FtZW50b3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMHB4IDIwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm1lZGljYW1lbnRvcyBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xufVxuLm1lZGljYW1lbnRvcyAudGV4dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xufVxuLm1lZGljYW1lbnRvcyBoMyB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcbiAgZm9udC1mYW1pbHk6IFwiU2FpcmFcIjtcbn1cbi5tZWRpY2FtZW50b3MgcCB7XG4gIGNvbG9yOiB2YXIoLS1zcGFjZS1jYWRldCk7XG59XG5cbi8qI2VuZHJlZ2lvbiovXG4vKiNyZWdpb24gTWVkaWNhbWVudG9zIC0gUGVkZW50ZSovXG4ucGVuZGVudGUgaDMge1xuICBjb2xvcjogdmFyKC0tcmVkKTtcbn1cbi5wZW5kZW50ZSAubWVkaWNhbWVudG9zIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWQpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xuICBhbmltYXRpb24tbmFtZTogcGVuZGVudGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4ucGVuZGVudGUgc3ZnIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLnBlbmRlbnRlIC50b21laSB7XG4gIGZpbGw6IHZhcigtLXN0YXRlLWJsdWUpO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5wZW5kZW50ZSAubmFvLXRvbWVpIHtcbiAgZmlsbDogdmFyKC0tcmVkKTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgcGVuZGVudGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcbiAgfVxuICA4NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICB9XG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuICB9XG4gIDk1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbi8qI2VuZHJlZ2lvbiovXG4vKiNyZWdpb24gTWVkaWNhbWVudG9zIC0gUHLDs3hpbW8qL1xuLnByb3hpbW8gLm1lZGljYW1lbnRvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmFuZGVyKTtcbn1cblxuLyojZW5kcmVnaW9uKi9cbi5uYW9UZW0ge1xuICBoZWlnaHQ6IDUwdmg7XG59XG4ubmFvVGVtIHN2ZyB7XG4gIHdpZHRoOiA0MCU7XG4gIGZpbGw6IHZhcigtLWxhdmFuZGVyKTtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"nav vertical flex\">\r\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\r\n    <div class=\"button full flex\" (click)=\"open()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"mHome\" class=\"menu invisivel\">\r\n    <div id=\"back\" (click)=\"close()\"></div>\r\n\r\n    <div id=\"hMenu\" class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <h3>Configurações</h3>\r\n\r\n        <div class=\"button full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mid\">\r\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Tutorial</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"dadosAdicionais()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v2.501c-.771-.322-1.614-.501-2.5-.501-3.584 0-6.5 2.916-6.5 6.5 0 1.747.696 3.331 1.82 4.5zm-.252-23.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Dados adicionais</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"adicionarResponsavel()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Adicionar responsável</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"sair()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Sair</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"meio\">\r\n    <div class=\"top centerA\">\r\n      <h3>Medicamentos do dia</h3>\r\n      <h3>{{data}}</h3>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div *ngIf=\"temPendente\" class=\"pendente\">\r\n        <h3>Pendentes</h3>\r\n\r\n        <div *ngFor=\"let l of pendentes\" id=\"{{l.Agendamento}}\" class=\"medicamentos vertical flex\">\r\n          <img src=\"../../../assets/IMG/Icon/{{l.FormaFarmaceutica}}.png\">\r\n\r\n          <div class=\"text\">\r\n            <h3>{{l.Nome}}</h3>\r\n            <p>{{l.Previsao.substring(8, 10) + '/' + l.Previsao.substring(5, 7) + ' - ' + l.Previsao.substring(11, 13) + 'h' + l.Previsao.substring(14, 16)}}</p>\r\n            <p>{{l.Dosagem}}</p>\r\n          </div>\r\n\r\n          <svg viewBox=\"0 0 24 24\" class=\"tomei\" (click)=\"enviar(l.Agendamento, 'Tomou.')\">\r\n            <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z\"/>\r\n          </svg>\r\n\r\n          <svg viewBox=\"0 0 24 24\" class=\"nao-tomei\" (click)=\"enviar(l.Agendamento, 'Cancelou.')\">\r\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"temMedic\" class=\"proximo\">\r\n        <h3>Ainda Hoje</h3>\r\n\r\n        <div *ngFor=\"let l of medicamentos\" class=\"medicamentos vertical flex\">\r\n          <img src=\"../../../assets/IMG/Icon/{{l.FormaFarmaceutica}}.png\">\r\n\r\n          <div class=\"text\">\r\n            <h3>{{l.Nome}}</h3>\r\n            <p>{{l.Previsao.substring(11, 13) + 'h' + l.Previsao.substring(14, 16) + ' - ' + l.Dosagem}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"temMedicNao\" class=\"naoTem full flex\">\r\n        <svg viewBox=\"0 0 24 24\" fill-rule=\"evenodd\" clip-rule=\"evenodd\">\r\n          <path d=\"M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-.045 17.51h-.015c-2.285 0-4.469-1.189-6.153-3.349l.789-.614c1.489 1.911 3.394 2.963 5.364 2.963h.013c1.987-.004 3.907-1.078 5.408-3.021l.791.611c-1.693 2.194-3.894 3.405-6.197 3.41zm-3.468-10.01c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm7.013 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z\"/>\r\n        </svg>\r\n\r\n        <h3 class=\"centerA\">Nenhum medicamento para hoje!</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tabs full flex\">\r\n    <div class=\"button full flex\" (click)=\"lembretes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z\"/>\r\n      </svg>\r\n      <p>Lembretes</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"estoque()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M1 24h22v-12h-22v12zm8-9h6v2h-6v-2zm15-7v2h-24v-2l4.474-8h15.087l4.439 8z\"/>\r\n      </svg>\r\n      <p>Estoque</p>\r\n    </div>\r\n\r\n    <div class=\"button middle\">\r\n      <div class=\"principal full flex\">\r\n        <svg viewBox=\"0 0 24 24\">\r\n          <path d=\"M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z\"/>\r\n        </svg>\r\n      </div>\r\n      <p>Home</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"dependentes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z\"/>\r\n      </svg>\r\n      <p>Dependentes</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"relatorio()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z\"/>\r\n      </svg>\r\n      <p>Relatório</p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_home_home_module_ts.js.map