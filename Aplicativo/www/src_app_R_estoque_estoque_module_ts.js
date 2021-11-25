(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_estoque_estoque_module_ts"],{

/***/ 68400:
/*!*****************************************************!*\
  !*** ./src/app/R/estoque/estoque-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstoquePageRoutingModule": () => (/* binding */ EstoquePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _estoque_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estoque.page */ 19564);




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

/***/ 51073:
/*!*********************************************!*\
  !*** ./src/app/R/estoque/estoque.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstoquePageModule": () => (/* binding */ EstoquePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _estoque_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estoque-routing.module */ 68400);
/* harmony import */ var _estoque_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estoque.page */ 19564);







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

/***/ 19564:
/*!*******************************************!*\
  !*** ./src/app/R/estoque/estoque.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstoquePage": () => (/* binding */ EstoquePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_estoque_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./estoque.page.html */ 29935);
/* harmony import */ var _estoque_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estoque.page.scss */ 47539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 58914);






let EstoquePage = class EstoquePage {
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        this.medicamentos = [];
        this.temLista = false;
        this.temListaNao = false;
        this.situacao = ['aviso'];
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
                this.medicamentos.forEach(medic => {
                    if (medic['FormaFarmaceutica'] == '4' || medic['FormaFarmaceutica'] == '3') {
                        let plural = false;
                        medic['Quantidade'] = Math.trunc(medic['Quantidade']);
                        if (medic['Quantidade'] > 1) {
                            plural = true;
                        }
                        else if (medic['Quantidade'] < 0) {
                            medic['Quantidade'] = 0;
                        }
                        if (medic['FormaFarmaceutica'] == '3') {
                            medic['Quantidade'] += ' comprimido';
                        }
                        else {
                            medic['Quantidade'] += ' cápsula';
                        }
                        if (plural) {
                            medic['Quantidade'] += 's';
                        }
                    }
                    else {
                        medic['Quantidade'] = medic['Quantidade'].replace('.', ',') + 'ml';
                    }
                });
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
        var reg = new RegExp('0|1|2|3|4|5|6|7|8|9|,', 'g');
        this.codigo = codigo;
        this.editarQuantidade = 0;
        this.quantidadeAdicional = quantidade.replace(reg, '');
    }
    fechar() {
        if (event.target == document.getElementById('qFundo') || event.target == document.getElementById('qBtn') || event.target == document.getElementById('qSpn') || event.target == document.getElementById('qBtn2') || event.target == document.getElementById('qSpn2')) {
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
    adicionar() {
        //Enviar ao PHP
        let dados = 'phpCodigo=' + this.codigo + '&phpQuantidade=' + this.editarQuantidade + '&phpOperacao=Adicionar' + '&phpEmail=' + this.email;
        this.servidor.enviar('Responsavel/Estoque/editar.php', dados).subscribe(res => {
            if (res[0]['Erro'] == false) {
                this.fechar();
                this.carregarEstoque();
            }
        });
    }
    retirar() {
        //Enviar ao PHP
        let dados = 'phpCodigo=' + this.codigo + '&phpQuantidade=' + this.editarQuantidade + '&phpOperacao=Retirar' + '&phpEmail=' + this.email;
        this.servidor.enviar('Responsavel/Estoque/editar.php', dados).subscribe(res => {
            if (res[0]['Erro'] == false) {
                this.fechar();
                this.carregarEstoque();
            }
        });
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
    adicionarResponsavel() {
        localStorage.setItem('digitarResponsavel', 'rEstoque');
        this.nav.digitarResponsavel();
    }
    adicionarSintomas() {
        localStorage.setItem('sintomas', 'rEstoque');
        this.nav.adicionarSintomas();
    }
    removDependente() {
        this.nav.rDependente();
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
            document.getElementById('eTabs').classList.add('invisivel');
            document.getElementById('eNav').classList.add('invisivel');
            document.getElementById('eContent').classList.add('baixoButton2');
            this.nomeDependente = localStorage.getItem('nomeDependente');
            this.email = localStorage.getItem('emailDependente');
        }
        else {
            document.getElementById('eDep').classList.add('invisivel');
            document.getElementById('eMeio').classList.remove('depMeio');
            document.getElementById('eTabs').classList.remove('invisivel');
            document.getElementById('eNav').classList.remove('invisivel');
            document.getElementById('eContent').classList.remove('baixoButton2');
            this.email = localStorage.getItem('email');
        }
        //Puxar lista de lembretes
        this.carregarEstoque();
    }
    //#endregion
    ngOnInit() { }
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

/***/ 47539:
/*!*********************************************!*\
  !*** ./src/app/R/estoque/estoque.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Mid Geral*/\n.meio {\n  width: 90%;\n  margin-left: 5%;\n  margin-top: calc((100vw / 5) + 20px);\n  color: var(--dark-space-cadet);\n}\n.meio .top, .meio .content {\n  margin-top: 20px;\n}\n.meio .content {\n  margin-bottom: calc((100vw / 5) + ((100vw / 5) / 2) + 10px);\n}\n.atencao {\n  color: var(--red) !important;\n}\n#eQuantidade #back {\n  width: 100vw;\n}\n.visivel {\n  margin-top: calc((100vw / 5) + 60px);\n}\n/*#endregion*/\n/*#region Estoque*/\n.medicamentos {\n  background-color: var(--lavander);\n  width: 100%;\n  height: 110px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.medicamentos img {\n  width: 50px;\n  height: 50px;\n  margin-left: 10px;\n  margin-right: 20px;\n  margin-top: 10px;\n}\n.medicamentos .text {\n  width: calc(70% - 30px);\n  margin-top: 10px;\n  flex-direction: row;\n}\n.medicamentos .text h3 {\n  color: var(--dark-space-cadet);\n  font-family: \"Saira\";\n}\n.medicamentos .text p {\n  color: var(--space-cadet);\n  font-family: \"Roboto\";\n  margin-top: 5px;\n}\n.medicamentos svg {\n  height: 30px;\n  fill: var(--red);\n  position: relative;\n  right: 0px;\n  top: 0px;\n}\n.medicamentos button {\n  height: 30px;\n  margin-top: auto;\n  border-top-right-radius: 0%;\n  border-top-left-radius: 0%;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.medicamentos button svg {\n  fill: var(--white);\n  height: 80%;\n  position: initial;\n  top: 0px;\n  right: 0px;\n  margin-left: 10px;\n}\n.comprar {\n  animation-name: pendente;\n  animation-duration: 3s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n@keyframes pendente {\n  0% {\n    transform: rotate(0deg);\n  }\n  75% {\n    transform: rotate(0deg);\n  }\n  80% {\n    transform: rotate(-2deg);\n  }\n  85% {\n    transform: rotate(2deg);\n  }\n  90% {\n    transform: rotate(-2deg);\n  }\n  95% {\n    transform: rotate(2deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n/*#endregion*/\n#rEstoque {\n  background-color: var(--dark-space-cadet);\n}\n#rEstoque .alert {\n  opacity: 0;\n}\n#rEstoque .alert h3 {\n  font-size: 1em;\n  color: var(--white) !important;\n}\n#rEstoque .important {\n  position: initial;\n}\n#eQuantidade {\n  background-color: var(--dark-space-cadet);\n}\n#eQuantidade .alert {\n  width: 70vw;\n  padding: 0px;\n  opacity: 0;\n}\n#eQuantidade .alert h3 {\n  font-size: 1em;\n  color: var(--white) !important;\n}\n#eQuantidade .alert .content {\n  margin: 15px;\n  box-sizing: border-box;\n}\n#eQuantidade .alert .content .input {\n  border-bottom: solid 3px var(--dark-space-cadet);\n  margin-bottom: 10px;\n}\n#eQuantidade .alert .content .input, #eQuantidade .alert .content p {\n  width: 100%;\n  padding: 0px;\n  outline: none;\n}\n#eQuantidade .alert button:nth-of-type(1) {\n  background-color: var(--yellow);\n  width: 100%;\n  border-radius: 0px;\n}\n#eQuantidade .alert button:nth-of-type(1) span {\n  color: var(--dark-space-cadet);\n  font-size: 1.3em;\n}\n#eQuantidade .alert button:nth-of-type(2) {\n  background-color: var(--red);\n  width: 100%;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 20px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 20px;\n}\n#eQuantidade .alert button:nth-of-type(2) span {\n  color: var(--white);\n  font-size: 1.3em;\n}\n.semMedicamento {\n  height: 50vh;\n}\n.semMedicamento svg {\n  width: 40%;\n  fill: var(--lavander);\n  margin-top: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdG9xdWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBQ0E7RUFFSSxVQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBRUEsOEJBQUE7QUFGSjtBQUlJO0VBRUksZ0JBQUE7QUFIUjtBQU1JO0VBRUksMkRBQUE7QUFMUjtBQVNBO0VBRUksNEJBQUE7QUFQSjtBQVVBO0VBRUksWUFBQTtBQVJKO0FBV0E7RUFFSSxvQ0FBQTtBQVRKO0FBV0EsYUFBQTtBQUVBLGtCQUFBO0FBQ0E7RUFFSSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0FBWko7QUFjSTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZFI7QUFpQkk7RUFFSSx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7QUFqQlI7QUFtQlE7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0FBbEJaO0FBcUJRO0VBRUkseUJBQUE7RUFDQSxxQkFBQTtFQUVBLGVBQUE7QUFyQlo7QUF5Qkk7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBekJSO0FBNEJJO0VBRUksWUFBQTtFQUVBLGdCQUFBO0VBRUEsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUE3QlI7QUErQlE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBRUEsaUJBQUE7QUFoQ1o7QUFxQ0E7RUFFSSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQW5DSjtBQXNDQTtFQUVJO0lBQUcsdUJBQUE7RUFuQ0w7RUFvQ0U7SUFBSSx1QkFBQTtFQWpDTjtFQWtDRTtJQUFJLHdCQUFBO0VBL0JOO0VBZ0NFO0lBQUksdUJBQUE7RUE3Qk47RUE4QkU7SUFBSSx3QkFBQTtFQTNCTjtFQTRCRTtJQUFJLHVCQUFBO0VBekJOO0VBMEJFO0lBQUssdUJBQUE7RUF2QlA7QUFDRjtBQXdCQSxhQUFBO0FBR0E7RUFFSSx5Q0FBQTtBQXpCSjtBQTJCSTtFQUVJLFVBQUE7QUExQlI7QUE0QlE7RUFFSSxjQUFBO0VBQ0EsOEJBQUE7QUEzQlo7QUErQkk7RUFFSSxpQkFBQTtBQTlCUjtBQWtDQTtFQUVJLHlDQUFBO0FBaENKO0FBa0NJO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBakNSO0FBbUNRO0VBRUksY0FBQTtFQUNBLDhCQUFBO0FBbENaO0FBcUNRO0VBRUksWUFBQTtFQUNBLHNCQUFBO0FBcENaO0FBc0NZO0VBRUksZ0RBQUE7RUFDQSxtQkFBQTtBQXJDaEI7QUF3Q1k7RUFFSSxXQUFBO0VBRUEsWUFBQTtFQUVBLGFBQUE7QUF6Q2hCO0FBNkNRO0VBRUksK0JBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUE3Q1o7QUErQ1k7RUFFSSw4QkFBQTtFQUNBLGdCQUFBO0FBOUNoQjtBQWtEUTtFQUVJLDRCQUFBO0VBQ0EsV0FBQTtFQUVBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0FBbERaO0FBb0RZO0VBRUksbUJBQUE7RUFDQSxnQkFBQTtBQW5EaEI7QUEyREE7RUFFSSxZQUFBO0FBekRKO0FBMkRJO0VBRUksVUFBQTtFQUNBLHFCQUFBO0VBRUEsZ0JBQUE7QUEzRFIiLCJmaWxlIjoiZXN0b3F1ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gTWlkIEdlcmFsKi9cclxuLm1laW9cclxue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgMjBweCk7XHJcblxyXG4gICAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xyXG5cclxuICAgIC50b3AsIC5jb250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoKDEwMHZ3IC8gNSkgKyAoKDEwMHZ3IC8gNSkgLyAyKSArIDEwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXRlbmNhb1xyXG57XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jZVF1YW50aWRhZGUgI2JhY2tcclxue1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4udmlzaXZlbFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgNjBweCk7XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBFc3RvcXVlKi9cclxuLm1lZGljYW1lbnRvc1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZhbmRlcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICBpbWdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNzAlIC0gMzBweCk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgaDNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTYWlyYSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc3BhY2UtY2FkZXQpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN2Z1xyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmaWxsOiB2YXIoLS1yZWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuXHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgIHN2Z1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmlsbDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbXByYXJcclxue1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHBlbmRlbnRlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBlbmRlbnRlXHJcbntcclxuICAgIDAle3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cclxuICAgIDc1JXt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XHJcbiAgICA4MCV7dHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO31cclxuICAgIDg1JXt0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTt9XHJcbiAgICA5MCV7dHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO31cclxuICAgIDk1JXt0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTt9XHJcbiAgICAxMDAle3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLy8jcmVnaW9uIEFsZXJ0YVxyXG4jckVzdG9xdWVcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XHJcblxyXG4gICAgLmFsZXJ0XHJcbiAgICB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgaDNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbXBvcnRhbnRcclxuICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgIH1cclxufVxyXG5cclxuI2VRdWFudGlkYWRlXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xyXG5cclxuICAgIC5hbGVydFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICAgICBoM1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgICAuaW5wdXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmlucHV0LCBwXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uOm50aC1vZi10eXBlKDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uOm50aC1vZi10eXBlKDIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIFNlbU1lZGljYW1lbnRvXHJcbi5zZW1NZWRpY2FtZW50b1xyXG57XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcblxyXG4gICAgc3ZnXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBmaWxsOiB2YXIoLS1sYXZhbmRlcik7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICB9XHJcbn1cclxuLy8jZW5kcmVnaW9uXHJcbiJdfQ== */");

/***/ }),

/***/ 29935:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/estoque/estoque.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"nav vertical flex\">\r\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo MedicaMe\">\r\n    <div id=\"eNav\" class=\"button full flex\" (click)=\"open()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"eDep\" class=\"dep vertical flex invisivel\">\r\n    <p>Dependente: {{nomeDependente}}</p>\r\n    <p class=\"aviso sair\" (click)=\"removDependente()\">Voltar</p>  \r\n  </div>\r\n\r\n  <div id=\"mEstoque\" class=\"menu invisivel\">\r\n    <div id=\"back\" (click)=\"close()\"></div>\r\n\r\n    <div id=\"eMenu\" class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <h3>Configurações</h3>\r\n\r\n        <div class=\"button full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mid\">\r\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Tutorial</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"adicionarResponsavel()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Adicionar responsável</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"adicionarSintomas()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M19.099 11.136c-1.449 1.97-3.599 3.914-6.021 3.597-.655.916-1.387 2.194-2.199 3.678l-1.879.589c1.589-3.101 3.712-6.53 5.989-9.136-.986.642-2.606 2.023-4.016 3.479-1.271-2.656.069-5.115 2.012-6.994-.056.885.337 1.692.631 2.107-.05-.74.036-2.062.576-3.207 1.082-.913 2.039-1.57 3.132-2.145-.177.647-.025 1.423.182 1.907.095-.67.494-1.937.955-2.462 1.364-.88 3.384-1.584 5.539-1.548-.238 1.328-.936 3.484-1.877 4.821-.761.489-1.766.775-2.566.913.663.186 1.407.24 2.052.192-.469.987-.946 1.891-1.667 3-.995.555-2.267.8-3.135.846.607.319 1.714.505 2.292.363zm-1.099 4.009v5.855h-16v-12h6.875c.229-.673.547-1.342.979-2h-9.854v16h20v-9.788c-.574.679-1.239 1.355-2 1.933z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Adicionar sintomas</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"sair()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Sair</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"eMeio\" class=\"meio\">\r\n    <div class=\"top centerA\">\r\n      <h3>Seus medicamentos</h3>\r\n    </div>\r\n\r\n    <div id=\"eContent\" class=\"content\">\r\n      <div *ngIf=\"temLista\">\r\n        <div *ngFor=\"let l of medicamentos\" [ngSwitch]=\"l.Situacao\">\r\n          <div *ngSwitchDefault class=\"medicamentos full flex\">     \r\n            <img src=\"../../../assets/IMG/Icon/{{l.FormaFarmaceutica}}.png\">\r\n\r\n            <div class=\"text flex leftA\">\r\n              <h3 class=\"line\">{{l.Nome}}</h3>\r\n              <p>{{l.Quantidade}}</p>\r\n            </div>\r\n\r\n            <svg viewBox=\"0 0 24 24\" (click)=\"removerMedicamento(l.Agendamento)\">\r\n              <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n            </svg>\r\n\r\n            <button class=\"normal full flex\" (click)=\"editar(l.Agendamento, l.Quantidade, l.FormaFarmaceutica)\">\r\n              Editar quantidade\r\n\r\n              <svg viewBox=\"0 0 24 24\">\r\n                <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n              </svg>\r\n            </button>\r\n          </div>\r\n\r\n          <div *ngSwitchCase=\"situacao[0]\" class=\"medicamentos comprar full flex\">     \r\n            <img src=\"../../../assets/IMG/Icon/{{l.FormaFarmaceutica}}.png\">\r\n\r\n            <div class=\"text flex leftA\">\r\n              <h3 class=\"line\">{{l.Nome}}</h3>\r\n              <p class=\"aviso\">{{l.Quantidade}}</p>\r\n            </div>\r\n\r\n            <svg viewBox=\"0 0 24 24\" (click)=\"removerMedicamento(l.Agendamento)\">\r\n              <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n            </svg>\r\n\r\n            <button class=\"danger full flex\" (click)=\"editar(l.Agendamento, l.Quantidade, l.FormaFarmaceutica)\">\r\n              Editar quantidade\r\n\r\n              <svg viewBox=\"0 0 24 24\">\r\n                <path d=\"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z\"/>\r\n              </svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"temListaNao\">\r\n        <div class=\"semMedicamento full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n          <path d=\"M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z\"/>\r\n          </svg>\r\n          \r\n          <p>Você ainda não possui nenhum medicamento vá para lembretes, clique no botão: \"Novo Lembrete\" e crie o primeiro!</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"eQuantidade\" class=\"invisivel\">\r\n    <div id=\"qFundo\" class=\"centraliza full flex\" (click)=\"fechar()\">\r\n      <div id=\"qAlert\" class=\"alert\">\r\n        <div class=\"top full flex\">\r\n          <h3>Ajuste a quantidade</h3>\r\n        </div>\r\n\r\n        <div class=\"content full flex\">\r\n          <input id=\"quantidade\" type=\"number\" class=\"input centerA\" [(ngModel)]=\"editarQuantidade\">\r\n          <p>{{quantidadeAdicional}}</p>\r\n        </div>\r\n\r\n        <button id=\"qBtn\" (click)=\"adicionar()\"><span id=\"qSpn\">Adicionar</span></button>\r\n        <button id=\"qBtn2\" (click)=\"retirar()\"><span id=\"qSpn2\">Retirar</span></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"rEstoque\" class=\"invisivel\">\r\n    <div id=\"eFundo\" class=\"centraliza full flex\" (click)=\"nao()\">\r\n      <div id=\"eAlert\" class=\"alert\">\r\n        <div class=\"top full flex\">\r\n          <h3>TEM CERTEZA DISSO?</h3>\r\n        </div>\r\n\r\n        <div class=\"content centerA\">\r\n          <p>Deseja realmente REMOVER esse Medicamento?</p>\r\n\r\n          <button id=\"eBtn\" class=\"important\" (click)=\"nao()\">Não</button>\r\n          <button id=\"eBtn\" class=\"normal\" (click)=\"sim()\">Sim</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"eTabs\" class=\"tabs full flex\">\r\n    <div class=\"button full flex\" (click)=\"lembretes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z\"/>\r\n      </svg>\r\n      <p>Lembretes</p>\r\n    </div>\r\n\r\n    <div class=\"button middle\">\r\n      <div class=\"principal full flex\">\r\n        <svg viewBox=\"0 0 24 24\">\r\n          <path d=\"M1 24h22v-12h-22v12zm8-9h6v2h-6v-2zm15-7v2h-24v-2l4.474-8h15.087l4.439 8z\"/>\r\n        </svg>\r\n      </div>\r\n      <p>Estoque</p>\r\n    </div>\r\n    \r\n    <div class=\"button full flex\" (click)=\"home()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z\"/>\r\n      </svg>\r\n      <p>Home</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"dependentes()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z\"/>\r\n      </svg>\r\n      <p>Dependentes</p>\r\n    </div>\r\n\r\n    <div class=\"button full flex\" (click)=\"relatorio()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z\"/>\r\n      </svg>\r\n      <p>Relatório</p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_estoque_estoque_module_ts.js.map