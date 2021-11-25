(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_cadastro_cadastro_module_ts"],{

/***/ 84981:
/*!*****************************************************!*\
  !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageRoutingModule": () => (/* binding */ CadastroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro.page */ 24809);




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

/***/ 68379:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageModule": () => (/* binding */ CadastroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-routing.module */ 84981);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page */ 24809);







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

/***/ 24809:
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPage": () => (/* binding */ CadastroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cadastro.page.html */ 45525);
/* harmony import */ var _cadastro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page.scss */ 93583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navegation.service */ 6192);
/* harmony import */ var _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/servidor.service */ 58914);






let CadastroPage = class CadastroPage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
    }
    //#endregion
    //#region Olho
    olho(input) {
        if (document.getElementById(input).getAttribute('type') == 'password') {
            document.getElementById(input).setAttribute('type', 'text');
            document.getElementById(input + 'SVG2').classList.add('invisivel');
            document.getElementById(input + 'SVG1').classList.remove('invisivel');
        }
        else {
            document.getElementById(input).setAttribute('type', 'password');
            document.getElementById(input + 'SVG1').classList.add('invisivel');
            document.getElementById(input + 'SVG2').classList.remove('invisivel');
        }
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

/***/ 93583:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.content {\n  overflow: hidden;\n}\n.important:active div {\n  width: 80%;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  width: 80vw;\n  overflow: hidden;\n}\n.top img {\n  width: 90%;\n  margin-bottom: 30px;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  overflow: hidden;\n}\n.mid span, .mid p, .mid button {\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n.mid span, .mid h3, .mid p {\n  color: var(--white);\n}\n.mid input:nth-of-type(2), .mid input:nth-of-type(3) {\n  width: 85%;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 0px;\n}\n.mid button {\n  position: initial;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQUNBO0VBRUksZ0JBQUE7QUFBSjtBQUdBO0VBRUksVUFBQTtBQURKO0FBR0EsYUFBQTtBQUVBLGNBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFFSSxVQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQU1BLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLGdCQUFBO0FBTEo7QUFPSTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVNJO0VBRUksbUJBQUE7QUFSUjtBQVdJO0VBRUksVUFBQTtFQUVBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBWFI7QUFjSTtFQUVJLGlCQUFBO0FBYlI7QUFnQkEsYUFBQSIsImZpbGUiOiJjYWRhc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gR2VyYWwqL1xyXG4uY29udGVudFxyXG57XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW1wb3J0YW50OmFjdGl2ZSBkaXZcclxue1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIFRvcCovXHJcbi50b3Bcclxue1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGltZ1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIE1pZGRsZSovXHJcbi5taWRcclxue1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIHNwYW4sIHAsIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLCBoMywgcFxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQ6bnRoLW9mLXR5cGUoMiksIGlucHV0Om50aC1vZi10eXBlKDMpXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuXHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuIl19 */");

/***/ }),

/***/ 45525:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card full flex\">\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <img src=\"../../assets/IMG/Logo/Light (Lado).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n      </div>\r\n      \r\n      <div class=\"mid horizontal centerA flex\">\r\n        <h3 class=\"line\">Preencha os campos para criar sua conta!</h3>\r\n\r\n        <span class=\"line leftA\">E-mail</span>\r\n        <input [(ngModel)]=\"email\" type=\"email\" class=\"input\" maxlength=\"100\">\r\n        <p id=\"erroEmail\" class=\"aviso invisivel\">{{erroEmail}}</p>\r\n\r\n        <span class=\"line leftA\">Senha</span>\r\n        <input id=\"senhaCad\" [(ngModel)]=\"senha\" type=\"password\" class=\"input\" maxlength=\"45\">\r\n\r\n        <button (click)=\"olho('senhaCad')\" class=\"olho\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path id=\"senhaCadSVG1\" class=\"invisivel\"  d=\"M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z\"/>\r\n            <path id=\"senhaCadSVG2\" d=\"M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z\"/>\r\n          </svg>\r\n        </button>\r\n        <p id=\"erroSenha\" class=\"aviso invisivel\">Senha muito pequena, digite no mínimo 5 caracteres!</p>\r\n\r\n        <span class=\"line leftA\">Confirmar senha</span>\r\n        <input id=\"confSenhaCad\" [(ngModel)]=\"confirmarSenha\" type=\"password\" class=\"input\" maxlength=\"45\">\r\n        <button (click)=\"olho('confSenhaCad')\" class=\"olho\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path id=\"confSenhaCadSVG1\" class=\"invisivel\"  d=\"M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z\"/>\r\n            <path id=\"confSenhaCadSVG2\" d=\"M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z\"/>\r\n          </svg>\r\n        </button>\r\n        <p id=\"erroCadastrar\" class=\"aviso invisivel\">{{erro}}</p>\r\n\r\n        <button (click)=\"criar()\" class=\"important full flex\"><span>Criar</span></button>\r\n        \r\n        <p>Já possui uma conta? Faça <a (click)=\"entrar()\">login!</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cadastro_cadastro_module_ts.js.map