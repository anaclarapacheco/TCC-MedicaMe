import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-novo-lembrete',
  templateUrl: './novo-lembrete.page.html',
  styleUrls: ['./novo-lembrete.page.scss'],
})
export class NovoLembretePage implements OnInit {

  //#region Constructor
  constructor(private nav: NavegationService, private servidor: ServidorService)
  {
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

  //#region Valores
  //Padrão
  public nomeDependente: any;
  public email: any;

  //UM
  public nomeMedicamento: any;
  public formaFarma: any;
  public dosagem: any;
  public descricao: any = '';

  //Dois
  public dataInicial: any;
  public dataFinal: any;
  public dias: any;
  public horas: any;
  public quantidadeAtual: any;
  public quantidadeMinima: any;

  //Extra
  public titulo: any;

  public maximo: any;
  public minimo: any;

  public txtAvisoUm: any;
  public txtAvisoDois: any;
  public txtBotao: any;

  public listaFarma: any = [];
  //#endregion 

  //#region Próximo
  proximo()
  {
    //Verificação dos valores
    document.getElementById('avisoUm').classList.add('invisivel');

    if(this.nomeMedicamento == '' || this.formaFarma == 'vazio' || this.dosagem == '' || this.nomeMedicamento == null || this.dosagem == null)
    { 
      this.txtAvisoUm = 'O preenchimento dos campos: Nome do medicamento, Forma farmacêutica e Dosagem, são obrigatórios!';
      document.getElementById('avisoUm').classList.remove('invisivel');
    }
    else if(localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '')
    {
      //Trocnado pro 2
      document.getElementById('um').classList.add('invisivel');
      document.getElementById('dois').classList.remove('invisivel');
      this.titulo = 'Período';
      this.txtBotao = 'Atualizar Lembrete';
    }
    else
    {
      //Enviando ao PHP
      let dados = 'phpNomeMedicamento=' + this.nomeMedicamento + '&phpFormaFarmaceutica=' + this.formaFarma + '&phpDescricao=' + this.descricao + '&phpDosagem=' + this.dosagem + '&phpEmail=' + this.email;

      this.servidor.enviar('Responsavel/Novo Lembrete/main.php', dados).subscribe(res => {
        if(res[0]['Erro'] == false)
        {
          //Troca pro Dois
          document.getElementById('um').classList.add('invisivel');
          document.getElementById('dois').classList.remove('invisivel');
          this.titulo = 'Período';
          this.txtBotao = 'Criar Lembrete';
        }
        else
        {
          this.txtAvisoUm = 'Erro na hora de criar o lembrete!';
          document.getElementById('avisoUm').classList.remove('invisivel');
        }
      });
    }
  }
  //#endregion
  
  //#region Criar lembrete
  criar()
  {
    //Verificação dos valores
    document.getElementById('avisoDois').classList.add('invisivel');

    if(this.dataFinal == null && this.dias != null)
    {
      this.dataFinal = 'null';
    }
    else if (this.dataFinal == null && this.dias == null)
    {
      this.dataFinal = 'null';
      this.dias = 'null';
    }
    else if (this.dataFinal != null && this.dias == null)
    {
      this.dataFinal = this.dataFinal + ' ' + this.horas + ':00';
      this.dias = 'null';
    }
    else
    {
      this.dataFinal = this.dataFinal + ' ' + this.horas + ':00';
    }

    if(this.dataInicial == '' || this.dataFinal == '' || this.dias == '' || this.horas == '' || this.quantidadeAtual == '' || this.quantidadeMinima == '' || this.dataInicial == null || this.dataFinal == null || this.dias == null || this.horas == null || this.quantidadeAtual == null || this.quantidadeMinima == null)
    { 
      this.txtAvisoDois = 'O preenchimento dos campos: Data Inicial, Horas, Quantidade Atual e Quantidade mínima, são obrigatórios!';
      document.getElementById('avisoDois').classList.remove('invisivel');
    }
    else if(localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '')
    {
      //Enviando ao PHP
      let dados = 'phpNomeMedicamento=' + this.nomeMedicamento + '&phpFormaFarmaceutica=' + this.formaFarma + '&phpDescricao=' + this.descricao + '&phpDosagem=' + this.dosagem + '&phpDataInicial=' + this.dataInicial.substring(0, 10) + ' ' + this.horas + ':00' + '&phpDataFinal=' + this.dataFinal.substring(0, 10) + '&phpDias=' + this.dias + '&phpHoras=' + 24 + '&phpQuantidadeAtual=' + this.quantidadeAtual + '&phpQuantidadeMinima=' + this.quantidadeMinima + '&phpEmail=' + this.email + '&phpCodigo=' + localStorage.getItem('agendamento');
      
      this.servidor.enviar('Responsavel/Novo Lembrete/atualizar.php', dados).subscribe(res => {
        if(res[0]['Erro'] == false)
        {
          this.cancelar();
        }
        else
        {
          this.txtAvisoDois = 'Erro na hora de criar o lembrete!';
          document.getElementById('avisoDois').classList.remove('invisivel');
        }
      });
    }
    else
    {
      //Enviando ao PHP
      let dados = 'phpDataInicial=' + this.dataInicial.substring(0, 10) + ' ' + this.horas + ':00' + '&phpDataFinal=' + this.dataFinal.substring(0, 10) + '&phpDias=' + this.dias + '&phpHoras=' + 24 + '&phpQuantidadeAtual=' + this.quantidadeAtual + '&phpQuantidadeMinima=' + this.quantidadeMinima + '&phpEmail=' + this.email;

      this.servidor.enviar('Responsavel/Novo Lembrete/main pt2.php', dados).subscribe(res => {
        if(res[0]['Erro'] == false)
        {
          this.cancelar();
        }
        else
        {
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
  voltar()
  {
    //Troca pro Um
    document.getElementById('dois').classList.add('invisivel');
    document.getElementById('um').classList.remove('invisivel');
    this.titulo = 'Informações do medicamento';
  }

  cancelar()
  {
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
  ionViewWillEnter()
  {
    //Verificar Login
    this.servidor.verificar();

    //Dependente
    if(localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '')
    {
      this.nomeDependente = localStorage.getItem('nomeDependente');
      this.email = localStorage.getItem('emailDependente');
    }
    else
    {
      this.email = localStorage.getItem('email');
    }

    //Puxar para editar
    if(localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '')
    {
      let dados = 'phpEmail=' + this.email + '&phpCodigo=' + localStorage.getItem('agendamento');

      this.servidor.enviar('Responsavel/Novo Lembrete/editar.php', dados).subscribe( res => {
        //Botando na tela
        this.nomeMedicamento = res[0]['Nome'];
        this.formaFarma = res[0]['FormaFarmaceutica'];
        this.dosagem = res[0]['Dosagem'];
        this.descricao = res[0]['Descricao'];
        this.dataInicial = String(res[0]['DataInicial']).substring(0, 10);
        this.dataFinal = String(res[0]['DataFinal']).substring(0, 10);
        this.dias = res[0]['Dias'];
        this.horas = String(res[0]['DataInicial']).substring(11, 16);
        this.quantidadeAtual = res[0]['QuantidadeAtual'];
        this.quantidadeMinima = res[0]['QuantidadeMinima'];
      });
    }
  }
  //#endregion

  ngOnInit(){}
}
