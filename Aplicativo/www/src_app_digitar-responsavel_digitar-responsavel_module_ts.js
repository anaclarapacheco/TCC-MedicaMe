(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_digitar-responsavel_digitar-responsavel_module_ts"],{

/***/ 4920:
/*!***************************************************************************!*\
  !*** ./src/app/digitar-responsavel/digitar-responsavel-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitarResponsavelPageRoutingModule": () => (/* binding */ DigitarResponsavelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _digitar_responsavel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digitar-responsavel.page */ 3138);




const routes = [
    {
        path: '',
        component: _digitar_responsavel_page__WEBPACK_IMPORTED_MODULE_0__.DigitarResponsavelPage
    }
];
let DigitarResponsavelPageRoutingModule = class DigitarResponsavelPageRoutingModule {
};
DigitarResponsavelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DigitarResponsavelPageRoutingModule);



/***/ }),

/***/ 9919:
/*!*******************************************************************!*\
  !*** ./src/app/digitar-responsavel/digitar-responsavel.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitarResponsavelPageModule": () => (/* binding */ DigitarResponsavelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _digitar_responsavel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digitar-responsavel-routing.module */ 4920);
/* harmony import */ var _digitar_responsavel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digitar-responsavel.page */ 3138);







let DigitarResponsavelPageModule = class DigitarResponsavelPageModule {
};
DigitarResponsavelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _digitar_responsavel_routing_module__WEBPACK_IMPORTED_MODULE_0__.DigitarResponsavelPageRoutingModule
        ],
        declarations: [_digitar_responsavel_page__WEBPACK_IMPORTED_MODULE_1__.DigitarResponsavelPage]
    })
], DigitarResponsavelPageModule);



/***/ }),

/***/ 3138:
/*!*****************************************************************!*\
  !*** ./src/app/digitar-responsavel/digitar-responsavel.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitarResponsavelPage": () => (/* binding */ DigitarResponsavelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_digitar_responsavel_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./digitar-responsavel.page.html */ 8690);
/* harmony import */ var _digitar_responsavel_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digitar-responsavel.page.scss */ 9038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navegation.service */ 6192);
/* harmony import */ var _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/servidor.service */ 8914);






let DigitarResponsavelPage = class DigitarResponsavelPage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
    }
    //#endregion
    //#region Adicionar dados adicionais
    registrar() {
        //Reset
        this.reset();
        //Variaveis
        let validacaoEmail = /\S+@\S+\.\S+/;
        //Verificação dos valores do input
        if (this.email == '' || this.email == null) {
            this.erro = 'Preencha todos os campos!';
            document.getElementById('erroDigitarResponsavel').classList.remove('invisivel');
        }
        else if (!validacaoEmail.test(this.email)) {
            this.erro = 'E-mail inválido, digite novamente!';
            document.getElementById('erroDigitarResponsavel').classList.remove('invisivel');
        }
        else if (this.email == localStorage.getItem('email')) {
            this.erro = 'Digite o e-mail da pessoa que será responsavel por você, não o seu próprio e-mail!';
            document.getElementById('erroDigitarResponsavel').classList.remove('invisivel');
        }
        else {
            //Valores que serão enviados
            let dados = 'phpEmailResponsavel=' + this.email + '&phpEmailDependente=' + localStorage.getItem('email');
            //Enviando ao PHP
            this.servidor.enviar('Digitar Responsavel/main.php', dados).subscribe(res => {
                if (res[0]['Erro'] == false) {
                    localStorage.setItem('DTutorial', 'dHome');
                    localStorage.removeItem('digitarResponsavel');
                    this.nav.dTutorial();
                }
                else {
                    this.erro = 'O e-mail inserido não está cadastrado, digite um e-mail que já possui conta no MedicaMe ou crie uma ';
                    document.getElementById('erroDigitarResponsavel').classList.remove('invisivel');
                    document.getElementById('erroEmailInexistente').classList.remove('invisivel');
                }
            });
        }
    }
    //#endregion
    //#region Reset
    reset() {
        document.getElementById('erroDigitarResponsavel').classList.add('invisivel');
        document.getElementById('erroEmailInexistente').classList.add('invisivel');
    }
    //#endregion
    //#region Navegação
    criar() {
        localStorage.setItem('digitarResponsavel', 'cadastrar');
        this.voltar();
    }
    voltar() {
        switch (localStorage.getItem('digitarResponsavel')) {
            case 'dependente':
                this.nav.dependente();
                break;
            case 'cadastrar':
                this.nav.cadastro();
                break;
            case 'rHome':
                this.nav.rHome();
                break;
            case 'rLembretes':
                this.nav.rLembretes();
                break;
            case 'rEstoque':
                this.nav.rEstoque();
                break;
        }
        localStorage.removeItem('digitarResponsavel');
    }
    //#endregion
    //#region OnInit
    ngOnInit() {
        //Reset
        this.reset();
        //Verificar Login
        this.servidor.verificar();
    }
};
DigitarResponsavelPage.ctorParameters = () => [
    { type: _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
DigitarResponsavelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-digitar-responsavel',
        template: _raw_loader_digitar_responsavel_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_digitar_responsavel_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DigitarResponsavelPage);



/***/ }),

/***/ 9038:
/*!*******************************************************************!*\
  !*** ./src/app/digitar-responsavel/digitar-responsavel.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n/*#region Geral*/\n.card {\n  padding-top: 0px;\n}\n.content {\n  margin-top: 30vh;\n  overflow: hidden;\n  z-index: 20;\n}\n.aqui {\n  color: #FACC22;\n  font-family: \"Saira Italic\";\n}\n.important:active div, .normal:active div {\n  width: 80%;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  background-image: url('Responsável.jpg');\n  background-color: var(--baby-blue);\n  background-position-x: center;\n  background-size: cover;\n  width: 100%;\n  height: 35vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.top img {\n  height: 100%;\n}\n.top .degrade {\n  background-image: linear-gradient(0deg, var(--dark-space-cadet), rgba(23, 23, 59, 0.8), rgba(96, 99, 204, 0.5), rgba(255, 255, 255, 0.1));\n  width: 100%;\n  height: calc(35vh);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n.top .trianguloUp {\n  position: absolute;\n  top: 1px;\n  border-left-width: calc(50vw + 1px);\n  border-right-width: calc(50vw + 1px);\n  border-bottom-width: calc(35vh + 1px);\n  z-index: 1000;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  overflow: hidden;\n}\n.mid span, .mid p, .mid button {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.mid span, .mid h3 {\n  color: var(--white);\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 80vw;\n  overflow: hidden;\n}\n.bot img {\n  width: 60%;\n  margin-top: 30px;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZ2l0YXItcmVzcG9uc2F2ZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixnQkFBQTtBQUNBO0VBRUksZ0JBQUE7QUFDSjtBQUVBO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7QUFESjtBQUlBO0VBRUksY0FBQTtFQUNBLDJCQUFBO0FBRko7QUFLQTtFQUVJLFVBQUE7QUFISjtBQUtBLGFBQUE7QUFFQSxjQUFBO0FBQ0E7RUFFSSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLFVBQUE7QUFOSjtBQVFJO0VBRUksWUFBQTtBQVBSO0FBVUk7RUFFSSx5SUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxVQUFBO0FBWFI7QUFjSTtFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUVBLGFBQUE7QUFmUjtBQWtCQSxhQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtBQWpCSjtBQW1CSTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7QUFsQlI7QUFxQkk7RUFFSSxtQkFBQTtBQXBCUjtBQXVCQSxhQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtBQXRCSjtBQXdCSTtFQUVJLFVBQUE7RUFDQSxnQkFBQTtBQXZCUjtBQTBCQSxhQUFBIiwiZmlsZSI6ImRpZ2l0YXItcmVzcG9uc2F2ZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyojcmVnaW9uIEdlcmFsKi9cbi5jYXJkIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAzMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmFxdWkge1xuICBjb2xvcjogI0ZBQ0MyMjtcbiAgZm9udC1mYW1pbHk6IFwiU2FpcmEgSXRhbGljXCI7XG59XG5cbi5pbXBvcnRhbnQ6YWN0aXZlIGRpdiwgLm5vcm1hbDphY3RpdmUgZGl2IHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLyojZW5kcmVnaW9uKi9cbi8qI3JlZ2lvbiBUb3AqL1xuLnRvcCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvSU1HL1RlbGFzL1Jlc3BvbnPDoXZlbC5qcGcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWJ5LWJsdWUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzV2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG59XG4udG9wIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi50b3AgLmRlZ3JhZGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgdmFyKC0tZGFyay1zcGFjZS1jYWRldCksIHJnYmEoMjMsIDIzLCA1OSwgMC44KSwgcmdiYSg5NiwgOTksIDIwNCwgMC41KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygzNXZoKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDM7XG59XG4udG9wIC50cmlhbmd1bG9VcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiBjYWxjKDUwdncgKyAxcHgpO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IGNhbGMoNTB2dyArIDFweCk7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IGNhbGMoMzV2aCArIDFweCk7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi8qI2VuZHJlZ2lvbiovXG4vKiNyZWdpb24gTWlkZGxlKi9cbi5taWQge1xuICB3aWR0aDogODB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5taWQgc3BhbiwgLm1pZCBwLCAubWlkIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWlkIHNwYW4sIC5taWQgaDMge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4vKiNlbmRyZWdpb24qL1xuLyojcmVnaW9uIEJvdHRvbSovXG4uYm90IHtcbiAgd2lkdGg6IDgwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYm90IGltZyB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi8qI2VuZHJlZ2lvbiovIl19 */");

/***/ }),

/***/ 8690:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/digitar-responsavel/digitar-responsavel.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card full flex\">\r\n    <div class=\"top full flex\">\r\n      <div class=\"degrade\"></div>\r\n\r\n      <div class=\"trianguloUp leftP\"></div>\r\n      <div class=\"trianguloUp rightP\"></div>\r\n    </div>\r\n    \r\n    <div class=\"content\">\r\n      <div class=\"mid horizontal centerA flex\">\r\n        <h3 class=\"line\">Digite o e-mail do responsável</h3>\r\n\r\n        <span class=\"line leftA\">E-mail</span>\r\n        <input [(ngModel)]=\"email\" type=\"email\" class=\"input\">\r\n        <p id=\"erroDigitarResponsavel\" class=\"aviso invisivel\">{{erro}}<a id=\"erroEmailInexistente\" class=\"aqui invisivel\" (click)=\"criar()\">aqui!</a></p>\r\n\r\n        <button (click)=\"registrar()\" class=\"important full flex\">\r\n          <div></div>\r\n          <span>Registrar</span>\r\n        </button>\r\n\r\n        <button (click)=\"voltar()\" class=\"normal full flex\">\r\n          <div></div>\r\n          <span>Voltar</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"bot full flex\">\r\n        <img src=\"../../assets/IMG/Logo/Light (Cima).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_digitar-responsavel_digitar-responsavel_module_ts.js.map