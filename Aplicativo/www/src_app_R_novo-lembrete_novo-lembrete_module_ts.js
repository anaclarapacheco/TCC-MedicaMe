(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_novo-lembrete_novo-lembrete_module_ts"],{

/***/ 4955:
/*!*****************************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovoLembretePageRoutingModule": () => (/* binding */ NovoLembretePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _novo_lembrete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novo-lembrete.page */ 7816);




const routes = [
    {
        path: '',
        component: _novo_lembrete_page__WEBPACK_IMPORTED_MODULE_0__.NovoLembretePage
    }
];
let NovoLembretePageRoutingModule = class NovoLembretePageRoutingModule {
};
NovoLembretePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NovoLembretePageRoutingModule);



/***/ }),

/***/ 5283:
/*!*********************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovoLembretePageModule": () => (/* binding */ NovoLembretePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _novo_lembrete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novo-lembrete-routing.module */ 4955);
/* harmony import */ var _novo_lembrete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./novo-lembrete.page */ 7816);







let NovoLembretePageModule = class NovoLembretePageModule {
};
NovoLembretePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _novo_lembrete_routing_module__WEBPACK_IMPORTED_MODULE_0__.NovoLembretePageRoutingModule
        ],
        declarations: [_novo_lembrete_page__WEBPACK_IMPORTED_MODULE_1__.NovoLembretePage]
    })
], NovoLembretePageModule);



/***/ }),

/***/ 7816:
/*!*******************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovoLembretePage": () => (/* binding */ NovoLembretePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_novo_lembrete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./novo-lembrete.page.html */ 6143);
/* harmony import */ var _novo_lembrete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./novo-lembrete.page.scss */ 8887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 8914);






let NovoLembretePage = class NovoLembretePage {
    //#region Constructor
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        this.titulo = 'Informações do medicamento';
    }
    //#endregion  
    //#region Navegação
    proximo() {
        document.getElementById('um').classList.add('invisivel');
        document.getElementById('dois').classList.remove('invisivel');
        this.titulo = 'Período';
    }
    voltar() {
        document.getElementById('dois').classList.add('invisivel');
        document.getElementById('um').classList.remove('invisivel');
        this.titulo = 'Informações do medicamento';
    }
    cancelar() {
        //Voltar
        localStorage.removeItem('agendamento');
        this.nav.rLembretes();
    }
    //#endregion
    //#region ViewWillEnter
    ionViewWillEnter() {
        //Verificar Login
        this.servidor.verificar();
        //Dependente
        if (localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '') {
            this.nomeDependente = localStorage.getItem('nomeDependente');
            this.email = localStorage.getItem('emailDependente');
        }
        else {
            this.email = localStorage.getItem('email');
        }
        //Editar
        if (localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '') {
            this.nomeMedicamento = '';
            this.formaFarma = '';
            this.dosagem = '';
            this.descricao = '';
        }
    }
    //#endregion
    ngOnInit() { }
};
NovoLembretePage.ctorParameters = () => [
    { type: src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
NovoLembretePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-novo-lembrete',
        template: _raw_loader_novo_lembrete_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_novo_lembrete_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NovoLembretePage);



/***/ }),

/***/ 8887:
/*!*********************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.content {\n  overflow: hidden;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  width: 80vw;\n  overflow: hidden;\n  border-bottom-color: var(--white);\n  border-bottom-width: 3px;\n  border-bottom-style: solid;\n}\n.top h3 {\n  color: var(--white);\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.top img {\n  width: 80%;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  overflow: scroll;\n}\n.mid .bloco {\n  width: 45%;\n}\n.mid .bloco:nth-of-type(1) {\n  margin-right: 10%;\n}\n.mid span, .mid h3, .mid button {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.mid span, .mid h3 {\n  color: var(--white);\n}\n.mid h3 {\n  border-bottom-color: var(--white);\n  border-bottom-width: 3px;\n  border-bottom-style: solid;\n  line-height: 40px;\n  margin-bottom: 20px;\n}\n.mid .no {\n  margin-bottom: 0px;\n}\n.mid textarea {\n  height: 80px;\n  resize: none;\n}\n.mid .important {\n  position: inherit;\n}\n.mid .important svg {\n  height: 20px;\n  position: absolute;\n  right: calc(10vw + 10px);\n  border-radius: 10px;\n  fill: var(--dark-space-cadet);\n}\n.mid .normal svg {\n  height: 20px;\n  position: absolute;\n  left: calc(10vw + 10px);\n  transform: rotate(180deg);\n  border-radius: 10px;\n  fill: var(--white);\n}\n/*#endregion*/\n#um {\n  height: 74vh;\n}\n#dois {\n  height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdm8tbGVtYnJldGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFFSSxnQkFBQTtBQUFKO0FBRUEsYUFBQTtBQUVBLGNBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBQUZKO0FBSUk7RUFFSSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU9JO0VBRUksVUFBQTtBQU5SO0FBU0EsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVVJO0VBRUksVUFBQTtBQVRSO0FBWUk7RUFFSSxpQkFBQTtBQVhSO0FBY0k7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0FBYlI7QUFnQkk7RUFFSSxtQkFBQTtBQWZSO0FBa0JJO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBRUEsaUJBQUE7RUFFQSxtQkFBQTtBQW5CUjtBQXNCSTtFQUVJLGtCQUFBO0FBckJSO0FBd0JJO0VBRUksWUFBQTtFQUVBLFlBQUE7QUF4QlI7QUEyQkk7RUFFSSxpQkFBQTtBQTFCUjtBQTRCUTtFQUVJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLHdCQUFBO0VBRUEsbUJBQUE7RUFFQSw2QkFBQTtBQTlCWjtBQWtDSTtFQUVJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLHVCQUFBO0VBRUEseUJBQUE7RUFFQSxtQkFBQTtFQUVBLGtCQUFBO0FBckNSO0FBd0NBLGFBQUE7QUFHQTtFQUVJLFlBQUE7QUF4Q0o7QUEyQ0E7RUFFSSxZQUFBO0FBekNKIiwiZmlsZSI6Im5vdm8tbGVtYnJldGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIEdlcmFsKi9cclxuLmNvbnRlbnRcclxue1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIFRvcCovXHJcbi50b3Bcclxue1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cclxuICAgIGgzXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZ1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBNaWRkbGUqL1xyXG4ubWlkXHJcbntcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcbiAgICAuYmxvY29cclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ibG9jbzpudGgtb2YtdHlwZSgxKVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4sIGgzLCBidXR0b25cclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiwgaDNcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGgzXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5vXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRhcmVhXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmltcG9ydGFudFxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN2Z1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogY2FsYygxMHZ3ICsgMTBweCk7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZmlsbDogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ub3JtYWwgc3ZnXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogY2FsYygxMHZ3ICsgMTBweCk7XHJcblxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlsbDogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vLyNyZWdpb24gVW0gZSBEb2lzXHJcbiN1bVxyXG57XHJcbiAgICBoZWlnaHQ6IDc0dmg7XHJcbn1cclxuXHJcbiNkb2lzXHJcbntcclxuICAgIGhlaWdodDogODB2aDtcclxufVxyXG4vLyNlbmRyZWdpb25cclxuIl19 */");

/***/ }),

/***/ 6143:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/novo-lembrete/novo-lembrete.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card full flex\">\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n        <h3 class=\"line\">{{titulo}}</h3>\r\n      </div>\r\n      \r\n      <div class=\"mid full flex\">\r\n        <div id=\"um\" class=\"full flex\">\r\n          <span class=\"line leftA\">Nome do medicamento</span>\r\n          <input [(ngModel)]=\"nomdeMedicamento\" type=\"text\" class=\"input\">\r\n  \r\n          <span class=\"line leftA\">Forma farmacêutica</span>\r\n          <input [(ngModel)]=\"formaFarma\" type=\"text\" class=\"input\">\r\n  \r\n          <span class=\"line leftA\">Dosagem</span>\r\n          <input [(ngModel)]=\"dosagem\" type=\"number\" class=\"input\">\r\n  \r\n          <h3 class=\"line centerA\">Descrição</h3>\r\n          <textarea [(ngModel)]=\"descricao\" class=\"input\"></textarea>\r\n          <p class=\"aviso invisivel\">Preencha todos os campos</p>\r\n\r\n          <button (click)=\"proximo()\" class=\"important full flex\">\r\n            Próximo\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\r\n            </svg>\r\n          </button>\r\n          <button (click)=\"cancelar()\" class=\"normal\">Cancelar</button>\r\n        </div>\r\n  \r\n        <div id=\"dois\" class=\"full flex invisivel\">\r\n          <div class=\"bloco flex\">\r\n            <span class=\"line leftA\">Ínicio</span>\r\n            <input type=\"time\" class=\"input\">\r\n          </div>\r\n\r\n          <div class=\"bloco flex\">\r\n            <span class=\"line leftA\">Final</span>\r\n            <input type=\"time\" class=\"input\">\r\n          </div>\r\n\r\n          <span class=\"line leftA\">Dias</span>\r\n          <input type=\"number\" class=\"input\">\r\n\r\n          <span class=\"line leftA\">Horas</span>\r\n          <input type=\"time\" class=\"input\">\r\n  \r\n          <h3 class=\"line centerA no\">Estoque</h3>\r\n          <span class=\"line leftA\">Quantidade atual</span>\r\n          <input type=\"number\" class=\"input\">\r\n\r\n          <span class=\"line leftA\">Quantidade miníma (notificação)</span>\r\n          <input type=\"number\" class=\"input\">\r\n\r\n          <button (click)=\"criar()\" class=\"important\">Criar Lembrete</button>\r\n\r\n          <button (click)=\"voltar()\" class=\"normal full flex\"> Voltar\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\r\n            </svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_novo-lembrete_novo-lembrete_module_ts.js.map