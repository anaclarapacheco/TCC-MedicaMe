(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_dependente_dependente_module_ts"],{

/***/ 58713:
/*!***********************************************************!*\
  !*** ./src/app/R/dependente/dependente-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependentePageRoutingModule": () => (/* binding */ DependentePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dependente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependente.page */ 34910);




const routes = [
    {
        path: '',
        component: _dependente_page__WEBPACK_IMPORTED_MODULE_0__.DependentePage
    }
];
let DependentePageRoutingModule = class DependentePageRoutingModule {
};
DependentePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DependentePageRoutingModule);



/***/ }),

/***/ 66394:
/*!***************************************************!*\
  !*** ./src/app/R/dependente/dependente.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependentePageModule": () => (/* binding */ DependentePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dependente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependente-routing.module */ 58713);
/* harmony import */ var _dependente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependente.page */ 34910);







let DependentePageModule = class DependentePageModule {
};
DependentePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dependente_routing_module__WEBPACK_IMPORTED_MODULE_0__.DependentePageRoutingModule
        ],
        declarations: [_dependente_page__WEBPACK_IMPORTED_MODULE_1__.DependentePage]
    })
], DependentePageModule);



/***/ }),

/***/ 34910:
/*!*************************************************!*\
  !*** ./src/app/R/dependente/dependente.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependentePage": () => (/* binding */ DependentePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dependente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dependente.page.html */ 627);
/* harmony import */ var _dependente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependente.page.scss */ 19169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 58914);






let DependentePage = class DependentePage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
    }
    //#endregion
    //#region Navegação
    voltar() {
        localStorage.removeItem('nomeDependente');
        localStorage.removeItem('emailDependente');
        this.nav.rDependentes();
    }
    lembretes() {
        this.nav.rLembretes();
    }
    estoque() {
        this.nav.rEstoque();
    }
    adicionarSintomas() {
        localStorage.setItem('sintomas', 'rDependente');
        this.nav.adicionarSintomas();
    }
    relatorio() {
        this.nav.rRelatorio();
    }
    //#endregion
    //#region ViewWillEnter
    ionViewWillEnter() {
        //Verificar Login
        this.servidor.verificar();
        //Dependente
        this.nomeDependente = localStorage.getItem('nomeDependente');
        this.email = localStorage.getItem('emailDependente');
    }
    //#endregion
    ngOnInit() { }
};
DependentePage.ctorParameters = () => [
    { type: src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
DependentePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dependente',
        template: _raw_loader_dependente_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dependente_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DependentePage);



/***/ }),

/***/ 19169:
/*!***************************************************!*\
  !*** ./src/app/R/dependente/dependente.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Meio*/\n.meio {\n  width: 80%;\n  margin-top: calc((100vw / 5) + 20px);\n  margin-left: 10%;\n  margin-bottom: calc((100vw / 5) + 20px);\n  color: var(--dark-space-cadet);\n}\n.meio .top {\n  height: 150px;\n  margin: 0px 0px 20px 0px;\n  flex-wrap: nowrap;\n}\n.meio .top .svg {\n  background-color: var(--dark-space-cadet);\n  fill: var(--white);\n  width: 40px;\n  position: absolute;\n  top: calc((100vw / 5) + 20px);\n  left: 20px;\n  border-radius: 50%;\n  transform: rotate(180deg);\n}\n.meio .top svg {\n  fill: var(--dark-space-cadet);\n  width: 30%;\n  margin: 0px 20px 0px 0px;\n  padding: 10px;\n}\n.meio .content .important {\n  fill: var(--dark-space-cadet);\n}\n.meio .content .normal {\n  fill: var(--white);\n}\n.meio .content button {\n  position: initial;\n  margin: 30px 0px 0px 0px;\n}\n.meio .content button svg {\n  height: 60%;\n  margin: 0px 15px 0px 0px;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQUE7QUFDQTtFQUVJLFVBQUE7RUFFQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFFQSw4QkFBQTtBQUZKO0FBSUk7RUFFSSxhQUFBO0VBRUEsd0JBQUE7RUFFQSxpQkFBQTtBQUxSO0FBT1E7RUFFSSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtBQVJaO0FBV1E7RUFFSSw2QkFBQTtFQUNBLFVBQUE7RUFFQSx3QkFBQTtFQUNBLGFBQUE7QUFYWjtBQWlCUTtFQUVJLDZCQUFBO0FBaEJaO0FBbUJRO0VBRUksa0JBQUE7QUFsQlo7QUFxQlE7RUFFSSxpQkFBQTtFQUVBLHdCQUFBO0FBckJaO0FBdUJZO0VBRUksV0FBQTtFQUVBLHdCQUFBO0FBdkJoQjtBQTRCQSxhQUFBIiwiZmlsZSI6ImRlcGVuZGVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIE1laW8qL1xuLm1laW9cbntcbiAgICB3aWR0aDogODAlO1xuXG4gICAgbWFyZ2luLXRvcDogY2FsYygoMTAwdncgLyA1KSArIDIwcHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYygoMTAwdncgLyA1KSArIDIwcHgpO1xuXG4gICAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xuXG4gICAgLnRvcFxuICAgIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcblxuICAgICAgICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XG5cbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAgICAgICAgLnN2Z1xuICAgICAgICB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoKDEwMHZ3IC8gNSkgKyAyMHB4KTtcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG5cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdmdcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsbDogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuXG4gICAgICAgICAgICBtYXJnaW46IDBweCAyMHB4IDBweCAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnRcbiAgICB7XG4gICAgICAgIC5pbXBvcnRhbnRcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsbDogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XG4gICAgICAgIH1cblxuICAgICAgICAubm9ybWFsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiBcbiAgICAgICAge1xuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwcHggMHB4IDBweDtcblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XG5cbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxNXB4IDBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vKiNlbmRyZWdpb24qL1xuIl19 */");

/***/ }),

/***/ 627:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/dependente/dependente.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"nav vertical flex\">\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\n  </div>\n\n  <div class=\"meio\">\n    <div class=\"top full flex\">\n\n      <svg viewBox=\"0 0 24 24\" class=\"svg\" (click)=\"voltar()\">\n        <path d=\"M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z\"/>\n      </svg>\n\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z\"/>\n      </svg>\n      \n      <div class=\"text leftA\">\n        <p>Dependente</p>\n        <h3>{{nomeDependente}}</h3>\n      </div>\n    </div>\n\n    <div class=\"content\">\n      <button class=\"important full flex\" (click)=\"lembretes()\">\n        <svg viewBox=\"0 0 24 24\">\n          <path d=\"M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z\"/>\n        </svg>\n\n        <span>Lembretes</span>\n      </button>\n\n      <button class=\"normal full flex\" (click)=\"estoque()\">\n        <svg viewBox=\"0 0 24 24\">\n          <path d=\"M1 24h22v-12h-22v12zm8-9h6v2h-6v-2zm15-7v2h-24v-2l4.474-8h15.087l4.439 8z\"/>\n        </svg>\n\n        <span>Estoque</span>\n      </button>\n\n      <button class=\"normal full flex\" (click)=\"adicionarSintomas()\">\n        <svg viewBox=\"0 0 24 24\">\n          <path d=\"M19.099 11.136c-1.449 1.97-3.599 3.914-6.021 3.597-.655.916-1.387 2.194-2.199 3.678l-1.879.589c1.589-3.101 3.712-6.53 5.989-9.136-.986.642-2.606 2.023-4.016 3.479-1.271-2.656.069-5.115 2.012-6.994-.056.885.337 1.692.631 2.107-.05-.74.036-2.062.576-3.207 1.082-.913 2.039-1.57 3.132-2.145-.177.647-.025 1.423.182 1.907.095-.67.494-1.937.955-2.462 1.364-.88 3.384-1.584 5.539-1.548-.238 1.328-.936 3.484-1.877 4.821-.761.489-1.766.775-2.566.913.663.186 1.407.24 2.052.192-.469.987-.946 1.891-1.667 3-.995.555-2.267.8-3.135.846.607.319 1.714.505 2.292.363zm-1.099 4.009v5.855h-16v-12h6.875c.229-.673.547-1.342.979-2h-9.854v16h20v-9.788c-.574.679-1.239 1.355-2 1.933z\"/>\n        </svg>\n\n        <span>Adicionar sintomas</span>\n      </button>\n\n      <button class=\"normal full flex\" (click)=\"relatorio()\">\n        <svg viewBox=\"0 0 24 24\">\n          <path d=\"M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z\"/>\n        </svg>\n\n        <span>Relatório</span>\n      </button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_dependente_dependente_module_ts.js.map