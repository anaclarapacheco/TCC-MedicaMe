(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_cadastro_cadastro_module_ts"],{

/***/ 4981:
/*!*****************************************************!*\
  !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageRoutingModule": () => (/* binding */ CadastroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro.page */ 4809);




const routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_0__.CadastroPage
    }
];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {
};
CadastroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CadastroPageRoutingModule);



/***/ }),

/***/ 8379:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageModule": () => (/* binding */ CadastroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-routing.module */ 4981);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page */ 4809);







let CadastroPageModule = class CadastroPageModule {
};
CadastroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__.CadastroPageRoutingModule
        ],
        declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_1__.CadastroPage]
    })
], CadastroPageModule);



/***/ }),

/***/ 4809:
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPage": () => (/* binding */ CadastroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cadastro.page.html */ 5525);
/* harmony import */ var _cadastro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page.scss */ 3583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navegation.service */ 6192);
/* harmony import */ var _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/servidor.service */ 8914);






let CadastroPage = class CadastroPage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
    }
    //#endregion
    //#region Cadastar
    criar() {
        //Reset
        this.reset();
        //Variaveis
        let validacaoEmail = /\S+@\S+\.\S+/;
        //Verificação dos valores do input
        if (this.email == '' || this.senha == '' || this.confirmarSenha == '' || this.email == null || this.senha == null || this.confirmarSenha == null) {
            this.erro = 'Preencha todos os campos!';
            document.getElementById('erroCadastrar').classList.remove('invisivel');
        }
        else if (!validacaoEmail.test(this.email)) {
            this.erroEmail = 'E-mail inválido, digite novamente!';
            document.getElementById('erroEmail').classList.remove('invisivel');
        }
        else if (this.senha.length < 5) {
            document.getElementById('erroSenha').classList.remove('invisivel');
        }
        else if (this.senha != this.confirmarSenha) {
            this.erro = 'As duas senhas não coincidem, digite novamente!';
            document.getElementById('erroCadastrar').classList.remove('invisivel');
        }
        else {
            //Valores que serão enviados
            let dados = 'phpEmail=' + this.email + '&phpSenha=' + this.senha;
            //Enviando ao PHP
            this.servidor.enviar('Cadastrar/main.php', dados).subscribe(res => {
                if (res[0]['Erro'] == false) {
                    localStorage.setItem('email', this.email);
                    localStorage.setItem('dadosAdicionais', 'dependente');
                    this.nav.dadosAdicionais();
                }
                else {
                    this.erroEmail = 'E-mail já utilizado, digite novamente!';
                    document.getElementById('erroEmail').classList.remove('invisivel');
                }
            });
        }
    }
    //#endregion
    //#region Reset
    reset() {
        document.getElementById('erroCadastrar').classList.add('invisivel');
        document.getElementById('erroEmail').classList.add('invisivel');
        document.getElementById('erroSenha').classList.add('invisivel');
    }
    //#endregion
    //#region Navegação
    entrar() {
        this.nav.entrar();
    }
    //#endregion
    //#region OnInit
    ngOnInit() {
        //Reset
        this.reset;
    }
};
CadastroPage.ctorParameters = () => [
    { type: _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
CadastroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cadastro',
        template: _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cadastro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CadastroPage);



/***/ }),

/***/ 3583:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.content {\n  overflow: hidden;\n}\n.important:active div {\n  width: 80%;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  width: 80vw;\n  overflow: hidden;\n}\n.top img {\n  width: 90%;\n  margin-bottom: 30px;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  overflow: hidden;\n}\n.mid span, .mid p, .mid button {\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n.mid span, .mid h3, .mid p {\n  color: var(--white);\n}\n.mid button {\n  position: initial;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQUNBO0VBRUksZ0JBQUE7QUFBSjtBQUdBO0VBRUksVUFBQTtBQURKO0FBR0EsYUFBQTtBQUVBLGNBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFFSSxVQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQU1BLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLGdCQUFBO0FBTEo7QUFPSTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVNJO0VBRUksbUJBQUE7QUFSUjtBQVdJO0VBRUksaUJBQUE7QUFWUjtBQWFBLGFBQUEiLCJmaWxlIjoiY2FkYXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIEdlcmFsKi9cclxuLmNvbnRlbnRcclxue1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmltcG9ydGFudDphY3RpdmUgZGl2XHJcbntcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBUb3AqL1xyXG4udG9wXHJcbntcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBpbWdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBNaWRkbGUqL1xyXG4ubWlkXHJcbntcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBzcGFuLCBwLCBidXR0b25cclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiwgaDMsIHBcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcbiJdfQ== */");

/***/ }),

/***/ 5525:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card full flex\">\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <img src=\"../../assets/IMG/Logo/Light (Lado).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n      </div>\r\n      \r\n      <div class=\"mid horizontal centerA flex\">\r\n        <h3 class=\"line\">Preencha os campos para criar sua conta!</h3>\r\n\r\n        <span class=\"line leftA\">E-mail</span>\r\n        <input [(ngModel)]=\"email\" type=\"email\" class=\"input\">\r\n        <p id=\"erroEmail\" class=\"aviso invisivel\">{{erroEmail}}</p>\r\n\r\n        <span class=\"line leftA\">Senha</span>\r\n        <input [(ngModel)]=\"senha\" type=\"password\" class=\"input\">\r\n        <p id=\"erroSenha\" class=\"aviso invisivel\">Senha muito pequena, digite no mínimo 5 caracteres!</p>\r\n\r\n        <span class=\"line leftA\">Confirmar senha</span>\r\n        <input [(ngModel)]=\"confirmarSenha\" type=\"password\" class=\"input\">\r\n        <p id=\"erroCadastrar\" class=\"aviso invisivel\">{{erro}}</p>\r\n\r\n        <button (click)=\"criar()\" class=\"important full flex\">\r\n          <div></div>\r\n          <span>Criar</span>\r\n        </button>\r\n        \r\n        <p>Já possui uma conta? Faça <a (click)=\"entrar()\">login!</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cadastro_cadastro_module_ts.js.map