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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Tutorial*/\n.content {\n  width: 85vw;\n  height: 70vh;\n  position: relative;\n  top: 5vh;\n  left: 7.5vw;\n  color: var(--dark-space-cadet);\n}\n.content ion-slides {\n  margin: 20px;\n}\n.content ion-slide {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 50px;\n}\n.content .slides-md {\n  --bullet-background-active: #B2CAFF;\n  --bullet-background: #6063CC;\n}\n.content .swiper-pagination-bullet {\n  width: 11px;\n  height: 11px;\n  background: #6063CC;\n  opacity: 1 !important;\n}\n/*#endregion*/\n/*#region Bottom*/\n.bot {\n  width: 85vw;\n  height: 20vh;\n  position: absolute;\n  top: 75vh;\n  left: 7.5vw;\n}\n.bot button {\n  width: 100%;\n  position: initial;\n}\n.bot svg {\n  height: 20px;\n  position: absolute;\n  right: 10px;\n  border-radius: 10px;\n  fill: var(--dark-space-cadet);\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBRUEsOEJBQUE7QUFGSjtBQUlJO0VBRUksWUFBQTtBQUhSO0FBTUk7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxSO0FBUUk7RUFFSSxtQ0FBQTtFQUNBLDRCQUFBO0FBUFI7QUFVSTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVRSO0FBWUEsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFaSjtBQWNJO0VBRUksV0FBQTtFQUNBLGlCQUFBO0FBYlI7QUFnQkk7RUFFSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFFQSw2QkFBQTtBQWxCUjtBQXFCQSxhQUFBIiwiZmlsZSI6InR1dG9yaWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qI3JlZ2lvbiBUdXRvcmlhbCovXG4uY29udGVudFxue1xuICAgIHdpZHRoOiA4NXZ3O1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1dmg7XG4gICAgbGVmdDogNy41dnc7XG4gICAgXG4gICAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xuXG4gICAgaW9uLXNsaWRlc1xuICAgIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICBpb24tc2xpZGVcbiAgICB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgICAgXG4gICAgLnNsaWRlcy1tZFxuICAgIHsgICAgXG4gICAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjQjJDQUZGO1xuICAgICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjNjA2M0NDO1xuICAgIH1cbiAgICAgIFxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQgXG4gICAge1xuICAgICAgICB3aWR0aDogMTFweDtcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNjA2M0NDO1xuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLyojZW5kcmVnaW9uKi9cblxuLyojcmVnaW9uIEJvdHRvbSovXG4uYm90XG57XG4gICAgd2lkdGg6IDg1dnc7XG4gICAgaGVpZ2h0OiAyMHZoO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNzV2aDtcbiAgICBsZWZ0OiA3LjV2dztcblxuICAgIGJ1dHRvblxuICAgIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIH1cblxuICAgIHN2Z1xuICAgIHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgXG4gICAgICAgIGZpbGw6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xuICAgIH1cbn1cbi8qI2VuZHJlZ2lvbiovXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content centerA\">\n    <h3>Sendo um responsável</h3>\n\n    <!-- Inicio carrossel -->\n\n    <ion-slides (ionSlideDidChange)=\"slideChanged()\" [pager]=\"true\" [options]=\"sliderOptions\">\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/01.png\" alt=\"Tela Número 1 de tutorial\">\n          <p>Ver os próximos lembretes e tomar ou cancelar o lembrete pendente</p>\n        </div>\n      </ion-slide>\n  \n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/02.png\" alt=\"Tela Número 2 de tutorial\">\n          <p>Acessar as configurações para voltar ao tutorial, adicionar sintomas e para sair da conta</p>\n      </div>\n      </ion-slide>\n  \n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/03.png\" alt=\"Tela Número 3 de tutorial\">\n          <p>Criar ou editar lembretes</p>\n        </div>\n      </ion-slide>\n  \n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/04.png\" alt=\"Tela Número 4 de tutorial\">\n          <p>Adicionar quantidade do medicamento no estoque</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/05.png\" alt=\"Tela Número 5 de tutorial\">\n          <p>Ver os relatórios gerados</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/07.png\" alt=\"Tela Número 6 de tutorial\">\n          <p>Ver o histórico de medicamentos usados</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/08.png\" alt=\"Tela Número 7 de tutorial\">\n          <p>Ver os seus dependentes, remove-los ou administrar seus lembretes, ver relatórios e estoque</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"../../../assets/IMG/Tutoriais/Responsável/09.png\" alt=\"Tela Número 8 de tutorial\">\n          <p>Nas configurações é possível adicionar um responsável para se tornar um dependente</p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- Fim carrossel -->\n  </div>\n\n  <div class=\"bot vertical flex\">    \n    <button (click)=\"proximo()\" class=\"important full flex\">\n      <div></div>\n\n      <span>Próximo</span>\n\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z\"/>\n      </svg>\n    </button>\n\n    <button (click)=\"pular()\" class=\"normal full flex\">\n      <div></div>\n      <span>Pular</span>\n    </button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_tutorial_tutorial_module_ts.js.map