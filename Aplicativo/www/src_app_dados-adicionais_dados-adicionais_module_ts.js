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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.card {\n  padding-top: 0px;\n}\n.content {\n  margin-top: 33vh;\n  overflow: hidden;\n  z-index: 20;\n}\n.important:active div, .normal:active div {\n  width: 80%;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  background-image: url('Dados-Adicionais.jpg');\n  background-color: var(--baby-blue);\n  background-position-x: center;\n  background-size: cover;\n  width: 100%;\n  height: 35vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.top img {\n  height: 100%;\n}\n.top .degrade {\n  background-image: linear-gradient(0deg, var(--dark-space-cadet), rgba(23, 23, 59, 0.8), rgba(96, 99, 204, 0.5), rgba(255, 255, 255, 0.1));\n  width: 100%;\n  height: calc(35vh);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n}\n.top .trianguloUp {\n  position: absolute;\n  top: 1px;\n  border-left-width: calc(50vw + 1px);\n  border-right-width: calc(50vw + 1px);\n  border-bottom-width: calc(35vh + 1px);\n  z-index: 1000;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  padding-bottom: 5px;\n  overflow: hidden;\n}\n.mid .data {\n  padding-left: 0px !important;\n}\n.mid span, .mid p {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.mid button:nth-of-type(1) {\n  margin-top: 30px;\n}\n.mid span, .mid h3 {\n  color: var(--white);\n}\n.mid button {\n  position: initial;\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 80vw;\n  overflow: hidden;\n}\n.bot img {\n  width: 90%;\n  margin-top: 30px;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZG9zLWFkaWNpb25haXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFFSSxnQkFBQTtBQUFKO0FBR0E7RUFFSSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtBQUZKO0FBS0E7RUFFSSxVQUFBO0FBSEo7QUFLQSxhQUFBO0FBRUEsY0FBQTtBQUNBO0VBRUksNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxVQUFBO0FBTko7QUFRSTtFQUVJLFlBQUE7QUFQUjtBQVVJO0VBRUkseUlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsVUFBQTtBQVhSO0FBY0k7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFFQSxhQUFBO0FBZlI7QUFrQkEsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBRUEsbUJBQUE7RUFFQSxnQkFBQTtBQW5CSjtBQXFCSTtFQUVJLDRCQUFBO0FBcEJSO0FBdUJJO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQXRCUjtBQXlCSTtFQUVJLGdCQUFBO0FBeEJSO0FBMkJJO0VBRUksbUJBQUE7QUExQlI7QUE2Qkk7RUFFSSxpQkFBQTtBQTVCUjtBQStCQSxhQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtBQTlCSjtBQWdDSTtFQUVJLFVBQUE7RUFDQSxnQkFBQTtBQS9CUjtBQWtDQSxhQUFBIiwiZmlsZSI6ImRhZG9zLWFkaWNpb25haXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIEdlcmFsKi9cclxuLmNhcmRcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmNvbnRlbnRcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMzN2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5pbXBvcnRhbnQ6YWN0aXZlIGRpdiwgLm5vcm1hbDphY3RpdmUgZGl2XHJcbntcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBUb3AqL1xyXG4udG9wXHJcbnsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL0lNRy9UZWxhcy9EYWRvcy1BZGljaW9uYWlzLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWJ5LWJsdWUpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1dmg7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgIGltZ1xyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVncmFkZVxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KSwgcmdiYSgyMywgMjMsIDU5LCAwLjgpLCByZ2JhKDk2LCA5OSwgMjA0LCAwLjUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygzNXZoKTtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgfVxyXG5cclxuICAgIC50cmlhbmd1bG9VcFxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDFweDtcclxuXHJcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IGNhbGMoNTB2dyArIDFweCk7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiBjYWxjKDUwdncgKyAxcHgpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IGNhbGMoMzV2aCArIDFweCk7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBNaWRkbGUqL1xyXG4ubWlkXHJcbntcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG5cclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuZGF0YVxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiwgcFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246bnRoLW9mLXR5cGUoMSlcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4sIGgzXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b25cclxuICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIEJvdHRvbSovXHJcbi5ib3Rcclxue1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGltZ1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card horizontal flex\">\r\n    <div class=\"top full flex\">\r\n      <div class=\"degrade\"></div>\r\n\r\n      <div class=\"trianguloUp leftP\"></div>\r\n      <div class=\"trianguloUp rightP\"></div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"mid horizontal centerA flex\">\r\n        <h3 class=\"line\">Dados adicionais</h3>\r\n\r\n        <span class=\"line leftA\">Nome</span>\r\n        <input [(ngModel)]=\"nome\" type=\"text\" class=\"input\" maxlength=\"100\">\r\n\r\n        <span class=\"line leftA\">Data de nascimento</span>\r\n        <input [(ngModel)]=\"data\" type=\"date\" class=\"input\" min=\"{{minimo}}\" max=\"{{maximo}}\">\r\n\r\n        <p id=\"erroDadosAdicionais\" class=\"aviso invisivel\">Preencha todos os campos!</p>\r\n\r\n        <button (click)=\"adicionar()\" class=\"important full flex\"><span (click)=\"adicionar()\">Adicionar</span></button>\r\n      </div>\r\n\r\n      <div class=\"bot full flex\">\r\n        <img src=\"../../assets/IMG/Logo/Light (Lado).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dados-adicionais_dados-adicionais_module_ts.js.map