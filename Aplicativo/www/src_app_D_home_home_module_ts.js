(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_D_home_home_module_ts"],{

/***/ 8550:
/*!***********************************************!*\
  !*** ./src/app/D/home/home-routing.module.ts ***!
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
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 55799);




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

/***/ 38627:
/*!***************************************!*\
  !*** ./src/app/D/home/home.module.ts ***!
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
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 8550);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 55799);







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

/***/ 55799:
/*!*************************************!*\
  !*** ./src/app/D/home/home.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 53455);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 58399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 58914);






let HomePage = class HomePage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        //#region Valores do FrontEnd
        this.temLista = false;
        this.temListaCont = false;
        this.temListaNao = false;
        this.pendentes = [];
        this.medicamento = [];
        this.formaFarma = ['1', '2', '3', '4'];
    }
    //#endregion
    //#region Abrir e Fechar o Menu
    open() {
        //Variaveis
        var menu = document.getElementById('dHome');
        var content = document.getElementById('depMenu');
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
        var menu = document.getElementById('dHome');
        var content = document.getElementById('depMenu');
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
    //#region Carregar
    carregar() {
        let dados = 'phpEmail=' + localStorage.getItem('email');
        this.servidor.enviar('Home/pendente.php', dados).subscribe(res => {
            if (res[0].Erro != true) {
                this.temLista = true;
                this.temListaCont = false;
                this.temListaNao = false;
                this.pendentes[0] = res[0];
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
                this.temLista = false;
                let dados = 'phpEmail=' + localStorage.getItem('email');
                this.servidor.enviar('Home/main.php', dados).subscribe(res => {
                    if (res[0].Erro != true) {
                        this.temLista = false;
                        this.temListaCont = true;
                        this.temListaNao = false;
                        this.medicamento = res;
                        this.medicamento.forEach(medic => {
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
                        this.temLista = false;
                        this.temListaCont = false;
                        this.temListaNao = true;
                    }
                });
            }
        });
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
            this.carregar();
        });
    }
    //#endregion
    //#region Navegação
    tutorial() {
        localStorage.setItem('DTutorial', 'dHome');
        this.nav.dTutorial();
    }
    dadosAdicionais() {
        localStorage.setItem('dadosAdicionais', 'dHome');
        this.nav.dadosAdicionais();
    }
    sair() {
        this.servidor.limpar();
    }
    sintomas() {
        localStorage.setItem('sintomas', 'dHome');
        this.nav.adicionarSintomas();
    }
    //#endregion
    //#region ViewWillEnter
    ionViewWillEnter() {
        //Verificar Login
        this.servidor.verificar();
        //Carregar medicamentos
        this.carregar();
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

/***/ 58399:
/*!***************************************!*\
  !*** ./src/app/D/home/home.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Mid Geral*/\n.meio {\n  width: 90%;\n  margin-top: calc((100vw / 5) + 20px);\n  margin-left: 5%;\n}\n.meio .top {\n  background-color: var(--dark-space-cadet);\n  width: 100%;\n  min-height: 40px;\n  box-sizing: border-box;\n  margin: 0px !important;\n  padding: 0px 10px 0px 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n.meio .top h3 {\n  color: var(--white) !important;\n}\n.meio .content, .meio .bot {\n  background-color: var(--lavander);\n  overflow: hidden;\n  border-radius: 10px;\n}\n/*#endregion*/\n/*#region Medicamentos*/\n.meio .content {\n  width: 100%;\n  padding-bottom: 20px;\n  margin-bottom: 180px;\n}\n.meio .content .line {\n  width: 90%;\n  margin-left: 5%;\n  border-color: var(--state-blue);\n  border-width: 2px 0px 0px 0px;\n  border-style: solid;\n}\n.medicamento {\n  width: 90%;\n  min-height: 200px;\n  margin-left: 5%;\n  padding: 15px;\n  box-sizing: border-box;\n}\n.medicamento img {\n  width: 35%;\n  max-height: 170px;\n}\n.medicamento .text {\n  width: 60%;\n  margin-left: 5%;\n}\n.medicamento .text h3 {\n  margin-top: 7px;\n  font-size: 2em;\n}\n.medicamento .text p {\n  margin-top: 7px;\n  font-size: 1.3em;\n  color: var(--space-cadet) !important;\n}\n/*#endregion*/\n/*#region Alarme*/\n.alarm {\n  margin-bottom: 180px;\n}\n.alarm .medicamento {\n  background-color: var(--lavander);\n  width: 100%;\n  margin: 0;\n  border-radius: 0px 0px 10px 10px;\n}\n.alarm div:nth-of-type(3) {\n  justify-content: space-between;\n}\n.alarm button {\n  width: calc((90vw / 2) - 20px);\n  height: calc((90vw / 2) - 20px);\n  margin-top: 30px;\n  border-radius: 20px;\n  padding: 10px;\n  box-sizing: border-box;\n  font-size: 2em;\n  position: initial !important;\n}\n.alarm button svg {\n  width: 100%;\n  height: 55%;\n}\n.alarm .danger {\n  fill: var(--white);\n}\n/*#endregion*/\n/*#region Bottom*/\n.meio .bot {\n  width: 90%;\n  position: fixed;\n  bottom: 20px;\n}\n.meio .bot .mid {\n  height: 100px;\n}\n.meio .bot .mid button {\n  width: 90%;\n}\n/*#endregion*/\n.naoTem {\n  height: 50vh;\n}\n.naoTem svg {\n  width: 40%;\n  fill: var(--lavander);\n  margin-top: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBQ0E7RUFFSSxVQUFBO0VBRUEsb0NBQUE7RUFDQSxlQUFBO0FBREo7QUFHSTtFQUVJLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBRUEsZ0NBQUE7QUFKUjtBQU1RO0VBRUksOEJBQUE7QUFMWjtBQVNJO0VBRUksaUNBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0FBVFI7QUFZQSxhQUFBO0FBRUEsdUJBQUE7QUFDQTtFQUVJLFdBQUE7RUFFQSxvQkFBQTtFQUVBLG9CQUFBO0FBYko7QUFlSTtFQUVJLFVBQUE7RUFFQSxlQUFBO0VBRUEsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBaEJSO0FBb0JBO0VBRUksVUFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQXBCSjtBQXNCSTtFQUVJLFVBQUE7RUFFQSxpQkFBQTtBQXRCUjtBQXlCSTtFQUVJLFVBQUE7RUFFQSxlQUFBO0FBekJSO0FBMkJRO0VBRUksZUFBQTtFQUNBLGNBQUE7QUExQlo7QUE2QlE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQTVCWjtBQWdDQSxhQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUVJLG9CQUFBO0FBL0JKO0FBaUNJO0VBRUksaUNBQUE7RUFDQSxXQUFBO0VBRUEsU0FBQTtFQUVBLGdDQUFBO0FBbENSO0FBcUNJO0VBRUksOEJBQUE7QUFwQ1I7QUF1Q0k7RUFFSSw4QkFBQTtFQUNBLCtCQUFBO0VBRUEsZ0JBQUE7RUFFQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7RUFFQSw0QkFBQTtBQTNDUjtBQTZDUTtFQUVJLFdBQUE7RUFDQSxXQUFBO0FBNUNaO0FBZ0RJO0VBRUksa0JBQUE7QUEvQ1I7QUFrREEsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxVQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7QUFsREo7QUFvREk7RUFFSSxhQUFBO0FBbkRSO0FBcURRO0VBRUksVUFBQTtBQXBEWjtBQXdEQSxhQUFBO0FBR0E7RUFFSSxZQUFBO0FBeERKO0FBMERJO0VBRUksVUFBQTtFQUNBLHFCQUFBO0VBRUEsZ0JBQUE7QUExRFIiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gTWlkIEdlcmFsKi9cclxuLm1laW9cclxue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgMjBweCk7XHJcbiAgICBtYXJnaW4tbGVmdDogIDUlO1xyXG5cclxuICAgIC50b3BcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG5cclxuICAgICAgICBoM1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCwgLmJvdFxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmFuZGVyKTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gTWVkaWNhbWVudG9zKi9cclxuLm1laW8gLmNvbnRlbnRcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTgwcHg7XHJcblxyXG4gICAgLmxpbmVcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3RhdGUtYmx1ZSk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIH1cclxufVxyXG5cclxuLm1lZGljYW1lbnRvXHJcbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuXHJcbiAgICAgICAgbWF4LWhlaWdodDogMTcwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHRcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG5cclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gICAgICAgIGgzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc3BhY2UtY2FkZXQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gQWxhcm1lKi9cclxuLmFsYXJtXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDE4MHB4O1xyXG5cclxuICAgIC5tZWRpY2FtZW50b1xyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmFuZGVyKTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXY6bnRoLW9mLXR5cGUoMylcclxuICAgIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoKDkwdncgLyAyKSAtIDIwcHgpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygoOTB2dyAvIDIpIC0gMjBweCk7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIHN2Z1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGFuZ2VyXHJcbiAgICB7XHJcbiAgICAgICAgZmlsbDogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gQm90dG9tKi9cclxuLm1laW8gLmJvdFxyXG57XHJcbiAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuXHJcbiAgICAubWlkXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgICAgICAgYnV0dG9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLy8jcmVnaW9uIFNlbSBNZWRpY2FtZW50b3NcclxuLm5hb1RlbVxyXG57XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcblxyXG4gICAgc3ZnXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBmaWxsOiB2YXIoLS1sYXZhbmRlcik7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICB9XHJcbn1cclxuLy8jZW5kcmVnaW9uXHJcbiJdfQ== */");

/***/ }),

/***/ 53455:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/D/home/home.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"nav vertical flex\">\r\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n    <div class=\"button full flex\" (click)=\"open()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"dHome\" class=\"menu invisivel\">\r\n    <div id=\"back\" (click)=\"close()\"></div>\r\n\r\n    <div id=\"depMenu\" class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <h3>Configurações</h3>\r\n\r\n        <div class=\"button full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mid\">\r\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Tutorial</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"dadosAdicionais()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v2.501c-.771-.322-1.614-.501-2.5-.501-3.584 0-6.5 2.916-6.5 6.5 0 1.747.696 3.331 1.82 4.5zm-.252-23.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Dados adicionais</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"sair()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Sair</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"meio\">\r\n    <div *ngIf=\"temLista\">\r\n      <div *ngFor=\"let l of pendentes\" id=\"{{l.Agendamento}}\" class=\"alarm\">\r\n        <div  class=\"top vertical flex\">\r\n          <h3>O alarme disparou!</h3>\r\n        </div>\r\n\r\n        <div class=\"medicamento full flex\">\r\n          <img src=\"../../../assets/IMG/Icon/{{l.FormaFarmaceutica}}.png\">\r\n\r\n          <div class=\"text leftA\">\r\n            <h3>{{l.Nome}}</h3>\r\n            <p>Tomar às: <b>{{l.Previsao.substring(11, 13) + 'h' + l.Previsao.substring(14, 16)}}</b></p>\r\n            <p>{{l.Dosagem}}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"full flex\">\r\n          <button class=\"danger full flex\" (click)=\"enviar(l.Agendamento, 'Cancelou.')\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n            </svg>\r\n            <span>Cancelei</span>\r\n          </button>\r\n    \r\n          <button class=\"important full flex\" (click)=\"enviar(l.Agendamento, 'Tomou.')\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z\"/>\r\n            </svg>\r\n            <span>Tomei</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"temListaCont\" class=\"content\">\r\n      <div class=\"top vertical flex\">\r\n        <h3>Ainda hoje</h3>\r\n      </div>\r\n\r\n      <div *ngFor=\"let l of medicamento\">\r\n        <div class=\"medicamento full flex\">\r\n          <img src=\"../../../assets/IMG/Icon/{{l.FormaFarmaceutica}}.png\">\r\n\r\n          <div class=\"text leftA\">\r\n            <h3>{{l.Nome}}</h3>\r\n            <p>Tomar às: <b>{{l.Previsao.substring(11, 13) + 'h' + l.Previsao.substring(14, 16)}}</b></p>\r\n            <p>{{l.Dosagem}}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"line\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"temListaNao\" class=\"naoTem full flex\">\r\n      <svg viewBox=\"0 0 24 24\" fill-rule=\"evenodd\" clip-rule=\"evenodd\">\r\n        <path d=\"M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-.045 17.51h-.015c-2.285 0-4.469-1.189-6.153-3.349l.789-.614c1.489 1.911 3.394 2.963 5.364 2.963h.013c1.987-.004 3.907-1.078 5.408-3.021l.791.611c-1.693 2.194-3.894 3.405-6.197 3.41zm-3.468-10.01c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm7.013 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z\"/>\r\n      </svg>\r\n\r\n      <h3 class=\"centerA\">Nenhum medicamento para hoje!</h3>\r\n    </div>\r\n\r\n    <div class=\"bot\">\r\n      <div class=\"top vertical flex\">\r\n        <h3>Está se sentindo bem?</h3>\r\n      </div>\r\n\r\n      <div class=\"mid full flex\">\r\n        <button class=\"normal\" (click)=\"sintomas()\">Escrever meus sintomas</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_D_home_home_module_ts.js.map