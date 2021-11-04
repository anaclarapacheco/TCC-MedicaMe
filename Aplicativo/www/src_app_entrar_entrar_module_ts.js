(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_entrar_entrar_module_ts"],{

/***/ 9428:
/*!*************************************************!*\
  !*** ./src/app/entrar/entrar-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrarPageRoutingModule": () => (/* binding */ EntrarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _entrar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrar.page */ 3540);




const routes = [
    {
        path: '',
        component: _entrar_page__WEBPACK_IMPORTED_MODULE_0__.EntrarPage
    }
];
let EntrarPageRoutingModule = class EntrarPageRoutingModule {
};
EntrarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EntrarPageRoutingModule);



/***/ }),

/***/ 1096:
/*!*****************************************!*\
  !*** ./src/app/entrar/entrar.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrarPageModule": () => (/* binding */ EntrarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _entrar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrar-routing.module */ 9428);
/* harmony import */ var _entrar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrar.page */ 3540);







let EntrarPageModule = class EntrarPageModule {
};
EntrarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _entrar_routing_module__WEBPACK_IMPORTED_MODULE_0__.EntrarPageRoutingModule
        ],
        declarations: [_entrar_page__WEBPACK_IMPORTED_MODULE_1__.EntrarPage]
    })
], EntrarPageModule);



/***/ }),

/***/ 3540:
/*!***************************************!*\
  !*** ./src/app/entrar/entrar.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrarPage": () => (/* binding */ EntrarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_entrar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./entrar.page.html */ 2127);
/* harmony import */ var _entrar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrar.page.scss */ 6221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navegation.service */ 6192);
/* harmony import */ var _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/servidor.service */ 8914);






let EntrarPage = class EntrarPage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
    }
    //#endregion
    //#region Entrar
    entrar() {
        //Reset
        this.reset();
        //Verificação dos valores do input
        let validacaoEmail = /\S+@\S+\.\S+/;
        if (this.email == '' || this.senha == '' || this.email == null || this.senha == null) {
            this.erro = 'Preencha todos os campos!';
            document.getElementById('erroEntrar').classList.remove('invisivel');
        }
        else {
            //Valores que serão enviados
            let dados = 'phpEmail=' + this.email + '&phpSenha=' + this.senha;
            //Enviando ao PHP
            this.servidor.enviar('Entrar/main.php', dados).subscribe(res => {
                if (res[0]['Erro'] == false) {
                    //Descobrindo qual é o Tipo do Usuário
                    switch (res[0]['Tipo Usuario']) {
                        case 'Responsavel':
                            this.nav.rHome();
                            break;
                        case 'Dependente':
                            this.nav.dHome();
                            break;
                    }
                    localStorage.setItem('email', this.email);
                }
                else {
                    this.erro = 'E-mail ou Senha inválidos, digite novamente!';
                    document.getElementById('erroEntrar').classList.remove('invisivel');
                }
            });
        }
    }
    //#endregion
    //#region Reset
    reset() {
        document.getElementById('erroEntrar').classList.add('invisivel');
    }
    //#endregion
    //#region Navegação
    cadastrar() {
        this.nav.cadastro();
    }
    //#endregion
    //#region OnInit
    ngOnInit() {
        //Reset
        this.reset();
    }
};
EntrarPage.ctorParameters = () => [
    { type: _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
EntrarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-entrar',
        template: _raw_loader_entrar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_entrar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EntrarPage);



/***/ }),

/***/ 6221:
/*!*****************************************!*\
  !*** ./src/app/entrar/entrar.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.content {\n  overflow: hidden;\n}\n.important {\n  position: inherit;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  width: 80vw;\n  overflow: hidden;\n}\n.top img {\n  width: 90%;\n  margin-bottom: 30px;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  overflow: hidden;\n}\n.mid span, .mid p, .mid button {\n  margin: 30px 0px 10px 0px;\n}\n.mid span, .mid h3, .mid p {\n  color: var(--white);\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQUE7QUFDQTtFQUVJLGdCQUFBO0FBQUo7QUFHQTtFQUVJLGlCQUFBO0FBREo7QUFHQSxhQUFBO0FBRUEsY0FBQTtBQUNBO0VBRUksV0FBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUVJLFVBQUE7RUFDQSxtQkFBQTtBQUhSO0FBTUEsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQU9JO0VBRUkseUJBQUE7QUFOUjtBQVNJO0VBRUksbUJBQUE7QUFSUjtBQVdBLGFBQUEiLCJmaWxlIjoiZW50cmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qI3JlZ2lvbiBHZXJhbCovXHJcbi5jb250ZW50XHJcbntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbXBvcnRhbnRcclxue1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBUb3AqL1xyXG4udG9wXHJcbntcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBpbWdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBNaWRkbGUqL1xyXG4ubWlkXHJcbntcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBzcGFuLCBwLCBidXR0b25cclxuICAgIHtcclxuICAgICAgICBtYXJnaW46IDMwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4sIGgzLCBwXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG4iXX0= */");

/***/ }),

/***/ 2127:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entrar/entrar.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card full flex\">\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <img src=\"../../assets/IMG/Logo/Light (Lado).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n      </div>\r\n      \r\n      <div class=\"mid horizontal flex centerA\">\r\n        <h3 class=\"line\">Preencha os campos para criar sua conta!</h3>\r\n\r\n        <span class=\"line leftA\">E-mail</span>\r\n        <input [(ngModel)]=\"email\" type=\"email\" class=\"input\">\r\n\r\n        <span class=\"line leftA\">Senha</span>\r\n        <input [(ngModel)]=\"senha\" type=\"password\" class=\"input\">\r\n        \r\n        <p id=\"erroEntrar\" class=\"aviso invisivel\">{{erro}}</p>\r\n\r\n        <button (click)=\"entrar()\" class=\"important full flex\"><span>Entrar</span></button>\r\n        \r\n        <p>Não possui uma conta? <a (click)=\"cadastrar()\">Cadastre-se!</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_entrar_entrar_module_ts.js.map