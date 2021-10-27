(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_dados-adicionais_dados-adicionais_module_ts"],{

/***/ 3304:
/*!*********************************************************************!*\
  !*** ./src/app/dados-adicionais/dados-adicionais-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DadosAdicionaisPageRoutingModule": () => (/* binding */ DadosAdicionaisPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dados_adicionais_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dados-adicionais.page */ 5856);




const routes = [
    {
        path: '',
        component: _dados_adicionais_page__WEBPACK_IMPORTED_MODULE_0__.DadosAdicionaisPage
    }
];
let DadosAdicionaisPageRoutingModule = class DadosAdicionaisPageRoutingModule {
};
DadosAdicionaisPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DadosAdicionaisPageRoutingModule);



/***/ }),

/***/ 4597:
/*!*************************************************************!*\
  !*** ./src/app/dados-adicionais/dados-adicionais.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DadosAdicionaisPageModule": () => (/* binding */ DadosAdicionaisPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dados_adicionais_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dados-adicionais-routing.module */ 3304);
/* harmony import */ var _dados_adicionais_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dados-adicionais.page */ 5856);







let DadosAdicionaisPageModule = class DadosAdicionaisPageModule {
};
DadosAdicionaisPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dados_adicionais_routing_module__WEBPACK_IMPORTED_MODULE_0__.DadosAdicionaisPageRoutingModule
        ],
        declarations: [_dados_adicionais_page__WEBPACK_IMPORTED_MODULE_1__.DadosAdicionaisPage]
    })
], DadosAdicionaisPageModule);



/***/ }),

/***/ 5856:
/*!***********************************************************!*\
  !*** ./src/app/dados-adicionais/dados-adicionais.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DadosAdicionaisPage": () => (/* binding */ DadosAdicionaisPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dados_adicionais_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dados-adicionais.page.html */ 1919);
/* harmony import */ var _dados_adicionais_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dados-adicionais.page.scss */ 133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navegation.service */ 6192);
/* harmony import */ var _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/servidor.service */ 8914);






let DadosAdicionaisPage = class DadosAdicionaisPage {
    //#region Constructor
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        this.customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
        this.customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
        //Verificar Login
        this.nav.varificar();
        //Adicionar valor máximo e minimo no ion-datetime
        let nowData = new Date();
        this.maximo = nowData.getFullYear() + '-' + String(nowData.getMonth() + 1).padStart(2, '0') + '-' + String(nowData.getDate()).padStart(2, '0');
        this.minimo = String(nowData.getFullYear() - 100) + '-12-31';
        //Backend ion-date-picker
        this.customPickerOptions = {
            buttons: [{
                    text: 'Save',
                    handler: () => console.log('Clicked Save!')
                }, {
                    text: 'Log',
                    handler: () => {
                        console.log('Clicked Log. Do not Dismiss.');
                        return false;
                    }
                }]
        };
    }
    //#endregion
    //#region Adicionar dados adicionais
    adicionar() {
        //Reset
        document.getElementById('erroDadosAdicionais').classList.add('invisivel');
        //Verificação dos valores do input
        if (this.nome == '' || this.data == '' || this.nome == null || this.data == null) {
            document.getElementById('erroDadosAdicionais').classList.remove('invisivel');
        }
        else {
            //Valores que serão enviados
            let dados = 'phpNome=' + this.nome + '&phpData=' + this.data.substring(0, 10) + '&phpEmail=' + localStorage.getItem('locEmail');
            //Enviando ao PHP
            this.servidor.enviar('dadosAdicionais.php', dados).subscribe(res => {
                if (res == false) {
                    localStorage.setItem('locNavDadosAdicionais', 'dependente');
                    this.continuar();
                }
            });
        }
    }
    //#endregion
    //#region Navegação
    continuar() {
        switch (localStorage.getItem('locNavDadosAdicionais')) {
            case 'dependente':
                localStorage.removeItem('locNavDadosAdicionais');
                this.nav.dependente();
                break;
            default:
                localStorage.removeItem('locNavDadosAdicionais');
                this.nav.dependente();
                break;
        }
    }
    //#endregion
    //#region OnInit
    ngOnInit() {
        document.getElementById('erroDadosAdicionais').classList.add('invisivel');
    }
};
DadosAdicionaisPage.ctorParameters = () => [
    { type: _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
DadosAdicionaisPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dados-adicionais',
        template: _raw_loader_dados_adicionais_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dados_adicionais_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DadosAdicionaisPage);



/***/ }),

/***/ 133:
/*!*************************************************************!*\
  !*** ./src/app/dados-adicionais/dados-adicionais.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.card {\n  padding-top: 0px;\n}\n.content {\n  margin-top: 33vh;\n  overflow: hidden;\n  z-index: 20;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  background-image: url('Dados-Adicionais.jpg');\n  background-color: var(--baby-blue);\n  background-position-x: center;\n  background-size: cover;\n  width: 100%;\n  height: 35vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.top img {\n  height: 100%;\n}\n.top .degrade {\n  background-image: linear-gradient(0deg, var(--dark-space-cadet), rgba(23, 23, 59, 0.8), rgba(96, 99, 204, 0.5), rgba(255, 255, 255, 0.1));\n  width: 100%;\n  height: calc(35vh);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n.top .trianguloUp {\n  position: absolute;\n  top: 1px;\n  border-left-width: calc(50vw + 1px);\n  border-right-width: calc(50vw + 1px);\n  border-bottom-width: calc(35vh + 1px);\n  z-index: 1000;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  overflow: hidden;\n}\n.mid span, .mid p, .mid button {\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n.mid span, .mid h3 {\n  color: var(--white);\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 80vw;\n  overflow: hidden;\n}\n.bot img {\n  width: 90%;\n  margin-top: 30px;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZG9zLWFkaWNpb25haXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFFSSxnQkFBQTtBQUFKO0FBR0E7RUFFSSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtBQUZKO0FBSUEsYUFBQTtBQUVBLGNBQUE7QUFDQTtFQUVJLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsVUFBQTtBQUxKO0FBT0k7RUFFSSxZQUFBO0FBTlI7QUFTSTtFQUVJLHlJQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLFVBQUE7QUFWUjtBQWFJO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBRUEsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBRUEsYUFBQTtBQWRSO0FBaUJBLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLGdCQUFBO0FBaEJKO0FBa0JJO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQWpCUjtBQW9CSTtFQUVJLG1CQUFBO0FBbkJSO0FBc0JBLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLGdCQUFBO0FBckJKO0FBdUJJO0VBRUksVUFBQTtFQUNBLGdCQUFBO0FBdEJSO0FBeUJBLGFBQUEiLCJmaWxlIjoiZGFkb3MtYWRpY2lvbmFpcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gR2VyYWwqL1xyXG4uY2FyZFxyXG57XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uY29udGVudFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAzM3ZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICB6LWluZGV4OiAyMDtcclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIFRvcCovXHJcbi50b3BcclxueyAgICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvSU1HL1RlbGFzL0RhZG9zLUFkaWNpb25haXMuanBnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhYnktYmx1ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzV2aDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWdyYWRlXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHZhcigtLWRhcmstc3BhY2UtY2FkZXQpLCByZ2JhKDIzLCAyMywgNTksIDAuOCksIHJnYmEoOTYsIDk5LCAyMDQsIDAuNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDM1dmgpO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyaWFuZ3Vsb1VwXHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMXB4O1xyXG5cclxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogY2FsYyg1MHZ3ICsgMXB4KTtcclxuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IGNhbGMoNTB2dyArIDFweCk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogY2FsYygzNXZoICsgMXB4KTtcclxuXHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIE1pZGRsZSovXHJcbi5taWRcclxue1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIHNwYW4sIHAsIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLCBoM1xyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBCb3R0b20qL1xyXG4uYm90XHJcbntcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBpbWdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuIl19 */");

/***/ }),

/***/ 1919:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dados-adicionais/dados-adicionais.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card horizontal flex\">\r\n    <div class=\"top full flex\">\r\n      <div class=\"degrade\"></div>\r\n\r\n      <div class=\"trianguloUp leftP\"></div>\r\n      <div class=\"trianguloUp rightP\"></div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"mid horizontal centerA flex\">\r\n        <h3 class=\"line\">Dados adicionais</h3>\r\n\r\n        <span class=\"line leftA\">Nome</span>\r\n        <input [(ngModel)]=\"nome\" type=\"text\" class=\"input\">\r\n\r\n        <span class=\"line leftA\">Data de nascimento</span>\r\n        <div class=\"data input\">\r\n          <ion-item class=\"input\">\r\n            <ion-datetime [(ngModel)]=\"data\" displayFormat=\"DD/MM/YYYY\" min=\"{{minimo}}\" max=\"{{maximo}}\"></ion-datetime>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <p id=\"erroDadosAdicionais\" class=\"aviso invisivel\">Preencha todos os campos!</p>\r\n\r\n        <button (click)=\"adicionar()\" class=\"important\">Adicionar</button>\r\n        <button (click)=\"continuar()\" class=\"normal\">Deixar para depois</button>\r\n      </div>\r\n\r\n      <div class=\"bot full flex\">\r\n        <img src=\"../../assets/IMG/Logo/Light (Lado).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dados-adicionais_dados-adicionais_module_ts.js.map