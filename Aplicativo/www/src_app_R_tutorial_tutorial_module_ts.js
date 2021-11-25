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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial.page */ 59012);




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

/***/ 43404:
/*!***********************************************!*\
  !*** ./src/app/R/tutorial/tutorial.module.ts ***!
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
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial-routing.module */ 6368);
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial.page */ 59012);







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

/***/ 59012:
/*!*********************************************!*\
  !*** ./src/app/R/tutorial/tutorial.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPage": () => (/* binding */ TutorialPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tutorial.page.html */ 66141);
/* harmony import */ var _tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial.page.scss */ 54115);
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
            case 'rDependentes':
                this.nav.rDependentes();
                break;
            case 'rRelatorio':
                this.nav.rRelatorio();
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

/***/ 54115:
/*!***********************************************!*\
  !*** ./src/app/R/tutorial/tutorial.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Tutorial*/\n.content {\n  width: 85vw;\n  height: 70vh;\n  position: relative;\n  top: 5vh;\n  left: 7.5vw;\n  color: var(--dark-space-cadet);\n}\n.content ion-slides {\n  margin: 20px;\n}\n.content ion-slide {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 50px;\n}\n.content .slides-md {\n  --bullet-background-active: #B2CAFF;\n  --bullet-background: #6063CC;\n}\n.content .swiper-pagination-bullet {\n  width: 11px;\n  height: 11px;\n  background: #6063CC;\n  opacity: 1 !important;\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 85vw;\n  height: 20vh;\n  position: absolute;\n  top: 75vh;\n  left: 7.5vw;\n}\n.bot button {\n  width: 100%;\n  position: initial;\n}\n.bot svg {\n  height: 20px;\n  position: absolute;\n  right: 10px;\n  border-radius: 10px;\n  fill: var(--dark-space-cadet);\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBRUEsOEJBQUE7QUFGSjtBQUlJO0VBRUksWUFBQTtBQUhSO0FBTUk7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxSO0FBUUk7RUFFSSxtQ0FBQTtFQUNBLDRCQUFBO0FBUFI7QUFVSTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVRSO0FBWUEsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFaSjtBQWNJO0VBRUksV0FBQTtFQUNBLGlCQUFBO0FBYlI7QUFnQkk7RUFFSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFFQSw2QkFBQTtBQWxCUjtBQXFCQSxhQUFBIiwiZmlsZSI6InR1dG9yaWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qI3JlZ2lvbiBUdXRvcmlhbCovXHJcbi5jb250ZW50XHJcbntcclxuICAgIHdpZHRoOiA4NXZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDV2aDtcclxuICAgIGxlZnQ6IDcuNXZ3O1xyXG4gICAgXHJcbiAgICBjb2xvcjogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XHJcblxyXG4gICAgaW9uLXNsaWRlc1xyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXNsaWRlXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgLnNsaWRlcy1tZFxyXG4gICAgeyAgICBcclxuICAgICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI0IyQ0FGRjtcclxuICAgICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjNjA2M0NDO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQgXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2MDYzQ0M7XHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gQm90dG9tKi9cclxuLmJvdFxyXG57XHJcbiAgICB3aWR0aDogODV2dztcclxuICAgIGhlaWdodDogMjB2aDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDc1dmg7XHJcbiAgICBsZWZ0OiA3LjV2dztcclxuXHJcbiAgICBidXR0b25cclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICBzdmdcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICBmaWxsOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG4iXX0= */");

/***/ }),

/***/ 66141:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/tutorial/tutorial.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content centerA\">\r\n    <h3>Sendo um responsável</h3>\r\n\r\n    <!-- Inicio carrossel -->\r\n\r\n    <ion-slides (ionSlideDidChange)=\"slideChanged()\" [pager]=\"true\" [options]=\"sliderOptions\">\r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/01.png\" alt=\"Tela Número 1 de tutorial\">\r\n          <p>Ver os próximos lembretes e tomar ou cancelar o lembrete pendente</p>\r\n        </div>\r\n      </ion-slide>\r\n  \r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/02.png\" alt=\"Tela Número 2 de tutorial\">\r\n          <p>Acessar as configurações para voltar ao tutorial, adicionar sintomas e para sair da conta</p>\r\n      </div>\r\n      </ion-slide>\r\n  \r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/03.png\" alt=\"Tela Número 3 de tutorial\">\r\n          <p>Criar ou editar lembretes</p>\r\n        </div>\r\n      </ion-slide>\r\n  \r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/04.png\" alt=\"Tela Número 4 de tutorial\">\r\n          <p>Adicionar quantidade do medicamento no estoque</p>\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/05.png\" alt=\"Tela Número 5 de tutorial\">\r\n          <p>Ver os relatórios gerados</p>\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/07.png\" alt=\"Tela Número 6 de tutorial\">\r\n          <p>Ver o histórico de medicamentos usados</p>\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/08.png\" alt=\"Tela Número 7 de tutorial\">\r\n          <p>Ver os seus dependentes, remove-los ou administrar seus lembretes, ver relatórios e estoque</p>\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <div class=\"slide\">\r\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/09.png\" alt=\"Tela Número 8 de tutorial\">\r\n          <p>Nas configurações é possível adicionar um responsável para se tornar um dependente</p>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n\r\n    <!-- Fim carrossel -->\r\n  </div>\r\n\r\n  <div class=\"bot vertical flex\">    \r\n    <button (click)=\"proximo()\" class=\"important full flex\">\r\n      <div></div>\r\n\r\n      <span>Próximo</span>\r\n\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z\"/>\r\n      </svg>\r\n    </button>\r\n\r\n    <button (click)=\"pular()\" class=\"normal full flex\">\r\n      <div></div>\r\n      <span>Pular</span>\r\n    </button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_tutorial_tutorial_module_ts.js.map