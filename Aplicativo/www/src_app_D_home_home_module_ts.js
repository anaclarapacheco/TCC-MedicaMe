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
        var menu = document.getElementById('dHome');
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
    //#region Carregar
    carregar() {
        let dados = 'phpEmail=' + localStorage.getItem('email');
        this.servidor.enviar('Home/pendente.php', dados).subscribe(res => {
            if (res[0].Erro != true) {
                this.temLista = true;
                this.temListaCont = false;
                this.pendentes[0] = res[0];
            }
            else {
                this.temLista = false;
                let dados = 'phpEmail=' + localStorage.getItem('email');
                this.servidor.enviar('Home/main.php', dados).subscribe(res => {
                    if (res[0].Erro != true) {
                        this.temListaCont = true;
                        this.temListaNao = false;
                        this.medicamento = res;
                    }
                    else {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Mid Geral*/\n.meio {\n  width: 90%;\n  margin-top: calc((100vw / 5) + 20px);\n  margin-left: 5%;\n}\n.meio .top {\n  background-color: var(--dark-space-cadet);\n  width: 100%;\n  min-height: 40px;\n  box-sizing: border-box;\n  padding: 0px 10px 0px 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n.meio .top h3 {\n  color: var(--white) !important;\n}\n.meio .content, .meio .bot {\n  background-color: var(--lavander);\n  overflow: hidden;\n  border-radius: 10px;\n}\n/*#endregion*/\n/*#region Medicamentos*/\n.meio .content {\n  width: 100%;\n  padding-bottom: 20px;\n  margin-bottom: 180px;\n}\n.meio .content .line {\n  width: 90%;\n  margin-left: 5%;\n  border-color: var(--state-blue);\n  border-width: 2px 0px 0px 0px;\n  border-style: solid;\n}\n.medicamento {\n  width: 90%;\n  min-height: 200px;\n  margin-left: 5%;\n  padding: 15px;\n  box-sizing: border-box;\n}\n.medicamento img {\n  width: 35%;\n  max-height: 170px;\n}\n.medicamento .text {\n  width: 60%;\n  margin-left: 5%;\n}\n.medicamento .text h3 {\n  margin-top: 7px;\n  font-size: 2em;\n}\n.medicamento .text p {\n  margin-top: 7px;\n  font-size: 1.3em;\n  color: var(--space-cadet) !important;\n}\n/*#endregion*/\n/*#region Alarme*/\n.alarm {\n  margin-bottom: 180px;\n}\n.alarm .medicamento {\n  background-color: var(--lavander);\n  width: 100%;\n  margin: 0;\n  border-radius: 0px 0px 10px 10px;\n}\n.alarm div:nth-of-type(3) {\n  justify-content: space-between;\n}\n.alarm button {\n  width: calc((90vw / 2) - 20px);\n  height: calc((90vw / 2) - 20px);\n  margin-top: 30px;\n  border-radius: 20px;\n  padding: 10px;\n  box-sizing: border-box;\n  font-size: 2em;\n  position: initial !important;\n}\n.alarm button svg {\n  width: 100%;\n  height: 55%;\n}\n.alarm .danger {\n  fill: var(--white);\n}\n/*#endregion*/\n/*#region Bottom*/\n.meio .bot {\n  width: 90%;\n  position: fixed;\n  bottom: 20px;\n}\n.meio .bot .mid {\n  height: 100px;\n}\n.meio .bot .mid button {\n  width: 90%;\n}\n/*#endregion*/\n.naoTem {\n  height: 50vh;\n}\n.naoTem svg {\n  width: 40%;\n  fill: var(--lavander);\n  margin-top: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBQ0E7RUFFSSxVQUFBO0VBRUEsb0NBQUE7RUFDQSxlQUFBO0FBREo7QUFHSTtFQUVJLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7RUFDQSwwQkFBQTtFQUVBLGdDQUFBO0FBSlI7QUFNUTtFQUVJLDhCQUFBO0FBTFo7QUFTSTtFQUVJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtBQVRSO0FBWUEsYUFBQTtBQUVBLHVCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBRUEsb0JBQUE7RUFFQSxvQkFBQTtBQWJKO0FBZUk7RUFFSSxVQUFBO0VBRUEsZUFBQTtFQUVBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQWhCUjtBQW9CQTtFQUVJLFVBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFwQko7QUFzQkk7RUFFSSxVQUFBO0VBRUEsaUJBQUE7QUF0QlI7QUF5Qkk7RUFFSSxVQUFBO0VBRUEsZUFBQTtBQXpCUjtBQTJCUTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FBMUJaO0FBNkJRO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUE1Qlo7QUFnQ0EsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxvQkFBQTtBQS9CSjtBQWlDSTtFQUVJLGlDQUFBO0VBQ0EsV0FBQTtFQUVBLFNBQUE7RUFFQSxnQ0FBQTtBQWxDUjtBQXFDSTtFQUVJLDhCQUFBO0FBcENSO0FBdUNJO0VBRUksOEJBQUE7RUFDQSwrQkFBQTtFQUVBLGdCQUFBO0VBRUEsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0VBRUEsNEJBQUE7QUEzQ1I7QUE2Q1E7RUFFSSxXQUFBO0VBQ0EsV0FBQTtBQTVDWjtBQWdESTtFQUVJLGtCQUFBO0FBL0NSO0FBa0RBLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksVUFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FBbERKO0FBb0RJO0VBRUksYUFBQTtBQW5EUjtBQXFEUTtFQUVJLFVBQUE7QUFwRFo7QUF3REEsYUFBQTtBQUdBO0VBRUksWUFBQTtBQXhESjtBQTBESTtFQUVJLFVBQUE7RUFDQSxxQkFBQTtFQUVBLGdCQUFBO0FBMURSIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIE1pZCBHZXJhbCovXHJcbi5tZWlvXHJcbntcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogY2FsYygoMTAwdncgLyA1KSArIDIwcHgpO1xyXG4gICAgbWFyZ2luLWxlZnQ6ICA1JTtcclxuXHJcbiAgICAudG9wXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcblxyXG4gICAgICAgIGgzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LCAuYm90XHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2YW5kZXIpO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBNZWRpY2FtZW50b3MqL1xyXG4ubWVpbyAuY29udGVudFxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxODBweDtcclxuXHJcbiAgICAubGluZVxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdGF0ZS1ibHVlKTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDJweCAwcHggMHB4IDBweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVkaWNhbWVudG9cclxue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICBpbWdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG5cclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNzBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgICAgICAgaDNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zcGFjZS1jYWRldCkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBBbGFybWUqL1xyXG4uYWxhcm1cclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTgwcHg7XHJcblxyXG4gICAgLm1lZGljYW1lbnRvXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2YW5kZXIpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdjpudGgtb2YtdHlwZSgzKVxyXG4gICAge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b25cclxuICAgIHtcclxuICAgICAgICB3aWR0aDogY2FsYygoOTB2dyAvIDIpIC0gMjBweCk7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCg5MHZ3IC8gMikgLSAyMHB4KTtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWwgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgc3ZnXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYW5nZXJcclxuICAgIHtcclxuICAgICAgICBmaWxsOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBCb3R0b20qL1xyXG4ubWVpbyAuYm90XHJcbntcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIC5taWRcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgICAgICBidXR0b25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vLyNyZWdpb24gU2VtIE1lZGljYW1lbnRvc1xyXG4ubmFvVGVtXHJcbntcclxuICAgIGhlaWdodDogNTB2aDtcclxuXHJcbiAgICBzdmdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGZpbGw6IHZhcigtLWxhdmFuZGVyKTtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIH1cclxufVxyXG4vLyNlbmRyZWdpb25cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"nav vertical flex\">\r\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n    <div class=\"button full flex\" (click)=\"open()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"dHome\" class=\"menu invisivel\">\r\n    <div id=\"back\" (click)=\"close()\"></div>\r\n\r\n    <div id=\"dMenu\" class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <h3>Configurações</h3>\r\n\r\n        <div class=\"button full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mid\">\r\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Tutorial</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"dadosAdicionais()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v2.501c-.771-.322-1.614-.501-2.5-.501-3.584 0-6.5 2.916-6.5 6.5 0 1.747.696 3.331 1.82 4.5zm-.252-23.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Dados adicionais</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"sair()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Sair</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"meio\">\r\n    <div *ngIf=\"temLista\">\r\n      <div *ngFor=\"let l of pendentes\" id=\"{{l.Agendamento}}\" class=\"alarm\">\r\n        <div  class=\"top vertical flex\">\r\n          <h3>O alarme disparou!</h3>\r\n        </div>\r\n\r\n        <div class=\"medicamento full flex\">\r\n          <img src=\"../../../assets/IMG/Icon/{{l.FormaFarmaceutica}}.png\">\r\n\r\n          <div [ngSwitch]=\"l.FormaFarmaceutica\" class=\"text leftA\">\r\n            <h3>{{l.Nome}}</h3>\r\n            <p>Tomar às: <b>{{l.Previsao.substring(11, 13) + 'h' + l.Previsao.substring(14, 16)}}</b></p>\r\n            <p *ngSwitchCase=\"formaFarma[0]\">{{l.Dosagem + 'ml'}}</p>\r\n            <p *ngSwitchCase=\"formaFarma[1]\">{{l.Dosagem + ' gotas'}}</p>\r\n            <p *ngSwitchCase=\"formaFarma[2]\">{{l.Dosagem + ' comprimido'}}</p>\r\n            <p *ngSwitchCase=\"formaFarma[3]\">{{l.Dosagem + ' cápsula'}}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"full flex\">\r\n          <button class=\"danger full flex\" (click)=\"enviar(l.Agendamento, 'Cancelou.')\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n            </svg>\r\n            <span>Cancelei</span>\r\n          </button>\r\n    \r\n          <button class=\"important full flex\" (click)=\"enviar(l.Agendamento, 'Tomou.')\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z\"/>\r\n            </svg>\r\n            <span>Tomei</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"temListaCont\" class=\"content\">\r\n      <div class=\"top vertical flex\">\r\n        <h3>Ainda hoje</h3>\r\n      </div>\r\n\r\n      <div *ngFor=\"let l of medicamento\">\r\n        <div class=\"medicamento full flex\">\r\n          <img src=\"../../../assets/IMG/Icon/{{l.FormaFarmaceutica}}.png\">\r\n\r\n          <div [ngSwitch]=\"l.FormaFarmaceutica\" class=\"text leftA\">\r\n            <h3>{{l.Nome}}</h3>\r\n            <p>Tomar às: <b>{{l.Previsao.substring(11, 13) + 'h' + l.Previsao.substring(14, 16)}}</b></p>\r\n            <p *ngSwitchCase=\"formaFarma[0]\">{{l.Dosagem + 'ml'}}</p>\r\n            <p *ngSwitchCase=\"formaFarma[1]\">{{l.Dosagem + ' gotas'}}</p>\r\n            <p *ngSwitchCase=\"formaFarma[2]\">{{l.Dosagem + ' comprimido'}}</p>\r\n            <p *ngSwitchCase=\"formaFarma[3]\">{{l.Dosagem + ' cápsula'}}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"line\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"temListaNao\" class=\"naoTem full flex\">\r\n      <svg viewBox=\"0 0 24 24\" fill-rule=\"evenodd\" clip-rule=\"evenodd\">\r\n        <path d=\"M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-.019 14c1.842.005 3.613.791 5.117 2.224l-.663.748c-1.323-1.27-2.866-1.968-4.456-1.972h-.013c-1.568 0-3.092.677-4.4 1.914l-.664-.748c1.491-1.4 3.243-2.166 5.064-2.166h.015zm-3.494-6.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm7.013 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z\"/>\r\n      </svg>\r\n\r\n      <h3 class=\"centerA\">Nenhum medicamento para hoje!</h3>\r\n    </div>\r\n\r\n    <div class=\"bot\">\r\n      <div class=\"top vertical flex\">\r\n        <h3>Está se sentindo bem?</h3>\r\n      </div>\r\n\r\n      <div class=\"mid full flex\">\r\n        <button class=\"normal\" (click)=\"sintomas()\">Escrever meus sintomas</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_D_home_home_module_ts.js.map