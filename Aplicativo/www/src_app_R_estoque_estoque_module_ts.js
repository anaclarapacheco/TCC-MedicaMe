(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_estoque_estoque_module_ts"],{

/***/ 8400:
/*!*****************************************************!*\
  !*** ./src/app/R/estoque/estoque-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstoquePageRoutingModule": () => (/* binding */ EstoquePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _estoque_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estoque.page */ 9564);




const routes = [
    {
        path: '',
        component: _estoque_page__WEBPACK_IMPORTED_MODULE_0__.EstoquePage
    }
];
let EstoquePageRoutingModule = class EstoquePageRoutingModule {
};
EstoquePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EstoquePageRoutingModule);



/***/ }),

/***/ 1073:
/*!*********************************************!*\
  !*** ./src/app/R/estoque/estoque.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstoquePageModule": () => (/* binding */ EstoquePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _estoque_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estoque-routing.module */ 8400);
/* harmony import */ var _estoque_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estoque.page */ 9564);







let EstoquePageModule = class EstoquePageModule {
};
EstoquePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _estoque_routing_module__WEBPACK_IMPORTED_MODULE_0__.EstoquePageRoutingModule
        ],
        declarations: [_estoque_page__WEBPACK_IMPORTED_MODULE_1__.EstoquePage]
    })
], EstoquePageModule);



/***/ }),

/***/ 9564:
/*!*******************************************!*\
  !*** ./src/app/R/estoque/estoque.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstoquePage": () => (/* binding */ EstoquePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_estoque_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./estoque.page.html */ 9935);
/* harmony import */ var _estoque_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estoque.page.scss */ 7539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 8914);






let EstoquePage = class EstoquePage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        this.medicamentos = [];
        this.temLista = false;
        this.temListaNao = false;
        this.formaFarma = ['1', '2', '3', '4'];
    }
    //#endregion
    //#region Abrir e Fechar o Menu
    open() {
        //Variaveis
        var menu = document.getElementById('mEstoque');
        var content = document.getElementById('eMenu');
        //Abre
        menu.classList.remove('invisivel');
        //Preparação
        menu.classList.remove('OutFundo');
        content.classList.remove('OutMenu');
        //Animação
        setTimeout(function () {
            menu.classList.add('InFundo');
            content.classList.add('InMenu');
        }, 100);
    }
    close() {
        //Variaveis
        var menu = document.getElementById('mEstoque');
        var content = document.getElementById('eMenu');
        //Preparação
        menu.classList.remove('InFundo');
        content.classList.remove('InMenu');
        //Animação
        menu.classList.add('OutFundo');
        content.classList.add('OutMenu');
        //Fecha
        setTimeout(function () {
            menu.classList.add('invisivel');
        }, 301);
    }
    //#endregion
    //#region Carregar o Estoque
    carregarEstoque() {
        let dados = 'phpEmail=' + this.email;
        this.servidor.enviar('Responsavel/Estoque/main.php', dados).subscribe(res => {
            if (res[0].Erro != true) {
                this.temLista = true;
                this.temListaNao = false;
                this.medicamentos = res;
            }
            else {
                this.temLista = false;
                this.temListaNao = true;
            }
        });
    }
    //#endregion
    //#region Editar quantidade
    editar(codigo, quantidade, formaFarma) {
        document.getElementById('eQuantidade').classList.remove('invisivel');
        //Preparação
        document.getElementById('qFundo').classList.remove('OutFundo');
        document.getElementById('qAlert').classList.remove('OutAlerta');
        //Animação
        setTimeout(function () {
            document.getElementById('qAlert').classList.add('InAlerta');
            document.getElementById('qFundo').classList.add('InFundo');
        }, 100);
        this.codigo = codigo;
        this.editarQuantidade = quantidade;
        this.formaFarmaceutica = formaFarma;
    }
    fechar() {
        if (event.target == document.getElementById('qFundo')) {
            //Preparação
            document.getElementById('qFundo').classList.remove('InFundo');
            document.getElementById('qAlert').classList.remove('InAlerta');
            //Animação
            document.getElementById('qFundo').classList.add('OutFundo');
            document.getElementById('qAlert').classList.add('OutAlerta');
            //Fecha
            setTimeout(function () {
                document.getElementById('eQuantidade').classList.add('invisivel');
            }, 301);
        }
    }
    menos() {
        if (this.editarQuantidade != 0) {
            this.editarQuantidade--;
        }
    }
    mais() {
        this.editarQuantidade++;
    }
    //#endregion
    //#region Remover Medicamento
    removerMedicamento(codigo) {
        document.getElementById('rEstoque').classList.remove('invisivel');
        //Preparação
        document.getElementById('eFundo').classList.remove('OutFundo');
        document.getElementById('eAlert').classList.remove('OutAlerta');
        //Animação
        setTimeout(function () {
            document.getElementById('eAlert').classList.add('InAlerta');
            document.getElementById('eFundo').classList.add('InFundo');
        }, 100);
        this.codigo = codigo;
    }
    nao() {
        if (event.target == document.getElementById('eFundo') || event.target == document.getElementById('eBtn')) {
            //Preparação
            document.getElementById('eFundo').classList.remove('InFundo');
            document.getElementById('eAlert').classList.remove('InAlerta');
            //Animação
            document.getElementById('eFundo').classList.add('OutFundo');
            document.getElementById('eAlert').classList.add('OutAlerta');
            //Fecha
            setTimeout(function () {
                document.getElementById('rEstoque').classList.add('invisivel');
            }, 301);
        }
    }
    sim() {
        //Deletar o medicamento
        let dados = 'phpEmail=' + this.email + '&phpCodigo=' + this.codigo;
        this.servidor.enviar('Responsavel/Lembretes/remover.php', dados).subscribe(res => { });
        //Preparação
        document.getElementById('eFundo').classList.remove('InFundo');
        document.getElementById('eAlert').classList.remove('InFundo');
        //Animação
        document.getElementById('eFundo').classList.add('OutFundo');
        document.getElementById('eAlert').classList.add('OutAlerta');
        //Fecha
        setTimeout(function () {
            document.getElementById('rEstoque').classList.add('invisivel');
        }, 301);
        //Recaregar lembretes
        this.carregarEstoque();
    }
    //#endregion
    //#region Navegação
    tutorial() {
        localStorage.setItem('RTutorial', 'rEstoque');
        this.nav.rTutorial();
    }
    dadosAdicionais() {
        localStorage.setItem('dadosAdicionais', 'rEstoque');
        this.nav.dadosAdicionais();
    }
    adicionarResponsavel() {
        localStorage.setItem('digitarResponsavel', 'rEstoque');
        this.nav.digitarResponsavel();
    }
    sair() {
        this.servidor.limpar();
    }
    home() {
        this.nav.rHome();
    }
    lembretes() {
        this.nav.rLembretes();
    }
    estoque() {
        this.nav.rEstoque();
    }
    dependentes() {
        this.nav.rDependentes();
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
        if (localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '') {
            document.getElementById('eDep').classList.remove('invisivel');
            document.getElementById('eMeio').classList.add('depMeio');
            this.nomeDependente = localStorage.getItem('nomeDependente');
            this.email = localStorage.getItem('emailDependente');
        }
        else {
            document.getElementById('eDep').classList.add('invisivel');
            document.getElementById('eMeio').classList.remove('depMeio');
            this.email = localStorage.getItem('email');
        }
        //Puxar lista de lembretes
        this.carregarEstoque();
    }
    //#endregion
    ngOnInit() {
    }
};
EstoquePage.ctorParameters = () => [
    { type: src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
EstoquePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-estoque',
        template: _raw_loader_estoque_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_estoque_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EstoquePage);



/***/ }),

/***/ 7539:
/*!*********************************************!*\
  !*** ./src/app/R/estoque/estoque.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Mid Geral*/\n.meio {\n  width: 90%;\n  margin-left: 5%;\n  margin-top: calc((100vw / 5) + 20px);\n  color: var(--dark-space-cadet);\n}\n.meio .top, .meio .content {\n  margin-top: 20px;\n}\n.meio .content {\n  margin-bottom: calc((100vw / 5) + ((100vw / 5) / 2) + 10px);\n}\n.atencao {\n  color: var(--red) !important;\n}\n#eQuantidade #back {\n  width: 100vw;\n}\n.visivel {\n  margin-top: calc((100vw / 5) + 60px);\n}\n/*#endregion*/\n/*#region Estoque*/\n.medicamentos {\n  background-color: var(--lavander);\n  width: 100%;\n  height: 110px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.medicamentos img {\n  width: 50px;\n  height: 50px;\n  margin-left: 10px;\n  margin-right: 20px;\n  margin-top: 10px;\n}\n.medicamentos .text {\n  width: 70%;\n  margin-top: 10px;\n  flex-direction: row;\n}\n.medicamentos .text h3 {\n  color: var(--dark-space-cadet);\n  font-family: \"Saira\";\n}\n.medicamentos .text p {\n  color: var(--space-cadet);\n  font-family: \"Roboto\";\n  margin-top: 5px;\n}\n.medicamentos svg {\n  height: 30px;\n  fill: var(--red);\n  position: relative;\n  right: 10px;\n  top: -10px;\n}\n.medicamentos button {\n  height: 30px;\n  margin-top: auto;\n  border-top-right-radius: 0%;\n  border-top-left-radius: 0%;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.medicamentos button svg {\n  fill: var(--white);\n  height: 80%;\n  position: initial;\n  top: 0px;\n  right: 0px;\n  margin-left: 10px;\n}\n/*#endregion*/\n#rEstoque {\n  background-color: var(--dark-space-cadet);\n}\n#rEstoque .alert {\n  opacity: 0;\n}\n#rEstoque .alert h3 {\n  font-size: 1em;\n  color: var(--white) !important;\n}\n#rEstoque .important {\n  position: initial;\n}\n#eQuantidade {\n  background-color: var(--dark-space-cadet);\n}\n#eQuantidade .alert {\n  width: 80vw;\n  padding: 0px;\n  opacity: 0;\n}\n#eQuantidade .alert h3 {\n  font-size: 1em;\n  color: var(--white) !important;\n}\n#eQuantidade .alert .content {\n  margin: 15px;\n  box-sizing: border-box;\n}\n#eQuantidade .alert .content .input, #eQuantidade .alert .content p {\n  width: calc(50% - 15px);\n  padding: 0px;\n  outline: none;\n}\n#eQuantidade .alert button {\n  width: 50%;\n}\n#eQuantidade .alert button:nth-of-type(1) {\n  background-color: var(--space-cadet);\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 0px;\n}\n#eQuantidade .alert button:nth-of-type(2) {\n  background-color: var(--dark-space-cadet);\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 20px;\n}\n.semMedicamento {\n  height: 50vh;\n}\n.semMedicamento svg {\n  width: 40%;\n  fill: var(--lavander);\n  margin-top: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdG9xdWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBQ0E7RUFFSSxVQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBRUEsOEJBQUE7QUFGSjtBQUlJO0VBRUksZ0JBQUE7QUFIUjtBQU1JO0VBRUksMkRBQUE7QUFMUjtBQVNBO0VBRUksNEJBQUE7QUFQSjtBQVVBO0VBRUksWUFBQTtBQVJKO0FBV0E7RUFFSSxvQ0FBQTtBQVRKO0FBV0EsYUFBQTtBQUVBLGtCQUFBO0FBQ0E7RUFFSSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0FBWko7QUFjSTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZFI7QUFpQkk7RUFFSSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtBQWpCUjtBQW1CUTtFQUVJLDhCQUFBO0VBQ0Esb0JBQUE7QUFsQlo7QUFxQlE7RUFFSSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsZUFBQTtBQXJCWjtBQXlCSTtFQUVJLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUF6QlI7QUE0Qkk7RUFFSSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQTdCUjtBQStCUTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFFQSxpQkFBQTtBQWhDWjtBQW9DQSxhQUFBO0FBR0E7RUFFSSx5Q0FBQTtBQXBDSjtBQXNDSTtFQUVJLFVBQUE7QUFyQ1I7QUF1Q1E7RUFFSSxjQUFBO0VBQ0EsOEJBQUE7QUF0Q1o7QUEwQ0k7RUFFSSxpQkFBQTtBQXpDUjtBQTZDQTtFQUVJLHlDQUFBO0FBM0NKO0FBNkNJO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBNUNSO0FBOENRO0VBRUksY0FBQTtFQUNBLDhCQUFBO0FBN0NaO0FBZ0RRO0VBRUksWUFBQTtFQUNBLHNCQUFBO0FBL0NaO0FBaURZO0VBRUksdUJBQUE7RUFFQSxZQUFBO0VBRUEsYUFBQTtBQWxEaEI7QUFzRFE7RUFFSSxVQUFBO0FBckRaO0FBdURRO0VBRUksb0NBQUE7RUFFQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtBQXZEWjtBQXlEUTtFQUVJLHlDQUFBO0VBRUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUF6RFo7QUFnRUE7RUFFSSxZQUFBO0FBOURKO0FBZ0VJO0VBRUksVUFBQTtFQUNBLHFCQUFBO0VBRUEsZ0JBQUE7QUFoRVIiLCJmaWxlIjoiZXN0b3F1ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gTWlkIEdlcmFsKi9cclxuLm1laW9cclxue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgMjBweCk7XHJcblxyXG4gICAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xyXG5cclxuICAgIC50b3AsIC5jb250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoKDEwMHZ3IC8gNSkgKyAoKDEwMHZ3IC8gNSkgLyAyKSArIDEwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXRlbmNhb1xyXG57XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jZVF1YW50aWRhZGUgI2JhY2tcclxue1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4udmlzaXZlbFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgNjBweCk7XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBFc3RvcXVlKi9cclxuLm1lZGljYW1lbnRvc1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZhbmRlcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICBpbWdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICBoM1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1NhaXJhJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zcGFjZS1jYWRldCk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZpbGw6IHZhcigtLXJlZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG5cclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgc3ZnXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmaWxsOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgIGhlaWdodDogODAlO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vLyNyZWdpb24gQWxlcnRhXHJcbiNyRXN0b3F1ZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcclxuXHJcbiAgICAuYWxlcnRcclxuICAgIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICAgICBoM1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmltcG9ydGFudFxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG4jZVF1YW50aWRhZGVcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XHJcblxyXG4gICAgLmFsZXJ0XHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgICAgIGgzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgIC5pbnB1dCwgcFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxNXB4KTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246bnRoLW9mLXR5cGUoMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOm50aC1vZi10eXBlKDIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jZW5kcmVnaW9uXHJcblxyXG4vLyNyZWdpb24gU2VtTWVkaWNhbWVudG9cclxuLnNlbU1lZGljYW1lbnRvXHJcbntcclxuICAgIGhlaWdodDogNTB2aDtcclxuXHJcbiAgICBzdmdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGZpbGw6IHZhcigtLWxhdmFuZGVyKTtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIH1cclxufVxyXG4vLyNlbmRyZWdpb25cclxuIl19 */");

/***/ }),

/***/ 9935:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/estoque/estoque.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"nav vertical flex\">\r\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\r\n    <div class=\"button full flex\" (click)=\"open()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"eDep\" class=\"dep vertical flex invisivel\">\r\n    <p>Dependente: Gabriel Santos de Sousa</p>\r\n  </div>\r\n\r\n  <div id=\"mEstoque\" class=\"menu invisivel\">\r\n    <div id=\"back\" (click)=\"close()\"></div>\r\n\r\n    <div id=\"eMenu\" class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <h3>Configurações</h3>\r\n\r\n        <div class=\"button full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mid\">\r\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Tutorial</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"dadosAdicionais()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v2.501c-.771-.322-1.614-.501-2.5-.501-3.584 0-6.5 2.916-6.5 6.5 0 1.747.696 3.331 1.82 4.5zm-.252-23.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Dados adicionais</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"adicionarResponsavel()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Adicionar responsável</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"sair()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Sair</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"eMeio\" class=\"meio\">\r\n    <div class=\"top centerA\">\r\n      <h3>Seus medicamentos</h3>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div *ngIf=\"temLista\">\r\n        <div *ngFor=\"let l of medicamentos\" class=\"medicamentos full flex\">\r\n          <img src=\"../../../assets/IMG/Icon/{{l.FormaFarmaceutica}}.png\">\r\n\r\n          <div [ngSwitch]=\"l.FormaFarmaceutica\" class=\"text flex leftA\">\r\n            <h3 class=\"line\">{{l.Nome}}</h3>\r\n\r\n            <p *ngSwitchCase=\"formaFarma[0]\">{{l.Quantidade + 'ml'}}</p>\r\n            <p *ngSwitchCase=\"formaFarma[1]\">{{l.Quantidade + ' gotas'}}</p>\r\n            <p *ngSwitchCase=\"formaFarma[2]\">{{l.Quantidade + ' comprimido'}}</p>\r\n            <p *ngSwitchCase=\"formaFarma[3]\">{{l.Quantidade + ' cápsula'}}</p>\r\n          </div>\r\n\r\n          <svg viewBox=\"0 0 24 24\" (click)=\"removerMedicamento(l.Agendamento)\">\r\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n          </svg>\r\n\r\n          <button class=\"normal full flex\" (click)=\"editar(l.Agendamento, l.Quantidade, l.FormaFarmaceutica)\">\r\n            Editar quantidade\r\n\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n            </svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"temListaNao\">\r\n        <div class=\"semMedicamento full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n          <path d=\"M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z\"/>\r\n          </svg>\r\n          \r\n          <p>Você ainda não possui nenhum medicamento vá para lembretes, clique no botão: \"Novo Lembrete\" e crie o primeiro!</p>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"medicamentos full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/3.png\" alt=\"Capsula\">\r\n\r\n        <div class=\"text flex leftA\">\r\n          <h3>DipperZec</h3>\r\n\r\n          <svg viewBox=\"0 0 24 24\" (click)=\"removerMedicamento(x)\">\r\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n          </svg>\r\n\r\n          <p class=\"line aviso\">150ml</p>\r\n        </div>\r\n\r\n        <button class=\"danger full flex\" (click)=\"editar(150)\">\r\n          Editar quantidade\r\n\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n          </svg>\r\n        </button>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"eQuantidade\" class=\"invisivel\">\r\n    <div id=\"qFundo\" class=\"centraliza full flex\" (click)=\"fechar()\">\r\n      <div id=\"qAlert\" class=\"alert\">\r\n        <div class=\"top full flex\">\r\n          <h3>Ajuste a quantidade</h3>\r\n        </div>\r\n\r\n        <div [ngSwitch]=\"formaFarmaceutica\" class=\"content full flex\">\r\n          <input id=\"quantidade\" type=\"number\" class=\"input rightA\" [(ngModel)]=\"editarQuantidade\">\r\n          <p class=\"leftA\" *ngSwitchCase=\"formaFarma[0]\">ml</p>\r\n          <p class=\"leftA\" *ngSwitchCase=\"formaFarma[1]\"> gotas</p>\r\n          <p class=\"leftA\" *ngSwitchCase=\"formaFarma[2]\"> comprimido</p>\r\n          <p class=\"leftA\" *ngSwitchCase=\"formaFarma[3]\"> cápsula</p>\r\n        </div>\r\n\r\n        <button (click)=\"menos()\">-</button>\r\n        <button (click)=\"mais()\">+</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"rEstoque\" class=\"invisivel\">\r\n    <div id=\"eFundo\" class=\"centraliza full flex\" (click)=\"nao()\">\r\n      <div id=\"eAlert\" class=\"alert\">\r\n        <div class=\"top full flex\">\r\n          <h3>TEM CERTEZA DISSO?</h3>\r\n        </div>\r\n\r\n        <div class=\"content centerA\">\r\n          <p>Deseja realmente REMOVER esse Medicamento?</p>\r\n\r\n          <button id=\"eBtn\" class=\"important\" (click)=\"nao()\">Não</button>\r\n          <button id=\"eBtn\" class=\"normal\" (click)=\"sim()\">Sim</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tabs full flex\">\r\n    <div class=\"button full flex\" (click)=\"home()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z\"/>\r\n      </svg>\r\n      <p>Home</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"lembretes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z\"/>\r\n      </svg>\r\n      <p>Lembretes</p>\r\n    </div>\r\n\r\n    <div class=\"button middle\">\r\n      <div class=\"principal full flex\">\r\n        <svg viewBox=\"0 0 24 24\">\r\n          <path d=\"M1 24h22v-12h-22v12zm8-9h6v2h-6v-2zm15-7v2h-24v-2l4.474-8h15.087l4.439 8z\"/>\r\n        </svg>\r\n      </div>\r\n      <p>Estoque</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"dependentes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z\"/>\r\n      </svg>\r\n      <p>Dependentes</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"relatorio()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z\"/>\r\n      </svg>\r\n      <p>Relatório</p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_estoque_estoque_module_ts.js.map