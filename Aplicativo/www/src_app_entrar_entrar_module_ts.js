(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_entrar_entrar_module_ts"],{

/***/ 69428:
/*!*************************************************!*\
  !*** ./src/app/entrar/entrar-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrarPageRoutingModule": () => (/* binding */ EntrarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _entrar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrar.page */ 53540);




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

/***/ 41096:
/*!*****************************************!*\
  !*** ./src/app/entrar/entrar.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrarPageModule": () => (/* binding */ EntrarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _entrar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrar-routing.module */ 69428);
/* harmony import */ var _entrar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrar.page */ 53540);







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

/***/ 53540:
/*!***************************************!*\
  !*** ./src/app/entrar/entrar.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrarPage": () => (/* binding */ EntrarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_entrar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./entrar.page.html */ 52127);
/* harmony import */ var _entrar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrar.page.scss */ 16221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navegation.service */ 6192);
/* harmony import */ var _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/servidor.service */ 58914);






let EntrarPage = class EntrarPage {
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
    //#region Entrar
    entrar() {
        //Reset
        this.reset();
        //Verificação dos valores do input
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

/***/ 16221:
/*!*****************************************!*\
  !*** ./src/app/entrar/entrar.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.content {\n  overflow: hidden;\n}\n.important {\n  position: inherit;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  width: 80vw;\n  overflow: hidden;\n}\n.top img {\n  width: 90%;\n  margin-bottom: 30px;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  overflow: hidden;\n}\n.mid span, .mid p, .mid button {\n  margin: 30px 0px 10px 0px;\n}\n.mid span, .mid h3, .mid p {\n  color: var(--white);\n}\n.mid input:nth-of-type(2) {\n  width: 85%;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 0px;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQUE7QUFDQTtFQUVJLGdCQUFBO0FBQUo7QUFHQTtFQUVJLGlCQUFBO0FBREo7QUFHQSxhQUFBO0FBRUEsY0FBQTtBQUNBO0VBRUksV0FBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUVJLFVBQUE7RUFDQSxtQkFBQTtBQUhSO0FBTUEsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQU9JO0VBRUkseUJBQUE7QUFOUjtBQVNJO0VBRUksbUJBQUE7QUFSUjtBQVdJO0VBRUksVUFBQTtFQUVBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBWFI7QUFjQSxhQUFBIiwiZmlsZSI6ImVudHJhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gR2VyYWwqL1xyXG4uY29udGVudFxyXG57XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW1wb3J0YW50XHJcbntcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gVG9wKi9cclxuLnRvcFxyXG57XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gTWlkZGxlKi9cclxuLm1pZFxyXG57XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgc3BhbiwgcCwgYnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDBweCAxMHB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLCBoMywgcFxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQ6bnRoLW9mLXR5cGUoMilcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG5cclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG4iXX0= */");

/***/ }),

/***/ 52127:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entrar/entrar.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card full flex\">\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <img src=\"../../assets/IMG/Logo/Light (Lado).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n      </div>\r\n      \r\n      <div class=\"mid horizontal flex centerA\">\r\n        <h3 class=\"line\">Preencha os campos para entrar na sua conta!</h3>\r\n\r\n        <span class=\"line leftA\">E-mail</span>\r\n        <input [(ngModel)]=\"email\" type=\"email\" class=\"input\" maxlength=\"100\">\r\n\r\n        <span class=\"line leftA\">Senha</span>\r\n        <input id=\"senhaEntr\" [(ngModel)]=\"senha\" type=\"password\" class=\"input\" maxlength=\"45\">\r\n        <button (click)=\"olho('senhaEntr')\" class=\"olho\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path id=\"senhaEntrSVG1\" class=\"invisivel\"  d=\"M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z\"/>\r\n            <path id=\"senhaEntrSVG2\" d=\"M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z\"/>\r\n          </svg>\r\n        </button>\r\n        \r\n        <p id=\"erroEntrar\" class=\"aviso invisivel\">{{erro}}</p>\r\n\r\n        <button (click)=\"entrar()\" class=\"important full flex\"><span>Entrar</span></button>\r\n        \r\n        <p>Não possui uma conta? <a (click)=\"cadastrar()\">Cadastre-se!</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_entrar_entrar_module_ts.js.map