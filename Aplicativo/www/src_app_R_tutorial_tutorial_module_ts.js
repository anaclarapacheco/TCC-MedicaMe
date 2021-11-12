(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_tutorial_tutorial_module_ts"],{

/***/ 6368:
/*!*******************************************************!*\
  !*** ./src/app/R/tutorial/tutorial-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPageRoutingModule": () => (/* binding */ TutorialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial.page */ 9012);




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

/***/ 3404:
/*!***********************************************!*\
  !*** ./src/app/R/tutorial/tutorial.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPageModule": () => (/* binding */ TutorialPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial-routing.module */ 6368);
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial.page */ 9012);







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

/***/ 9012:
/*!*********************************************!*\
  !*** ./src/app/R/tutorial/tutorial.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPage": () => (/* binding */ TutorialPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tutorial.page.html */ 6141);
/* harmony import */ var _tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial.page.scss */ 9342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 8914);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);








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
        switch (localStorage.getItem('RTutorial')) {
            case 'rHome':
                this.nav.rHome();
                break;
            case 'rLembretes':
                this.nav.rLembretes();
                break;
            case 'rEstoque':
                this.nav.rEstoque();
                break;
            default:
                this.nav.rHome();
                break;
        }
        localStorage.removeItem('RTutorial');
    }
    //#endregion
    //#region OnInit
    ngOnInit() {
        //Verificar Login
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

/***/ 9342:
/*!***********************************************!*\
  !*** ./src/app/R/tutorial/tutorial.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Tutorial*/\n.content {\n  width: 85vw;\n  height: 70vh;\n  position: relative;\n  top: 5vh;\n  left: 7.5vw;\n  color: var(--dark-space-cadet);\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 85vw;\n  height: 20vh;\n  position: absolute;\n  top: 75vh;\n  left: 7.5vw;\n}\n.bot svg {\n  height: 20px;\n  position: absolute;\n  right: 10px;\n  border-radius: 10px;\n  fill: var(--dark-space-cadet);\n}\n/*#endregion*/\n/*#region Parte desorganizada da Ana*/\nion-slides {\n  margin: 20px;\n}\nion-slide {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 50px;\n}\n.slides-md {\n  --bullet-background-active: #B2CAFF;\n  --bullet-background: #6063CC;\n}\n.swiper-pagination-bullet {\n  width: 11px;\n  height: 11px;\n  background: #6063CC;\n  opacity: 1 !important;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBRUEsOEJBQUE7QUFGSjtBQUlBLGFBQUE7QUFFQSxpQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSko7QUFNSTtFQUVJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUVBLDZCQUFBO0FBUFI7QUFTQSxhQUFBO0FBRUEscUNBQUE7QUFFQTtFQUNJLFlBQUE7QUFSSjtBQVdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVdBO0VBRUksbUNBQUE7RUFDQSw0QkFBQTtBQVRKO0FBWUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFWSjtBQVlBLGFBQUEiLCJmaWxlIjoidHV0b3JpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIFR1dG9yaWFsKi9cclxuLmNvbnRlbnRcclxue1xyXG4gICAgd2lkdGg6IDg1dnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNXZoO1xyXG4gICAgbGVmdDogNy41dnc7XHJcbiAgICBcclxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIEJvdHRvbSovXHJcbi5ib3Rcclxue1xyXG4gICAgd2lkdGg6IDg1dnc7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3NXZoO1xyXG4gICAgbGVmdDogNy41dnc7XHJcbn1cclxuICAgIC5ib3Qgc3ZnXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlsbDogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XHJcbiAgICB9XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gUGFydGUgZGVzb3JnYW5pemFkYSBkYSBBbmEqL1xyXG5cclxuaW9uLXNsaWRlc3tcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuaW9uLXNsaWRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbiAgXHJcbi5zbGlkZXMtbWRcclxueyAgICBcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjQjJDQUZGO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzYwNjNDQztcclxufVxyXG4gIFxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IFxyXG57XHJcbiAgICB3aWR0aDogMTFweDtcclxuICAgIGhlaWdodDogMTFweDtcclxuICAgIGJhY2tncm91bmQ6ICM2MDYzQ0M7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuIl19 */");

/***/ }),

/***/ 6141:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/tutorial/tutorial.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content centerA\">\r\n    <h3>Sendo um responsável</h3>\r\n\r\n    <!--\r\n      URL das imagens (../../../assets/IMG/Tutoriais/Responsável/) \r\n      As imagens estão renomeados de 01 até 09 e o texto que vai em cada imagem tá no Discord\r\n        \r\n      Inicio carrossel\r\n    -->\r\n\r\n    <ion-slides (ionSlideDidChange)=\"slideChanged()\" [pager]=\"true\" [options]=\"sliderOptions\">\r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/01.png\" alt=\"Tela Número 1 de tutorial\">\r\n          <p>Ver os próximos lembretes e tomar ou cancelar o lembrete pendente</p>\r\n        </div>\r\n      </ion-slide>\r\n  \r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/02.png\" alt=\"Tela Número 2 de tutorial\">\r\n          <p>Acessar as configurações para voltar aos dados adicionais, ao tutorial e para sair da conta</p>\r\n      </div>\r\n      </ion-slide>\r\n  \r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/03.png\" alt=\"Tela Número 3 de tutorial\">\r\n          <p>Criar ou editar lembretes</p>\r\n        </div>\r\n      </ion-slide>\r\n  \r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/04.png\" alt=\"Tela Número 4 de tutorial\">\r\n          <p>Adicionar quantidade do medicamento no estoque</p>\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/05.png\" alt=\"Tela Número 5 de tutorial\">\r\n          <p>Ver os relatórios gerados</p>\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/06.png\" alt=\"Tela Número 6 de tutorial\">\r\n          <p>Adicionar e ver seus sintomas</p>\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/07.png\" alt=\"Tela Número 7 de tutorial\">\r\n          <p>Ver o histórico de medicamentos usados</p>\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/08.png\" alt=\"Tela Número 8 de tutorial\">\r\n          <p>Ver os seus dependentes, remove-los ou administrar seus lembretes, ver relatórios e estoque</p>\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/09.png\" alt=\"Tela Número 9 de tutorial\">\r\n          <p>Nas configurações é possível adicionar um responsável para se tornar um dependente</p>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n\r\n    <!-- Fim carrossel -->\r\n  </div>\r\n\r\n  <div class=\"bot vertical flex\">    \r\n    <button (click)=\"proximo()\" class=\"important full flex\">\r\n      <div></div>\r\n\r\n      <span>Próximo</span>\r\n\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z\"/>\r\n      </svg>\r\n    </button>\r\n\r\n    <button (click)=\"pular()\" class=\"normal full flex\">\r\n      <div></div>\r\n      <span>Pular</span>\r\n    </button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_tutorial_tutorial_module_ts.js.map