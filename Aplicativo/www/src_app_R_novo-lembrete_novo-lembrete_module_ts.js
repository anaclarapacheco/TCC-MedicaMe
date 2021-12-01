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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Geral*/\n.content {\n  overflow: hidden;\n}\n/*#endregion*/\n/*#region Top*/\n.top {\n  width: 80vw;\n  overflow: hidden;\n  border-bottom-color: var(--white);\n  border-bottom-width: 3px;\n  border-bottom-style: solid;\n}\n.top h3 {\n  color: var(--white);\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.top img {\n  width: 80%;\n}\n/*#endregion*/\n/*#region Middle*/\n.mid {\n  width: 80vw;\n  padding-bottom: 10px;\n  overflow: scroll;\n}\n.mid .bloco {\n  width: 45%;\n}\n.mid .bloco:nth-of-type(1), .mid .bloco:nth-of-type(4) {\n  margin-right: 10%;\n}\n.mid .check {\n  width: 45%;\n  margin-top: 10px;\n  margin-left: 55%;\n}\n.mid .check input {\n  width: 15px;\n  height: 15px;\n}\n.mid .check p {\n  margin-left: 10px;\n}\n.mid span, .mid h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.mid button {\n  margin-top: 20px;\n}\n.mid span, .mid h3 {\n  color: var(--white);\n}\n.mid h3 {\n  border-bottom-color: var(--white);\n  border-bottom-width: 3px;\n  border-bottom-style: solid;\n  line-height: 40px;\n  margin-bottom: 20px;\n}\n.mid .no {\n  margin-bottom: 0px;\n}\n.mid textarea {\n  height: 80px;\n  resize: none;\n}\n.mid .important {\n  position: inherit;\n}\n.mid .important span {\n  position: relative;\n  left: 13px;\n}\n.mid .important svg {\n  height: 20px;\n  position: relative;\n  right: -32%;\n  border-radius: 10px;\n  fill: var(--dark-space-cadet);\n}\n.mid .normal {\n  box-sizing: border-box;\n}\n.mid .normal span {\n  position: relative;\n  left: 15px;\n}\n.mid .normal svg {\n  height: 20px;\n  position: relative;\n  left: -51%;\n  border-radius: 10px;\n  fill: var(--white);\n  transform: rotate(180deg);\n}\n.mid .aviso {\n  margin-top: 20px;\n}\n/*#endregion*/\n#um {\n  min-height: 74vh;\n  padding-bottom: 5px;\n  overflow: hidden;\n}\n#dois {\n  min-height: 80vh;\n  padding-bottom: 5px;\n  overflow: hidden;\n}\n#dois .check p {\n  color: var(--white) !important;\n}\n#dois .data {\n  padding-left: 0px !important;\n}\n#dois .horas {\n  background-color: var(--state-blue);\n  width: 100%;\n  min-height: 20px;\n  margin: 30px 0px 0px 0px;\n  padding: 10px;\n  border-radius: 10px;\n  overflow: hidden;\n  font-family: \"Saira\";\n}\n#dois .horas p {\n  color: var(--white) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdm8tbGVtYnJldGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFFSSxnQkFBQTtBQUFKO0FBRUEsYUFBQTtBQUVBLGNBQUE7QUFDQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBQUZKO0FBSUk7RUFFSSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU9JO0VBRUksVUFBQTtBQU5SO0FBU0EsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVJKO0FBVUk7RUFFSSxVQUFBO0FBVFI7QUFZSTtFQUVJLGlCQUFBO0FBWFI7QUFjSTtFQUVJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBYlI7QUFlUTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBZFo7QUFpQlE7RUFFSSxpQkFBQTtBQWhCWjtBQW9CSTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7QUFuQlI7QUFzQkk7RUFFSSxnQkFBQTtBQXJCUjtBQXdCSTtFQUVJLG1CQUFBO0FBdkJSO0FBMEJJO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBRUEsaUJBQUE7RUFFQSxtQkFBQTtBQTNCUjtBQThCSTtFQUVJLGtCQUFBO0FBN0JSO0FBZ0NJO0VBRUksWUFBQTtFQUVBLFlBQUE7QUFoQ1I7QUFtQ0k7RUFFSSxpQkFBQTtBQWxDUjtBQW9DUTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtBQW5DWjtBQXNDUTtFQUVJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUVBLDZCQUFBO0FBeENaO0FBNENJO0VBRUksc0JBQUE7QUEzQ1I7QUE2Q1E7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUE1Q1o7QUErQ1E7RUFFSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBRUEsbUJBQUE7RUFFQSxrQkFBQTtFQUVBLHlCQUFBO0FBbERaO0FBc0RJO0VBRUksZ0JBQUE7QUFyRFI7QUF3REEsYUFBQTtBQUdBO0VBRUksZ0JBQUE7RUFFQSxtQkFBQTtFQUVBLGdCQUFBO0FBMURKO0FBNkRBO0VBRUksZ0JBQUE7RUFFQSxtQkFBQTtFQUVBLGdCQUFBO0FBN0RKO0FBaUVRO0VBRUksOEJBQUE7QUFoRVo7QUFvRUk7RUFFSSw0QkFBQTtBQW5FUjtBQXNFSTtFQUVJLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsd0JBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFFQSxnQkFBQTtFQUVBLG9CQUFBO0FBekVSO0FBMkVRO0VBRUksOEJBQUE7QUExRVoiLCJmaWxlIjoibm92by1sZW1icmV0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gR2VyYWwqL1xuLmNvbnRlbnRcbntcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLyojZW5kcmVnaW9uKi9cblxuLyojcmVnaW9uIFRvcCovXG4udG9wXG57XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cbiAgICBoM1xuICAgIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcblxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIGltZ1xuICAgIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG59XG4vKiNlbmRyZWdpb24qL1xuXG4vKiNyZWdpb24gTWlkZGxlKi9cbi5taWRcbntcbiAgICB3aWR0aDogODB2dztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgLmJsb2NvXG4gICAge1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgIH1cblxuICAgIC5ibG9jbzpudGgtb2YtdHlwZSgxKSwgLmJsb2NvOm50aC1vZi10eXBlKDQpXG4gICAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICB9XG5cbiAgICAuY2hlY2tcbiAgICB7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1NSU7XG5cbiAgICAgICAgaW5wdXRcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3BhbiwgaDNcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgYnV0dG9uXG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIHNwYW4sIGgzXG4gICAge1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIH1cblxuICAgIGgzXG4gICAge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAubm9cbiAgICB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG5cbiAgICB0ZXh0YXJlYVxuICAgIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5cbiAgICAuaW1wb3J0YW50XG4gICAge1xuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcblxuICAgICAgICBzcGFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHN2Z1xuICAgICAgICB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAtMzIlO1xuXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaWxsOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ub3JtYWxcbiAgICB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgc3BhblxuICAgICAgICB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcblxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogLTUxJTtcblxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLXdoaXRlKTtcblxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hdmlzb1xuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG59XG4vKiNlbmRyZWdpb24qL1xuXG4vLyNyZWdpb24gVW0gZSBEb2lzXG4jdW1cbntcbiAgICBtaW4taGVpZ2h0OiA3NHZoO1xuXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNkb2lzXG57XG4gICAgbWluLWhlaWdodDogODB2aDtcblxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLmNoZWNrXG4gICAge1xuICAgICAgICBwXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kYXRhXG4gICAge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5ob3Jhc1xuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhdGUtYmx1ZSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuXG4gICAgICAgIG1hcmdpbjogMzBweCAwcHggMHB4IDBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgZm9udC1mYW1pbHk6ICdTYWlyYSc7XG5cbiAgICAgICAgcFxuICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyNlbmRyZWdpb25cbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"card full flex\">\n    <div class=\"content\">\n      <div class=\"top full flex\">\n        <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo: MedicaMe\">\n        <h3 class=\"line\">{{titulo}}</h3>\n      </div>\n      \n      <div class=\"mid full flex\">\n        <div id=\"um\" class=\"full flex\">\n          <span class=\"line leftA\">Nome do medicamento</span>\n          <input [(ngModel)]=\"nomeMedicamento\" type=\"text\" class=\"input\" maxlength=\"100\">\n  \n          <span class=\"line leftA\">Forma farmacêutica</span>\n          <select [(ngModel)]=\"formaFarma\" class=\"input\">\n            <option value=\"vazio\"></option>\n            <option *ngFor=\"let l of listaFarma\" [ngValue]=\"l.Codigo\">{{l.Nome}}</option>\n          </select> \n  \n          <span class=\"line leftA\">Dosagem</span>\n          <input [(ngModel)]=\"dosagem\" type=\"decimal\" maxlength=\"9\" class=\"input\">\n  \n          <h3 class=\"line centerA\">Observação</h3>\n          <textarea [(ngModel)]=\"descricao\" class=\"input\" maxlength=\"300\"></textarea>\n          <p id=\"avisoUm\" class=\"aviso invisivel\">{{txtAvisoUm}}</p>\n\n          <button (click)=\"proximo()\" class=\"important full flex\">\n            <span>Próximo</span>\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\n            </svg>\n          </button>\n          <button (click)=\"cancelar()\" class=\"normal\">Cancelar</button>\n        </div>\n  \n        <div id=\"dois\" class=\"full flex invisivel\">\n          <div class=\"bloco flex\">\n            <span class=\"line leftA\">Data Inicial</span>\n            <input type=\"date\" [(ngModel)]=\"dataInicial\" min=\"{{minimo}}\" max=\"{{maximo}}\" class=\"input\">\n          </div>\n\n           <div class=\"bloco flex\">\n            <span class=\"line leftA\">Quantidade de Dias</span>\n            <input id=\"qtDias\" [(ngModel)]=\"dias\" type=\"decimal\" maxlength=\"3\" class=\"input\">\n          </div>\n\n          <div class=\"check vertical flex\">\n            <input [(ngModel)]=\"check\" (change)=\"change()\" type=\"checkbox\"> <p>Sem data final</p>\n          </div>\n\n          <div class=\"bloco flex\">\n            <span class=\"line leftA\">Vezes ao dia</span>\n            <select [(ngModel)]=\"horas\" class=\"input\" (change)=\"horass()\">\n              <option value=\"vazio\"></option>\n              <option value=\"24\">Uma vez</option>\n              <option value=\"12\">Duas vezes</option>\n              <option value=\"8\">Três vezes</option>\n              <option value=\"6\">Quatro vezes</option>\n            </select> \n          </div>\n          \n          <div class=\"bloco flex\">\n            <span class=\"line leftA\">Horário Inicial</span>\n            <input [(ngModel)]=\"horario\" type=\"time\" class=\"input\" (change)=\"horass()\">\n          </div>\n\n          <div class=\"horas full flex\">\n            <p>{{previsao}}</p>\n          </div>\n  \n          <h3 class=\"line centerA no\">Estoque</h3>\n          <span class=\"line leftA\">Quantidade atual</span>\n          <input [(ngModel)]=\"quantidadeAtual\" type=\"decimal\" maxlength=\"9\" class=\"input\">\n\n          <span class=\"line leftA\">Quantidade mínima (notificação)</span>\n          <input [(ngModel)]=\"quantidadeMinima\" type=\"decimal\" maxlength=\"9\" class=\"input\">\n\n          <p id=\"avisoDois\" class=\"aviso invisivel\">{{txtAvisoDois}}</p>\n\n          <button (click)=\"criar()\" class=\"important\">{{txtBotao}}</button>\n\n          <button (click)=\"voltar()\" class=\"normal full flex\">\n            <span>Voltar</span>\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_R_novo-lembrete_novo-lembrete_module_ts.js.map