(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_novo-lembrete_novo-lembrete_module_ts"],{

/***/ 4955:
/*!*****************************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovoLembretePageRoutingModule": () => (/* binding */ NovoLembretePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _novo_lembrete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novo-lembrete.page */ 7816);




const routes = [
    {
        path: '',
        component: _novo_lembrete_page__WEBPACK_IMPORTED_MODULE_0__.NovoLembretePage
    }
];
let NovoLembretePageRoutingModule = class NovoLembretePageRoutingModule {
};
NovoLembretePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NovoLembretePageRoutingModule);



/***/ }),

/***/ 5283:
/*!*********************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovoLembretePageModule": () => (/* binding */ NovoLembretePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _novo_lembrete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novo-lembrete-routing.module */ 4955);
/* harmony import */ var _novo_lembrete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./novo-lembrete.page */ 7816);







let NovoLembretePageModule = class NovoLembretePageModule {
};
NovoLembretePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _novo_lembrete_routing_module__WEBPACK_IMPORTED_MODULE_0__.NovoLembretePageRoutingModule
        ],
        declarations: [_novo_lembrete_page__WEBPACK_IMPORTED_MODULE_1__.NovoLembretePage]
    })
], NovoLembretePageModule);



/***/ }),

/***/ 7816:
/*!*******************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovoLembretePage": () => (/* binding */ NovoLembretePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_novo_lembrete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./novo-lembrete.page.html */ 6143);
/* harmony import */ var _novo_lembrete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./novo-lembrete.page.scss */ 8887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 8914);






let NovoLembretePage = class NovoLembretePage {
    //#region Constructor
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        this.descricao = '';
        this.listaFarma = [];
        //Mudando titulo
        this.titulo = 'Informações do medicamento';
        //Adicionar valor máximo e minimo no ion-datetime
        let nowData = new Date();
        this.minimo = nowData.getFullYear() + '-' + String(nowData.getMonth() + 1).padStart(2, '0') + '-' + String(nowData.getDate()).padStart(2, '0');
        this.maximo = String(nowData.getFullYear() + 1) + '-12-31';
        //Pegando as formas farmaceuticas
        this.servidor.enviar('Responsavel/Novo Lembrete/formaFarma.php', null).subscribe(res => {
            this.listaFarma = res;
        });
    }
    //#endregion 
    //#region Próximo
    proximo() {
        //Verificação dos valores
        document.getElementById('avisoUm').classList.add('invisivel');
        if (this.nomeMedicamento == '' || this.formaFarma == 'vazio' || this.dosagem == '' || this.nomeMedicamento == null || this.dosagem == null) {
            this.txtAvisoUm = 'O preenchimento dos campos: Nome do medicamento, Forma farmacêutica e Dosagem, são obrigatórios!';
            document.getElementById('avisoUm').classList.remove('invisivel');
        }
        else if (localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '') {
            //Trocnado pro 2
            document.getElementById('um').classList.add('invisivel');
            document.getElementById('dois').classList.remove('invisivel');
            this.titulo = 'Período';
            this.txtBotao = 'Atualizar Lembrete';
        }
        else {
            //Enviando ao PHP
            let dados = 'phpNomeMedicamento=' + this.nomeMedicamento + '&phpFormaFarmaceutica=' + this.formaFarma + '&phpDescricao=' + this.descricao + '&phpDosagem=' + this.dosagem + '&phpEmail=' + this.email;
            this.servidor.enviar('Responsavel/Novo Lembrete/main.php', dados).subscribe(res => {
                if (res[0]['Erro'] == false) {
                    //Troca pro Dois
                    document.getElementById('um').classList.add('invisivel');
                    document.getElementById('dois').classList.remove('invisivel');
                    this.titulo = 'Período';
                    this.txtBotao = 'Criar Lembrete';
                }
                else {
                    this.txtAvisoUm = 'Erro na hora de criar o lembrete!';
                    document.getElementById('avisoUm').classList.remove('invisivel');
                }
            });
        }
    }
    //#endregion
    //#region Criar lembrete
    criar() {
        //Verificação dos valores
        document.getElementById('avisoDois').classList.add('invisivel');
        if (this.dataFinal == null && this.dias != null) {
            this.dataFinal = 'null';
        }
        else if (this.dataFinal == null && this.dias == null) {
            this.dataFinal = 'null';
            this.dias = 'null';
        }
        else if (this.dataFinal != null && this.dias == null) {
            this.dias = 'null';
        }
        if (this.dataInicial == '' || this.dataFinal == '' || this.dias == '' || this.horas == '' || this.quantidadeAtual == '' || this.quantidadeMinima == '' || this.dataInicial == null || this.dataFinal == null || this.dias == null || this.horas == null || this.quantidadeAtual == null || this.quantidadeMinima == null) {
            this.txtAvisoDois = 'O preenchimento dos campos: Data Inicial, Horas, Quantidade Atual e Quantidade mínima, são obrigatórios!';
            document.getElementById('avisoDois').classList.remove('invisivel');
        }
        else if (localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '') {
            //Enviando ao PHP
            let dados = 'phpNomeMedicamento=' + this.nomeMedicamento + '&phpFormaFarmaceutica=' + this.formaFarma + '&phpDescricao=' + this.descricao + '&phpDosagem=' + this.dosagem + '&phpDataInicial=' + this.dataInicial.substring(0, 10) + '&phpDataFinal=' + this.dataFinal.substring(0, 10) + '&phpDias=' + this.dias + '&phpHoras=' + this.horas + '&phpQuantidadeAtual=' + this.quantidadeAtual + '&phpQuantidadeMinima=' + this.quantidadeMinima + '&phpEmail=' + this.email + '&phpCodigo=' + localStorage.getItem('agendamento');
            this.servidor.enviar('Responsavel/Novo Lembrete/atualizar.php', dados).subscribe(res => {
                if (res[0]['Erro'] == false) {
                    this.cancelar();
                }
                else {
                    this.txtAvisoDois = 'Erro na hora de criar o lembrete!';
                    document.getElementById('avisoDois').classList.remove('invisivel');
                }
            });
        }
        else {
            //Enviando ao PHP
            let dados = 'phpDataInicial=' + this.dataInicial.substring(0, 10) + '&phpDataFinal=' + this.dataFinal.substring(0, 10) + '&phpDias=' + this.dias + '&phpHoras=' + this.horas + '&phpQuantidadeAtual=' + this.quantidadeAtual + '&phpQuantidadeMinima=' + this.quantidadeMinima + '&phpEmail=' + this.email;
            this.servidor.enviar('Responsavel/Novo Lembrete/main pt2.php', dados).subscribe(res => {
                if (res[0]['Erro'] == false) {
                    this.cancelar();
                }
                else {
                    this.txtAvisoDois = 'Erro na hora de criar o lembrete!';
                    document.getElementById('avisoDois').classList.remove('invisivel');
                }
            });
        }
        this.dataFinal = null;
        this.dias = null;
    }
    //#endregion
    //#region Navegação
    voltar() {
        //Troca pro Um
        document.getElementById('dois').classList.add('invisivel');
        document.getElementById('um').classList.remove('invisivel');
        this.titulo = 'Informações do medicamento';
    }
    cancelar() {
        let dados = 'phpEmail=' + this.email;
        this.servidor.enviar('Responsavel/Novo Lembrete/remover.php', dados).subscribe(res => {
            //Limpar
            localStorage.removeItem('agendamento');
            //Troca pro Um
            document.getElementById('dois').classList.add('invisivel');
            document.getElementById('um').classList.remove('invisivel');
            this.titulo = 'Informações do medicamento';
            //Volta
            this.nav.rLembretes();
        });
    }
    //#endregion
    //#region ViewWillEnter
    ionViewWillEnter() {
        //Verificar Login
        this.servidor.verificar();
        //Dependente
        if (localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '') {
            this.nomeDependente = localStorage.getItem('nomeDependente');
            this.email = localStorage.getItem('emailDependente');
        }
        else {
            this.email = localStorage.getItem('email');
        }
        //Puxar para editar
        if (localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '') {
            let dados = 'phpEmail=' + this.email + '&phpCodigo=' + localStorage.getItem('agendamento');
            this.servidor.enviar('Responsavel/Novo Lembrete/editar.php', dados).subscribe(res => {
                //Botando na tela
                this.nomeMedicamento = res[0]['Nome'];
                this.formaFarma = res[0]['FormaFarmaceutica'];
                this.dosagem = res[0]['Dosagem'];
                this.descricao = res[0]['Descricao'];
                this.dataInicial = String(res[0]['DataInicial']).substring(0, 10);
                this.dataFinal = String(res[0]['DataFinal']).substring(0, 10);
                this.dias = res[0]['Dias'];
                this.horas = res[0]['Horas'];
                this.quantidadeAtual = res[0]['QuantidadeAtual'];
                this.quantidadeMinima = res[0]['QuantidadeMinima'];
            });
        }
    }
    //#endregion
    ngOnInit() { }
};
NovoLembretePage.ctorParameters = () => [
    { type: src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__.NavegationService },
    { type: src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__.ServidorService }
];
NovoLembretePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-novo-lembrete',
        template: _raw_loader_novo_lembrete_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_novo_lembrete_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NovoLembretePage);



/***/ }),

/***/ 8887:
/*!*********************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.content {\n  overflow: hidden;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  width: 80vw;\n  overflow: hidden;\n  border-bottom-color: var(--white);\n  border-bottom-width: 3px;\n  border-bottom-style: solid;\n}\n.top h3 {\n  color: var(--white);\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.top img {\n  width: 80%;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  overflow: scroll;\n}\n.mid .bloco {\n  width: 45%;\n}\n.mid .bloco:nth-of-type(1) {\n  margin-right: 10%;\n}\n.mid span, .mid h3, .mid button {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.mid span, .mid h3 {\n  color: var(--white);\n}\n.mid h3 {\n  border-bottom-color: var(--white);\n  border-bottom-width: 3px;\n  border-bottom-style: solid;\n  line-height: 40px;\n  margin-bottom: 20px;\n}\n.mid .no {\n  margin-bottom: 0px;\n}\n.mid textarea {\n  height: 80px;\n  resize: none;\n}\n.mid .important {\n  position: inherit;\n}\n.mid .important svg {\n  height: 20px;\n  position: relative;\n  right: -35%;\n  border-radius: 10px;\n  fill: var(--dark-space-cadet);\n}\n.mid .normal svg {\n  height: 20px;\n  position: relative;\n  left: -52%;\n  border-radius: 10px;\n  fill: var(--white);\n  transform: rotate(180deg);\n}\n.mid .aviso {\n  margin-top: 20px;\n}\n/*#endregion*/\n#um {\n  height: 74vh;\n}\n#dois {\n  height: 80vh;\n}\n#dois .data {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdm8tbGVtYnJldGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFFSSxnQkFBQTtBQUFKO0FBRUEsYUFBQTtBQUVBLGNBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBQUZKO0FBSUk7RUFFSSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU9JO0VBRUksVUFBQTtBQU5SO0FBU0EsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVVJO0VBRUksVUFBQTtBQVRSO0FBWUk7RUFFSSxpQkFBQTtBQVhSO0FBY0k7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0FBYlI7QUFnQkk7RUFFSSxtQkFBQTtBQWZSO0FBa0JJO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBRUEsaUJBQUE7RUFFQSxtQkFBQTtBQW5CUjtBQXNCSTtFQUVJLGtCQUFBO0FBckJSO0FBd0JJO0VBRUksWUFBQTtFQUVBLFlBQUE7QUF4QlI7QUEyQkk7RUFFSSxpQkFBQTtBQTFCUjtBQTRCUTtFQUVJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUVBLDZCQUFBO0FBOUJaO0FBa0NJO0VBRUksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLG1CQUFBO0VBRUEsa0JBQUE7RUFFQSx5QkFBQTtBQXJDUjtBQXdDSTtFQUVJLGdCQUFBO0FBdkNSO0FBMENBLGFBQUE7QUFHQTtFQUVJLFlBQUE7QUExQ0o7QUE2Q0E7RUFFSSxZQUFBO0FBM0NKO0FBNkNJO0VBRUksNEJBQUE7QUE1Q1IiLCJmaWxlIjoibm92by1sZW1icmV0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gR2VyYWwqL1xyXG4uY29udGVudFxyXG57XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gVG9wKi9cclxuLnRvcFxyXG57XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcblxyXG4gICAgaDNcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIE1pZGRsZSovXHJcbi5taWRcclxue1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG5cclxuICAgIC5ibG9jb1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJsb2NvOm50aC1vZi10eXBlKDEpXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiwgaDMsIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLCBoM1xyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaDNcclxuICAgIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubm9cclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dGFyZWFcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcblxyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1wb3J0YW50XHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3ZnXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMzUlO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWRhcmstc3BhY2UtY2FkZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm9ybWFsIHN2Z1xyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IC01MiU7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGZpbGw6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAuYXZpc29cclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vLyNyZWdpb24gVW0gZSBEb2lzXHJcbiN1bVxyXG57XHJcbiAgICBoZWlnaHQ6IDc0dmg7XHJcbn1cclxuXHJcbiNkb2lzXHJcbntcclxuICAgIGhlaWdodDogODB2aDtcclxuXHJcbiAgICAuZGF0YVxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLy8jZW5kcmVnaW9uXHJcbiJdfQ== */");

/***/ }),

/***/ 6143:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/novo-lembrete/novo-lembrete.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card full flex\">\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n        <h3 class=\"line\">{{titulo}}</h3>\r\n      </div>\r\n      \r\n      <div class=\"mid full flex\">\r\n        <div id=\"um\" class=\"full flex\">\r\n          <span class=\"line leftA\">Nome do medicamento</span>\r\n          <input [(ngModel)]=\"nomeMedicamento\" type=\"text\" class=\"input\">\r\n  \r\n          <span class=\"line leftA\">Forma farmacêutica</span>\r\n          <select [(ngModel)]=\"formaFarma\" class=\"input\">\r\n            <option value=\"vazio\"></option>\r\n            <option *ngFor=\"let l of listaFarma\" [ngValue]=\"l.Codigo\">{{l.Nome}}</option>\r\n          </select> \r\n  \r\n          <span class=\"line leftA\">Dosagem</span>\r\n          <input [(ngModel)]=\"dosagem\" type=\"number\" class=\"input\">\r\n  \r\n          <h3 class=\"line centerA\">Descrição</h3>\r\n          <textarea [(ngModel)]=\"descricao\" class=\"input\"></textarea>\r\n          <p id=\"avisoUm\" class=\"aviso invisivel\">{{txtAvisoUm}}</p>\r\n\r\n          <button (click)=\"proximo()\" class=\"important full flex\">\r\n            Próximo\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\r\n            </svg>\r\n          </button>\r\n          <button (click)=\"cancelar()\" class=\"normal\">Cancelar</button>\r\n        </div>\r\n  \r\n        <div id=\"dois\" class=\"full flex invisivel\">\r\n          <div class=\"bloco flex\">\r\n            <span class=\"line leftA\">Ínicio</span>\r\n            <div class=\"data input\">\r\n              <ion-item class=\"input\">\r\n                <ion-datetime [(ngModel)]=\"dataInicial\" displayFormat=\"DD/MM/YYYY\" min=\"{{minimo}}\" max=\"{{maximo}}\"></ion-datetime>\r\n              </ion-item>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"bloco flex\">\r\n            <span class=\"line leftA\">Final</span>\r\n            <div class=\"data input\">\r\n              <ion-item class=\"input\">\r\n                <ion-datetime [(ngModel)]=\"dataFinal\" displayFormat=\"DD/MM/YYYY\" min=\"{{minimo}}\" max=\"{{maximo}}\"></ion-datetime>\r\n              </ion-item>\r\n            </div>\r\n          </div>\r\n\r\n          <span class=\"line leftA\">Quantidade de Dias</span>\r\n          <input [(ngModel)]=\"dias\" type=\"number\" class=\"input\">\r\n\r\n          <span class=\"line leftA\">Horas</span>\r\n          <input [(ngModel)]=\"horas\" type=\"number\" class=\"input\">\r\n  \r\n          <h3 class=\"line centerA no\">Estoque</h3>\r\n          <span class=\"line leftA\">Quantidade atual</span>\r\n          <input [(ngModel)]=\"quantidadeAtual\" type=\"number\" class=\"input\">\r\n\r\n          <span class=\"line leftA\">Quantidade mínima (notificação)</span>\r\n          <input [(ngModel)]=\"quantidadeMinima\" type=\"number\" class=\"input\">\r\n\r\n          <p id=\"avisoDois\" class=\"aviso invisivel\">{{txtAvisoDois}}</p>\r\n\r\n          <button (click)=\"criar()\" class=\"important\">{{txtBotao}}</button>\r\n\r\n          <button (click)=\"voltar()\" class=\"normal full flex\"> Voltar\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\r\n            </svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_novo-lembrete_novo-lembrete_module_ts.js.map