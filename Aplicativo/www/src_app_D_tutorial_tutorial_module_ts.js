(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_D_tutorial_tutorial_module_ts"],{

/***/ 72301:
/*!*******************************************************!*\
  !*** ./src/app/D/tutorial/tutorial-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPageRoutingModule": () => (/* binding */ TutorialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial.page */ 30046);




const routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_0__.TutorialPage
    }
];
let TutorialPageRoutingModule = class TutorialPageRoutingModule {
};
TutorialPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TutorialPageRoutingModule);



/***/ }),

/***/ 21897:
/*!***********************************************!*\
  !*** ./src/app/D/tutorial/tutorial.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPageModule": () => (/* binding */ TutorialPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial-routing.module */ 72301);
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial.page */ 30046);







let TutorialPageModule = class TutorialPageModule {
};
TutorialPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__.TutorialPageRoutingModule
        ],
        declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_1__.TutorialPage]
    })
], TutorialPageModule);



/***/ }),

/***/ 30046:
/*!*********************************************!*\
  !*** ./src/app/D/tutorial/tutorial.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPage": () => (/* binding */ TutorialPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tutorial.page.html */ 93774);
/* harmony import */ var _tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial.page.scss */ 35658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 58914);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);








let TutorialPage = class TutorialPage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        this.sliderOptions = {
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
            }
        };
    }
    //#endregion
    //#region Próximo item do carrossel
    proximo() {
        const proximo = this.slides.slideNext();
        if (this.fim) {
            this.pular();
        }
    }
    slideChanged() {
        var verificarFim = this.slides.isEnd();
        verificarFim.then(data => {
            if (data) {
                this.fim = true;
            }
        });
    }
    //#endregion
    //#region Navegação
    pular() {
        switch (localStorage.getItem('DTutorial')) {
            case 'dHome':
                this.nav.dHome();
                break;
            case 'dependente':
                this.nav.dependente();
                break;
            default:
                this.nav.dHome();
                break;
        }
        localStorage.removeItem('DTutorial');
    }
    //#endregion
    //#region OnInit
    ngOnInit() {
        this.servidor.verificar();
    }
};
TutorialPage.ctorParameters = () => [
    { type: src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
TutorialPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSlides,] }]
};
TutorialPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tutorial',
        template: _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TutorialPage);



/***/ }),

/***/ 35658:
/*!***********************************************!*\
  !*** ./src/app/D/tutorial/tutorial.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Tutorial*/\n.content {\n  width: 85vw;\n  height: 70vh;\n  position: relative;\n  top: 5vh;\n  left: 7.5vw;\n  color: var(--dark-space-cadet);\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 85vw;\n  height: 20vh;\n  position: absolute;\n  top: 75vh;\n  left: 7.5vw;\n}\n.bot button {\n  width: 100%;\n  position: initial;\n}\n.bot svg {\n  height: 20px;\n  position: absolute;\n  right: 10px;\n  border-radius: 10px;\n  color: var(--dark-space-cadet);\n}\n/*#endregion*/\n/*#region Parte desorganizada da Ana*/\nion-slides {\n  margin: 20px;\n}\nion-slide {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 50px;\n}\n.slides-md {\n  --bullet-background-active: #B2CAFF;\n  --bullet-background: #6063CC;\n}\n.swiper-pagination-bullet {\n  width: 11px;\n  height: 11px;\n  background: #6063CC;\n  opacity: 1 !important;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBRUEsOEJBQUE7QUFGSjtBQUlBLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSko7QUFNSTtFQUVJLFdBQUE7RUFDQSxpQkFBQTtBQUxSO0FBUUk7RUFFSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFFQSw4QkFBQTtBQVZSO0FBYUEsYUFBQTtBQUVBLHFDQUFBO0FBRUE7RUFDSSxZQUFBO0FBWko7QUFlQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBWko7QUFlQTtFQUVJLG1DQUFBO0VBQ0EsNEJBQUE7QUFiSjtBQWdCQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWRKO0FBZ0JBLGFBQUEiLCJmaWxlIjoidHV0b3JpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIFR1dG9yaWFsKi9cbi5jb250ZW50XG57XG4gICAgd2lkdGg6IDg1dnc7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDV2aDtcbiAgICBsZWZ0OiA3LjV2dztcbiAgICBcbiAgICBjb2xvcjogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XG59XG4vKiNlbmRyZWdpb24qL1xuXG4vKiNyZWdpb24gQm90dG9tKi9cbi5ib3RcbntcbiAgICB3aWR0aDogODV2dztcbiAgICBoZWlnaHQ6IDIwdmg7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3NXZoO1xuICAgIGxlZnQ6IDcuNXZ3O1xuXG4gICAgYnV0dG9uXG4gICAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgfVxuXG4gICAgc3ZnXG4gICAge1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTBweDtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcbiAgICB9XG59XG4vKiNlbmRyZWdpb24qL1xuXG4vKiNyZWdpb24gUGFydGUgZGVzb3JnYW5pemFkYSBkYSBBbmEqL1xuXG5pb24tc2xpZGVze1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuaW9uLXNsaWRle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuICBcbi5zbGlkZXMtbWRcbnsgICAgXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNCMkNBRkY7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzYwNjNDQztcbn1cbiAgXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IFxue1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICBiYWNrZ3JvdW5kOiAjNjA2M0NDO1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi8qI2VuZHJlZ2lvbiovXG4iXX0= */");

/***/ }),

/***/ 93774:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/D/tutorial/tutorial.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content centerA\">\n    <h3>Sendo um dependente</h3>\n\n    <!--\n      URL das imagens (../../../assets/IMG/Tutoriais/Dependente/) \n      As imagens estão renomeados de 01 até 03 e o texto que vai em cada imagem tá no Discord\n\n      Faz o carrossel aqui em baixo\n    -->\n\n    <ion-slides (ionSlideDidChange)=\"slideChanged()\" [pager]=\"true\" [options]=\"sliderOptions\">\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/IMG/Tutoriais/Dependente/01.png\" alt=\"Tela Número 1 de tutorial\">\n          <p>Ver os próximos lembretes e tomar ou cancelar o lembrete pendente</p>\n        </div>\n      </ion-slide>\n  \n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/IMG/Tutoriais/Dependente/02.png\" alt=\"Tela Número 2 de tutorial\">\n          <p>Escrever os sintomas que está sentindo</p>\n      </div>\n      </ion-slide>\n  \n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/IMG/Tutoriais/Dependente/03.png\" alt=\"Tela Número 3 de tutorial\">\n          <p>Acessar as configurações para voltar aos dados adicionais, ao tutorial e para sair da conta</p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- Faz o carrossel aqui em cima -->\n  </div>\n\n  <div class=\"bot vertical flex\">    \n    <button (click)=\"proximo()\" class=\"important full flex\">Próximo\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z\"/>\n      </svg>\n    </button>\n\n    <button (click)=\"pular()\" class=\"normal\">Pular</button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_D_tutorial_tutorial_module_ts.js.map