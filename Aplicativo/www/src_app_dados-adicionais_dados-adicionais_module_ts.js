(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_dados-adicionais_dados-adicionais_module_ts"],{

/***/ 53304:
/*!*********************************************************************!*\
  !*** ./src/app/dados-adicionais/dados-adicionais-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DadosAdicionaisPageRoutingModule": () => (/* binding */ DadosAdicionaisPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dados_adicionais_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dados-adicionais.page */ 55856);




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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dados_adicionais_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dados-adicionais-routing.module */ 53304);
/* harmony import */ var _dados_adicionais_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dados-adicionais.page */ 55856);







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

/***/ 55856:
/*!***********************************************************!*\
  !*** ./src/app/dados-adicionais/dados-adicionais.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DadosAdicionaisPage": () => (/* binding */ DadosAdicionaisPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dados_adicionais_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dados-adicionais.page.html */ 61919);
/* harmony import */ var _dados_adicionais_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dados-adicionais.page.scss */ 80133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navegation.service */ 6192);
/* harmony import */ var _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/servidor.service */ 58914);






let DadosAdicionaisPage = class DadosAdicionaisPage {
    //#region Constructor
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        //Adicionar valor máximo e minimo no ion-datetime
        let nowData = new Date();
        this.maximo = nowData.getFullYear() + '-' + String(nowData.getMonth() + 1).padStart(2, '0') + '-' + String(nowData.getDate()).padStart(2, '0');
        this.minimo = String(nowData.getFullYear() - 100) + '-12-31';
    }
    //#endregion
    //#region Adicionar dados adicionais
    adicionar() {
        //Reset
        this.reset();
        //Verificação dos valores do input
        if (this.nome == '' || this.data == '' || this.nome == null || this.data == null) {
            document.getElementById('erroDadosAdicionais').classList.remove('invisivel');
        }
        else {
            //Valores que serão enviados
            let dados = 'phpNome=' + this.nome + '&phpData=' + this.data.substring(0, 10) + '&phpEmail=' + localStorage.getItem('email');
            //Enviando ao PHP
            this.servidor.enviar('Dados Adicionais/main.php', dados).subscribe(res => {
                if (res[0]['Erro'] == false) {
                    this.nav.dependente();
                }
            });
        }
    }
    //#endregion
    //#region Reset
    reset() {
        document.getElementById('erroDadosAdicionais').classList.add('invisivel');
    }
    //#endregion
    //#region ViewWillEnter
    ionViewWillEnter() {
        //Reset
        this.reset();
        //Verificar Login
        this.servidor.verificar();
    }
    //#endregion
    ngOnInit() { }
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

/***/ 80133:
/*!*************************************************************!*\
  !*** ./src/app/dados-adicionais/dados-adicionais.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.card {\n  padding-top: 0px;\n}\n.content {\n  margin-top: 33vh;\n  overflow: hidden;\n  z-index: 20;\n}\n.important:active div, .normal:active div {\n  width: 80%;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  background-image: url('Dados-Adicionais.jpg');\n  background-color: var(--baby-blue);\n  background-position-x: center;\n  background-size: cover;\n  width: 100%;\n  height: 35vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.top img {\n  height: 100%;\n}\n.top .degrade {\n  background-image: linear-gradient(0deg, var(--dark-space-cadet), rgba(23, 23, 59, 0.8), rgba(96, 99, 204, 0.5), rgba(255, 255, 255, 0.1));\n  width: 100%;\n  height: calc(35vh);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n.top .trianguloUp {\n  position: absolute;\n  top: 1px;\n  border-left-width: calc(50vw + 1px);\n  border-right-width: calc(50vw + 1px);\n  border-bottom-width: calc(35vh + 1px);\n  z-index: 1000;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  padding-bottom: 5px;\n  overflow: hidden;\n}\n.mid .data {\n  padding-left: 0px !important;\n}\n.mid span, .mid p {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.mid button:nth-of-type(1) {\n  margin-top: 30px;\n}\n.mid span, .mid h3 {\n  color: var(--white);\n}\n.mid button {\n  position: initial;\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 80vw;\n  overflow: hidden;\n}\n.bot img {\n  width: 90%;\n  margin-top: 30px;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZG9zLWFkaWNpb25haXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFFSSxnQkFBQTtBQUFKO0FBR0E7RUFFSSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtBQUZKO0FBS0E7RUFFSSxVQUFBO0FBSEo7QUFLQSxhQUFBO0FBRUEsY0FBQTtBQUNBO0VBRUksNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxVQUFBO0FBTko7QUFRSTtFQUVJLFlBQUE7QUFQUjtBQVVJO0VBRUkseUlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsVUFBQTtBQVhSO0FBY0k7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFFQSxhQUFBO0FBZlI7QUFrQkEsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBRUEsbUJBQUE7RUFFQSxnQkFBQTtBQW5CSjtBQXFCSTtFQUVJLDRCQUFBO0FBcEJSO0FBdUJJO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQXRCUjtBQXlCSTtFQUVJLGdCQUFBO0FBeEJSO0FBMkJJO0VBRUksbUJBQUE7QUExQlI7QUE2Qkk7RUFFSSxpQkFBQTtBQTVCUjtBQStCQSxhQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtBQTlCSjtBQWdDSTtFQUVJLFVBQUE7RUFDQSxnQkFBQTtBQS9CUjtBQWtDQSxhQUFBIiwiZmlsZSI6ImRhZG9zLWFkaWNpb25haXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIEdlcmFsKi9cbi5jYXJkXG57XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLmNvbnRlbnRcbntcbiAgICBtYXJnaW4tdG9wOiAzM3ZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICB6LWluZGV4OiAyMDtcbn1cblxuLmltcG9ydGFudDphY3RpdmUgZGl2LCAubm9ybWFsOmFjdGl2ZSBkaXZcbntcbiAgICB3aWR0aDogODAlO1xufVxuLyojZW5kcmVnaW9uKi9cblxuLyojcmVnaW9uIFRvcCovXG4udG9wXG57ICAgIFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvSU1HL1RlbGFzL0RhZG9zLUFkaWNpb25haXMuanBnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWJ5LWJsdWUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXZoO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgei1pbmRleDogMjtcblxuICAgIGltZ1xuICAgIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5kZWdyYWRlXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgdmFyKC0tZGFyay1zcGFjZS1jYWRldCksIHJnYmEoMjMsIDIzLCA1OSwgMC44KSwgcmdiYSg5NiwgOTksIDIwNCwgMC41KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygzNXZoKTtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICB6LWluZGV4OiAzO1xuICAgIH1cblxuICAgIC50cmlhbmd1bG9VcFxuICAgIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDFweDtcblxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogY2FsYyg1MHZ3ICsgMXB4KTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiBjYWxjKDUwdncgKyAxcHgpO1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiBjYWxjKDM1dmggKyAxcHgpO1xuXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgfVxufVxuLyojZW5kcmVnaW9uKi9cblxuLyojcmVnaW9uIE1pZGRsZSovXG4ubWlkXG57XG4gICAgd2lkdGg6IDgwdnc7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5kYXRhXG4gICAge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIHNwYW4sIHBcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgYnV0dG9uOm50aC1vZi10eXBlKDEpXG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cblxuICAgIHNwYW4sIGgzXG4gICAge1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIH1cblxuICAgIGJ1dHRvblxuICAgIHtcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgfVxufVxuLyojZW5kcmVnaW9uKi9cblxuLyojcmVnaW9uIEJvdHRvbSovXG4uYm90XG57XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGltZ1xuICAgIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG59XG4vKiNlbmRyZWdpb24qL1xuIl19 */");

/***/ }),

/***/ 61919:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dados-adicionais/dados-adicionais.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"card horizontal flex\">\n    <div class=\"top full flex\">\n      <div class=\"degrade\"></div>\n\n      <div class=\"trianguloUp leftP\"></div>\n      <div class=\"trianguloUp rightP\"></div>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"mid horizontal centerA flex\">\n        <h3 class=\"line\">Dados adicionais</h3>\n\n        <span class=\"line leftA\">Nome</span>\n        <input [(ngModel)]=\"nome\" type=\"text\" class=\"input\" maxlength=\"100\">\n\n        <span class=\"line leftA\">Data de nascimento</span>\n        <input [(ngModel)]=\"data\" type=\"date\" class=\"input\" min=\"{{minimo}}\" max=\"{{maximo}}\">\n\n        <p id=\"erroDadosAdicionais\" class=\"aviso invisivel\">Preencha todos os campos!</p>\n\n        <button (click)=\"adicionar()\" class=\"important full flex\"><span (click)=\"adicionar()\">Adicionar</span></button>\n      </div>\n\n      <div class=\"bot full flex\">\n        <img src=\"../../assets/IMG/Logo/Light (Lado).png\" alt=\"Logo do aplicativo: MedicaMe\">\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dados-adicionais_dados-adicionais_module_ts.js.map