(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_R_novo-lembrete_novo-lembrete_module_ts"],{

/***/ 64955:
/*!*****************************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovoLembretePageRoutingModule": () => (/* binding */ NovoLembretePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _novo_lembrete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novo-lembrete.page */ 87816);




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

/***/ 15283:
/*!*********************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovoLembretePageModule": () => (/* binding */ NovoLembretePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _novo_lembrete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novo-lembrete-routing.module */ 64955);
/* harmony import */ var _novo_lembrete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./novo-lembrete.page */ 87816);







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

/***/ 87816:
/*!*******************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovoLembretePage": () => (/* binding */ NovoLembretePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_novo_lembrete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./novo-lembrete.page.html */ 46143);
/* harmony import */ var _novo_lembrete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./novo-lembrete.page.scss */ 28887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_navegation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navegation.service */ 6192);
/* harmony import */ var src_app_services_servidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servidor.service */ 58914);






let NovoLembretePage = class NovoLembretePage {
    //#region Constructor
    constructor(nav, servidor) {
        this.nav = nav;
        this.servidor = servidor;
        this.descricao = '';
        this.dias = '';
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
            //Trocando pro 2
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
                    this.horass();
                }
                else {
                    this.txtAvisoUm = 'Erro na hora de criar o lembrete!';
                    document.getElementById('avisoUm').classList.remove('invisivel');
                }
            });
        }
    }
    //#endregion
    //#region Mudanças
    change() {
        if (this.check == true) {
            this.dias = '';
            document.getElementById('qtDias').setAttribute('disabled', 'true');
        }
        else {
            document.getElementById('qtDias').removeAttribute('disabled');
        }
    }
    //#endregion
    //#region Criar lembrete
    criar() {
        //Verificação dos valores
        document.getElementById('avisoDois').classList.add('invisivel');
        if (this.check == true) {
            if (this.dataInicial == '' || this.horas == 'vazio' || this.horario == '' || this.quantidadeAtual == '' || this.quantidadeMinima == '' || this.dataInicial == null || this.horario == null || this.quantidadeAtual == null || this.quantidadeMinima == null) {
                this.txtAvisoDois = 'O preenchimento dos campos: Data inicial, Vezes ao dia, Horário inicial, Quantidade atual e Quantidade mínima, são obrigatórios!';
                document.getElementById('avisoDois').classList.remove('invisivel');
            }
            else if (parseInt(this.quantidadeAtual) <= parseInt(this.quantidadeMinima)) {
                this.txtAvisoDois = 'A quantidade atual tem que ser maior que a quantidade mínima, digite novamente!';
                document.getElementById('avisoDois').classList.remove('invisivel');
            }
            else if (localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '') {
                //Enviando ao PHP
                let dados = 'phpNomeMedicamento=' + this.nomeMedicamento + '&phpFormaFarmaceutica=' + this.formaFarma + '&phpDescricao=' + this.descricao + '&phpDosagem=' + this.dosagem + '&phpDataInicial=' + this.dataInicial.substring(0, 10) + ' ' + this.horario + ':00' + '&phpDias=null' + '&phpHoras=' + this.horas + '&phpQuantidadeAtual=' + this.quantidadeAtual + '&phpQuantidadeMinima=' + this.quantidadeMinima + '&phpEmail=' + this.email + '&phpCodigo=' + localStorage.getItem('agendamento');
                this.servidor.enviar('Responsavel/Novo Lembrete/atualizar.php', dados).subscribe(res => {
                    if (res[0]['Erro'] == false) {
                        this.cancelar();
                    }
                    else {
                        this.txtAvisoDois = 'Erro na hora de atualizar o lembrete!';
                        document.getElementById('avisoDois').classList.remove('invisivel');
                    }
                });
            }
            else {
                //Enviando ao PHP
                let dados = 'phpDataInicial=' + this.dataInicial.substring(0, 10) + ' ' + this.horario + ':00' + '&phpDias=null' + '&phpHoras=' + this.horas + '&phpQuantidadeAtual=' + this.quantidadeAtual + '&phpQuantidadeMinima=' + this.quantidadeMinima + '&phpEmail=' + this.email;
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
        }
        else {
            if (this.dataInicial == '' || this.dias == '' || this.horas == 'vazio' || this.horario == '' || this.quantidadeAtual == '' || this.quantidadeMinima == '' || this.dataInicial == null || this.dias == null || this.horario == null || this.quantidadeAtual == null || this.quantidadeMinima == null) {
                this.txtAvisoDois = 'O preenchimento dos campos: Data inicial, Quantidade de dias, Vezes ao dia, Horário inicial, Quantidade atual e Quantidade mínima, são obrigatórios!';
                document.getElementById('avisoDois').classList.remove('invisivel');
            }
            else if (parseInt(this.quantidadeAtual) <= parseInt(this.quantidadeMinima)) {
                this.txtAvisoDois = 'A quantidade atual tem que ser maior que a quantidade mínima, digite novamente!';
                document.getElementById('avisoDois').classList.remove('invisivel');
            }
            else if (localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '') {
                //Enviando ao PHP
                let dados = 'phpNomeMedicamento=' + this.nomeMedicamento + '&phpFormaFarmaceutica=' + this.formaFarma + '&phpDescricao=' + this.descricao + '&phpDosagem=' + this.dosagem + '&phpDataInicial=' + this.dataInicial.substring(0, 10) + ' ' + this.horario + ':00' + '&phpDias=' + this.dias + '&phpHoras=' + this.horas + '&phpQuantidadeAtual=' + this.quantidadeAtual + '&phpQuantidadeMinima=' + this.quantidadeMinima + '&phpEmail=' + this.email + '&phpCodigo=' + localStorage.getItem('agendamento');
                this.servidor.enviar('Responsavel/Novo Lembrete/atualizar.php', dados).subscribe(res => {
                    if (res[0]['Erro'] == false) {
                        this.cancelar();
                    }
                    else {
                        this.txtAvisoDois = 'Erro na hora de atualizar o lembrete!';
                        document.getElementById('avisoDois').classList.remove('invisivel');
                    }
                });
            }
            else {
                //Enviando ao PHP
                let dados = 'phpDataInicial=' + this.dataInicial.substring(0, 10) + ' ' + this.horario + ':00' + '&phpDias=' + this.dias + '&phpHoras=' + this.horas + '&phpQuantidadeAtual=' + this.quantidadeAtual + '&phpQuantidadeMinima=' + this.quantidadeMinima + '&phpEmail=' + this.email;
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
        }
    }
    //#endregion
    //#region Horas
    horass() {
        if (this.horario != null && this.horas != 'vazio') {
            var data = new Date();
            data.setHours(this.horario.substring(0, 2));
            data.setMinutes(this.horario.substring(3, 5));
            this.previsao = this.horario;
            for (let i = 1; i < (24 / this.horas); i++) {
                data.setHours(data.getHours() + parseInt(this.horas));
                this.previsao += ' - ' + String(data.getHours()).padStart(2, '0') + ':' + String(data.getMinutes()).padEnd(2, '0');
            }
        }
        else {
            this.previsao = 'Horários em que o alareme será disparado';
        }
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
                this.descricao = res[0]['Descricao'];
                this.dataInicial = String(res[0]['DataInicial']).substring(0, 10);
                this.horario = String(res[0]['DataInicial']).substring(11, 16);
                this.horas = res[0]['Horas'];
                this.horass();
                if (res[0]['Dosagem'] - Math.floor(res[0]['Dosagem']) == 0) {
                    this.dosagem = Math.trunc(res[0]['Dosagem']);
                }
                else {
                    this.dosagem = res[0]['Dosagem'];
                }
                if (res[0]['QuantidadeAtual'] - Math.floor(res[0]['QuantidadeAtual']) == 0) {
                    this.quantidadeAtual = Math.trunc(res[0]['QuantidadeAtual']);
                }
                else {
                    this.quantidadeAtual = res[0]['QuantidadeAtual'];
                }
                if (res[0]['QuantidadeMinima'] - Math.floor(res[0]['QuantidadeMinima']) == 0) {
                    this.quantidadeMinima = Math.trunc(res[0]['QuantidadeMinima']);
                }
                else {
                    this.quantidadeMinima = res[0]['QuantidadeMinima'];
                }
                if (res[0]['Dias'] == null) {
                    this.check = true;
                    this.change();
                }
                else {
                    this.dias = res[0]['Dias'];
                }
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

/***/ 28887:
/*!*********************************************************!*\
  !*** ./src/app/R/novo-lembrete/novo-lembrete.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.content {\n  overflow: hidden;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  width: 80vw;\n  overflow: hidden;\n  border-bottom-color: var(--white);\n  border-bottom-width: 3px;\n  border-bottom-style: solid;\n}\n.top h3 {\n  color: var(--white);\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.top img {\n  width: 80%;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  padding-bottom: 10px;\n  overflow: scroll;\n}\n.mid .bloco {\n  width: 45%;\n}\n.mid .bloco:nth-of-type(1), .mid .bloco:nth-of-type(4) {\n  margin-right: 10%;\n}\n.mid .check {\n  width: 45%;\n  margin-top: 10px;\n  margin-left: 55%;\n}\n.mid .check input {\n  width: 15px;\n  height: 15px;\n}\n.mid .check p {\n  margin-left: 10px;\n}\n.mid span, .mid h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.mid button {\n  margin-top: 20px;\n}\n.mid span, .mid h3 {\n  color: var(--white);\n}\n.mid h3 {\n  border-bottom-color: var(--white);\n  border-bottom-width: 3px;\n  border-bottom-style: solid;\n  line-height: 40px;\n  margin-bottom: 20px;\n}\n.mid .no {\n  margin-bottom: 0px;\n}\n.mid textarea {\n  height: 80px;\n  resize: none;\n}\n.mid .important {\n  position: inherit;\n}\n.mid .important span {\n  position: relative;\n  left: 13px;\n}\n.mid .important svg {\n  height: 20px;\n  position: relative;\n  right: -32%;\n  border-radius: 10px;\n  fill: var(--dark-space-cadet);\n}\n.mid .normal {\n  box-sizing: border-box;\n}\n.mid .normal span {\n  position: relative;\n  left: 15px;\n}\n.mid .normal svg {\n  height: 20px;\n  position: relative;\n  left: -51%;\n  border-radius: 10px;\n  fill: var(--white);\n  transform: rotate(180deg);\n}\n.mid .aviso {\n  margin-top: 20px;\n}\n/*#endregion*/\n#um {\n  min-height: 74vh;\n  padding-bottom: 5px;\n  overflow: hidden;\n}\n#dois {\n  min-height: 80vh;\n  padding-bottom: 5px;\n  overflow: hidden;\n}\n#dois .check p {\n  color: var(--white) !important;\n}\n#dois .data {\n  padding-left: 0px !important;\n}\n#dois .horas {\n  background-color: var(--state-blue);\n  width: 100%;\n  min-height: 20px;\n  margin: 30px 0px 0px 0px;\n  padding: 10px;\n  border-radius: 10px;\n  overflow: hidden;\n  font-family: \"Saira\";\n}\n#dois .horas p {\n  color: var(--white) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdm8tbGVtYnJldGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFFSSxnQkFBQTtBQUFKO0FBRUEsYUFBQTtBQUVBLGNBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBQUZKO0FBSUk7RUFFSSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU9JO0VBRUksVUFBQTtBQU5SO0FBU0EsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVJKO0FBVUk7RUFFSSxVQUFBO0FBVFI7QUFZSTtFQUVJLGlCQUFBO0FBWFI7QUFjSTtFQUVJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBYlI7QUFlUTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBZFo7QUFpQlE7RUFFSSxpQkFBQTtBQWhCWjtBQW9CSTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7QUFuQlI7QUFzQkk7RUFFSSxnQkFBQTtBQXJCUjtBQXdCSTtFQUVJLG1CQUFBO0FBdkJSO0FBMEJJO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBRUEsaUJBQUE7RUFFQSxtQkFBQTtBQTNCUjtBQThCSTtFQUVJLGtCQUFBO0FBN0JSO0FBZ0NJO0VBRUksWUFBQTtFQUVBLFlBQUE7QUFoQ1I7QUFtQ0k7RUFFSSxpQkFBQTtBQWxDUjtBQW9DUTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtBQW5DWjtBQXNDUTtFQUVJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUVBLDZCQUFBO0FBeENaO0FBNENJO0VBRUksc0JBQUE7QUEzQ1I7QUE2Q1E7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUE1Q1o7QUErQ1E7RUFFSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBRUEsbUJBQUE7RUFFQSxrQkFBQTtFQUVBLHlCQUFBO0FBbERaO0FBc0RJO0VBRUksZ0JBQUE7QUFyRFI7QUF3REEsYUFBQTtBQUdBO0VBRUksZ0JBQUE7RUFFQSxtQkFBQTtFQUVBLGdCQUFBO0FBMURKO0FBNkRBO0VBRUksZ0JBQUE7RUFFQSxtQkFBQTtFQUVBLGdCQUFBO0FBN0RKO0FBaUVRO0VBRUksOEJBQUE7QUFoRVo7QUFvRUk7RUFFSSw0QkFBQTtBQW5FUjtBQXNFSTtFQUVJLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsd0JBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFFQSxnQkFBQTtFQUVBLG9CQUFBO0FBekVSO0FBMkVRO0VBRUksOEJBQUE7QUExRVoiLCJmaWxlIjoibm92by1sZW1icmV0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gR2VyYWwqL1xyXG4uY29udGVudFxyXG57XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gVG9wKi9cclxuLnRvcFxyXG57XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcblxyXG4gICAgaDNcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIE1pZGRsZSovXHJcbi5taWRcclxue1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG4gICAgLmJsb2NvXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgIH1cclxuXHJcbiAgICAuYmxvY286bnRoLW9mLXR5cGUoMSksIC5ibG9jbzpudGgtb2YtdHlwZSg0KVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTUlO1xyXG5cclxuICAgICAgICBpbnB1dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGFuLCBoM1xyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b25cclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4sIGgzXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBoM1xyXG4gICAge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcblxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ub1xyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0YXJlYVxyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuXHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbXBvcnRhbnRcclxuICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuXHJcbiAgICAgICAgc3BhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzdmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IC0zMiU7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZmlsbDogdmFyKC0tZGFyay1zcGFjZS1jYWRldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ub3JtYWxcclxuICAgIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBzcGFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogLTUxJTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgZmlsbDogdmFyKC0td2hpdGUpO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF2aXNvXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLy8jcmVnaW9uIFVtIGUgRG9pc1xyXG4jdW1cclxue1xyXG4gICAgbWluLWhlaWdodDogNzR2aDtcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNkb2lzXHJcbntcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5jaGVja1xyXG4gICAge1xyXG4gICAgICAgIHBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGFcclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jhc1xyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YXRlLWJsdWUpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMzBweCAwcHggMHB4IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICBmb250LWZhbWlseTogJ1NhaXJhJztcclxuXHJcbiAgICAgICAgcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyNlbmRyZWdpb25cclxuIl19 */");

/***/ }),

/***/ 46143:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R/novo-lembrete/novo-lembrete.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"card full flex\">\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n        <h3 class=\"line\">{{titulo}}</h3>\r\n      </div>\r\n      \r\n      <div class=\"mid full flex\">\r\n        <div id=\"um\" class=\"full flex\">\r\n          <span class=\"line leftA\">Nome do medicamento</span>\r\n          <input [(ngModel)]=\"nomeMedicamento\" type=\"text\" class=\"input\" maxlength=\"100\">\r\n  \r\n          <span class=\"line leftA\">Forma farmacêutica</span>\r\n          <select [(ngModel)]=\"formaFarma\" class=\"input\">\r\n            <option value=\"vazio\"></option>\r\n            <option *ngFor=\"let l of listaFarma\" [ngValue]=\"l.Codigo\">{{l.Nome}}</option>\r\n          </select> \r\n  \r\n          <span class=\"line leftA\">Dosagem</span>\r\n          <input [(ngModel)]=\"dosagem\" type=\"decimal\" maxlength=\"9\" class=\"input\">\r\n  \r\n          <h3 class=\"line centerA\">Observação</h3>\r\n          <textarea [(ngModel)]=\"descricao\" class=\"input\" maxlength=\"300\"></textarea>\r\n          <p id=\"avisoUm\" class=\"aviso invisivel\">{{txtAvisoUm}}</p>\r\n\r\n          <button (click)=\"proximo()\" class=\"important full flex\">\r\n            <span>Próximo</span>\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\r\n            </svg>\r\n          </button>\r\n          <button (click)=\"cancelar()\" class=\"normal\">Cancelar</button>\r\n        </div>\r\n  \r\n        <div id=\"dois\" class=\"full flex invisivel\">\r\n          <div class=\"bloco flex\">\r\n            <span class=\"line leftA\">Data Inicial</span>\r\n            <input type=\"date\" [(ngModel)]=\"dataInicial\" min=\"{{minimo}}\" max=\"{{maximo}}\" class=\"input\">\r\n          </div>\r\n\r\n           <div class=\"bloco flex\">\r\n            <span class=\"line leftA\">Quantidade de Dias</span>\r\n            <input id=\"qtDias\" [(ngModel)]=\"dias\" type=\"decimal\" maxlength=\"3\" class=\"input\">\r\n          </div>\r\n\r\n          <div class=\"check vertical flex\">\r\n            <input [(ngModel)]=\"check\" (change)=\"change()\" type=\"checkbox\"> <p>Sem data final</p>\r\n          </div>\r\n\r\n          <div class=\"bloco flex\">\r\n            <span class=\"line leftA\">Vezes ao dia</span>\r\n            <select [(ngModel)]=\"horas\" class=\"input\" (change)=\"horass()\">\r\n              <option value=\"vazio\"></option>\r\n              <option value=\"24\">Uma vez</option>\r\n              <option value=\"12\">Duas vezes</option>\r\n              <option value=\"8\">Três vezes</option>\r\n              <option value=\"6\">Quatro vezes</option>\r\n            </select> \r\n          </div>\r\n          \r\n          <div class=\"bloco flex\">\r\n            <span class=\"line leftA\">Horário Inicial</span>\r\n            <input [(ngModel)]=\"horario\" type=\"time\" class=\"input\" (change)=\"horass()\">\r\n          </div>\r\n\r\n          <div class=\"horas full flex\">\r\n            <p>{{previsao}}</p>\r\n          </div>\r\n  \r\n          <h3 class=\"line centerA no\">Estoque</h3>\r\n          <span class=\"line leftA\">Quantidade atual</span>\r\n          <input [(ngModel)]=\"quantidadeAtual\" type=\"decimal\" maxlength=\"9\" class=\"input\">\r\n\r\n          <span class=\"line leftA\">Quantidade mínima (notificação)</span>\r\n          <input [(ngModel)]=\"quantidadeMinima\" type=\"decimal\" maxlength=\"9\" class=\"input\">\r\n\r\n          <p id=\"avisoDois\" class=\"aviso invisivel\">{{txtAvisoDois}}</p>\r\n\r\n          <button (click)=\"criar()\" class=\"important\">{{txtBotao}}</button>\r\n\r\n          <button (click)=\"voltar()\" class=\"normal full flex\">\r\n            <span>Voltar</span>\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\r\n            </svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_novo-lembrete_novo-lembrete_module_ts.js.map