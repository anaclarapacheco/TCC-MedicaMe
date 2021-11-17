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
            case 'dHome':
                this.nav.dHome();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.content {\n  overflow: hidden;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  width: 80vw;\n  overflow: hidden;\n}\n.top img {\n  width: 80%;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  overflow: hidden;\n}\n.mid h3, .mid button {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.mid h3 {\n  color: var(--white);\n  border-bottom-color: var(--white);\n  border-bottom-width: 3px;\n  border-bottom-style: solid;\n  line-height: 40px;\n  margin-bottom: 20px;\n}\n.mid textarea {\n  height: 200px;\n  resize: none;\n}\n.mid .aviso {\n  margin-top: 20px;\n}\n.mid button {\n  position: initial !important;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbnRvbWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQUNBO0VBRUksZ0JBQUE7QUFBSjtBQUVBLGFBQUE7QUFFQSxjQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBRUksVUFBQTtBQUZSO0FBS0EsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU1JO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQUxSO0FBUUk7RUFFSSxtQkFBQTtFQUVBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUVBLGlCQUFBO0VBRUEsbUJBQUE7QUFWUjtBQWFJO0VBRUksYUFBQTtFQUVBLFlBQUE7QUFiUjtBQWdCSTtFQUVJLGdCQUFBO0FBZlI7QUFrQkk7RUFFSSw0QkFBQTtBQWpCUjtBQW9CQSxhQUFBIiwiZmlsZSI6InNpbnRvbWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qI3JlZ2lvbiBHZXJhbCovXHJcbi5jb250ZW50XHJcbntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBUb3AqL1xyXG4udG9wXHJcbntcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBpbWdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gTWlkZGxlKi9cclxuLm1pZFxyXG57XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgaDMsIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBoM1xyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0YXJlYVxyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYXZpc29cclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card full flex\">\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n      </div>\r\n      \r\n      <div class=\"mid full flex\">\r\n        <h3 class=\"line centerA\">Como está se sentindo?</h3>\r\n        <textarea class=\"input\" [(ngModel)]=\"sintoma\" placeholder=\"EX: Hoje eu me senti enjoado...\"></textarea>\r\n        <p id=\"erroSintoma\" class=\"aviso invisivel\">Preencha o campo, por favor!</p>\r\n\r\n        <button (click)=\"adicionarSintoma()\" class=\"important\">Adicionar sintoma</button>\r\n        <button (click)=\"cancelar()\" class=\"normal\">Cancelar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_sintomas_sintomas_module_ts.js.map