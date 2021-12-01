(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_sintomas_sintomas_module_ts"],{

/***/ 48084:
/*!*****************************************************!*\
  !*** ./src/app/sintomas/sintomas-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SintomasPageRoutingModule": () => (/* binding */ SintomasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sintomas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sintomas.page */ 67442);




const routes = [
    {
        path: '',
        component: _sintomas_page__WEBPACK_IMPORTED_MODULE_0__.SintomasPage
    }
];
let SintomasPageRoutingModule = class SintomasPageRoutingModule {
};
SintomasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SintomasPageRoutingModule);



/***/ }),

/***/ 2146:
/*!*********************************************!*\
  !*** ./src/app/sintomas/sintomas.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SintomasPageModule": () => (/* binding */ SintomasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sintomas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sintomas-routing.module */ 48084);
/* harmony import */ var _sintomas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sintomas.page */ 67442);







let SintomasPageModule = class SintomasPageModule {
};
SintomasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sintomas_routing_module__WEBPACK_IMPORTED_MODULE_0__.SintomasPageRoutingModule
        ],
        declarations: [_sintomas_page__WEBPACK_IMPORTED_MODULE_1__.SintomasPage]
    })
], SintomasPageModule);



/***/ }),

/***/ 67442:
/*!*******************************************!*\
  !*** ./src/app/sintomas/sintomas.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SintomasPage": () => (/* binding */ SintomasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sintomas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sintomas.page.html */ 98814);
/* harmony import */ var _sintomas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sintomas.page.scss */ 5841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navegation.service */ 6192);
/* harmony import */ var _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/servidor.service */ 58914);






let SintomasPage = class SintomasPage {
    constructor(servidor, nav) {
        this.servidor = servidor;
        this.nav = nav;
    }
    //#endregion
    //#region Adicionar Sintoma
    adicionarSintoma() {
        document.getElementById('erroSintoma').classList.add('invisivel');
        if (this.sintoma == null || this.sintoma == '') {
            document.getElementById('erroSintoma').classList.remove('invisivel');
        }
        else {
            let dados = 'phpEmail=' + this.email + '&phpSintoma=' + this.sintoma;
            this.servidor.enviar('Sintomas/main.php', dados).subscribe(res => {
                if (res[0]['Erro'] == false) {
                    this.cancelar();
                }
            });
        }
    }
    //#endregion
    //#region Navegação
    cancelar() {
        switch (localStorage.getItem('sintomas')) {
            case 'rHome':
                this.nav.rHome();
                break;
            case 'dHome':
                this.nav.dHome();
                break;
            case 'rLembretes':
                this.nav.rLembretes();
                break;
            case 'rEstoque':
                this.nav.rEstoque();
                break;
            case 'rDependentes':
                this.nav.rDependentes();
                break;
            case 'rDependente':
                this.nav.rDependente();
                break;
            case 'rRelatorio':
                this.nav.rRelatorio();
                break;
            default:
                this.nav.rHome();
                break;
        }
        localStorage.removeItem('sintomas');
    }
    //#endregion
    //#region ViewWillEnter
    ionViewWillEnter() {
        //Verificar Login
        this.servidor.verificar();
        //Dependente
        if (localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '') {
            this.email = localStorage.getItem('emailDependente');
        }
        else {
            this.email = localStorage.getItem('email');
        }
    }
    //#endregion
    ngOnInit() { }
};
SintomasPage.ctorParameters = () => [
    { type: _services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService },
    { type: _services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService }
];
SintomasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sintomas',
        template: _raw_loader_sintomas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sintomas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SintomasPage);



/***/ }),

/***/ 5841:
/*!*********************************************!*\
  !*** ./src/app/sintomas/sintomas.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.content {\n  overflow: hidden;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  width: 80vw;\n  overflow: hidden;\n}\n.top img {\n  width: 80%;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  overflow: hidden;\n}\n.mid h3 {\n  color: var(--white);\n  border-bottom-color: var(--white);\n  border-bottom-width: 3px;\n  border-bottom-style: solid;\n  line-height: 40px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.mid textarea {\n  height: 200px;\n  resize: none;\n}\n.mid .aviso {\n  margin-top: 20px;\n}\n.mid button {\n  position: initial !important;\n  margin-top: 30px;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbnRvbWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQUNBO0VBRUksZ0JBQUE7QUFBSjtBQUVBLGFBQUE7QUFFQSxjQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBRUksVUFBQTtBQUZSO0FBS0EsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU1JO0VBRUksbUJBQUE7RUFFQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFFQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVdJO0VBRUksYUFBQTtFQUVBLFlBQUE7QUFYUjtBQWNJO0VBRUksZ0JBQUE7QUFiUjtBQWdCSTtFQUVJLDRCQUFBO0VBRUEsZ0JBQUE7QUFoQlI7QUFtQkEsYUFBQSIsImZpbGUiOiJzaW50b21hcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gR2VyYWwqL1xuLmNvbnRlbnRcbntcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLyojZW5kcmVnaW9uKi9cblxuLyojcmVnaW9uIFRvcCovXG4udG9wXG57XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGltZ1xuICAgIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG59XG4vKiNlbmRyZWdpb24qL1xuXG4vKiNyZWdpb24gTWlkZGxlKi9cbi5taWRcbntcbiAgICB3aWR0aDogODB2dztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaDNcbiAgICB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcblxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcblxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIHRleHRhcmVhXG4gICAge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5cbiAgICAuYXZpc29cbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgYnV0dG9uXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xuXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxufVxuLyojZW5kcmVnaW9uKi9cbiJdfQ== */");

/***/ }),

/***/ 98814:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sintomas/sintomas.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"card full flex\">\n    <div class=\"content\">\n      <div class=\"top full flex\">\n        <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo: MedicaMe\">\n      </div>\n      \n      <div class=\"mid full flex\">\n        <h3 class=\"line centerA\">Como está se sentindo?</h3>\n        <textarea class=\"input\" [(ngModel)]=\"sintoma\" placeholder=\"EX: Hoje eu me senti enjoado...\" maxlength=\"400\"></textarea>\n        <p id=\"erroSintoma\" class=\"aviso invisivel\">Preencha o campo, por favor!</p>\n\n        <button (click)=\"adicionarSintoma()\" class=\"important\">Adicionar sintoma</button>\n        <button (click)=\"cancelar()\" class=\"normal\">Cancelar</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_sintomas_sintomas_module_ts.js.map