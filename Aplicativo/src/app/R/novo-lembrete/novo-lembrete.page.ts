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
  public dias: any = '';
  public horas: any;
  public horario: any;
  public quantidadeAtual: any;
  public quantidadeMinima: any;

  //Extra
  public titulo: any;
  public previsao: any;

  public check: any;

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
      //Trocando pro 2
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
          this.horass();
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
  
  //#region Mudanças
  change()
  {
    if(this.check == true)
    {
      this.dias = '';
      document.getElementById('qtDias').setAttribute('disabled', 'true');
    }
    else
    {
      document.getElementById('qtDias').removeAttribute('disabled');
    }
  }
  //#endregion

  //#region Criar lembrete
  criar()
  {
    //Verificação dos valores
    document.getElementById('avisoDois').classList.add('invisivel');

    if(this.check == true)
    {
      if(this.dataInicial == '' || this.horas == 'vazio' || this.horario == '' || this.quantidadeAtual == '' || this.quantidadeMinima == '' || this.dataInicial == null || this.horario == null || this.quantidadeAtual == null || this.quantidadeMinima == null)
      { 
        this.txtAvisoDois = 'O preenchimento dos campos: Data inicial, Vezes ao dia, Horário inicial, Quantidade atual e Quantidade mínima, são obrigatórios!';
        document.getElementById('avisoDois').classList.remove('invisivel');
      }
      else if(parseInt(this.quantidadeAtual) <= parseInt(this.quantidadeMinima))
      {
        this.txtAvisoDois = 'A quantidade atual tem que ser maior que a quantidade mínima, digite novamente!';
        document.getElementById('avisoDois').classList.remove('invisivel');
      }
      else if(localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '')
      {
        //Enviando ao PHP
        let dados = 'phpNomeMedicamento=' + this.nomeMedicamento + '&phpFormaFarmaceutica=' + this.formaFarma + '&phpDescricao=' + this.descricao + '&phpDosagem=' + this.dosagem + '&phpDataInicial=' + this.dataInicial.substring(0, 10) + ' ' + this.horario + ':00' + '&phpDias=null' + '&phpHoras=' + this.horas + '&phpQuantidadeAtual=' + this.quantidadeAtual.replace(',', '.') + '&phpQuantidadeMinima=' + this.quantidadeMinima.replace(',', '.') + '&phpEmail=' + this.email + '&phpCodigo=' + localStorage.getItem('agendamento');
        
        this.servidor.enviar('Responsavel/Novo Lembrete/atualizar.php', dados).subscribe(res => {
          if(res[0]['Erro'] == false)
          {
            this.cancelar();
          }
          else
          {
            this.txtAvisoDois = 'Erro na hora de atualizar o lembrete!';
            document.getElementById('avisoDois').classList.remove('invisivel');
          }
        });
      }
      else
      {
        //Enviando ao PHP
        let dados = 'phpDataInicial=' + this.dataInicial.substring(0, 10) + ' ' + this.horario + ':00' + '&phpDias=null' + '&phpHoras=' + this.horas + '&phpQuantidadeAtual=' + this.quantidadeAtual.replace(',', '.') + '&phpQuantidadeMinima=' + this.quantidadeMinima.replace(',', '.') + '&phpEmail=' + this.email;

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
    }
    else
    {
      if(this.dataInicial == '' || this.dias == '' || this.horas == 'vazio' || this.horario == '' || this.quantidadeAtual == '' || this.quantidadeMinima == '' || this.dataInicial == null || this.dias == null || this.horario == null || this.quantidadeAtual == null || this.quantidadeMinima == null)
      { 
        this.txtAvisoDois = 'O preenchimento dos campos: Data inicial, Quantidade de dias, Vezes ao dia, Horário inicial, Quantidade atual e Quantidade mínima, são obrigatórios!';
        document.getElementById('avisoDois').classList.remove('invisivel');
      }
      else if(parseInt(this.quantidadeAtual) <= parseInt(this.quantidadeMinima))
      {
        this.txtAvisoDois = 'A quantidade atual tem que ser maior que a quantidade mínima, digite novamente!';
        document.getElementById('avisoDois').classList.remove('invisivel');
      }
      else if(localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '')
      {
        //Enviando ao PHP
        let dados = 'phpNomeMedicamento=' + this.nomeMedicamento + '&phpFormaFarmaceutica=' + this.formaFarma + '&phpDescricao=' + this.descricao + '&phpDosagem=' + this.dosagem + '&phpDataInicial=' + this.dataInicial.substring(0, 10) + ' ' + this.horario + ':00' + '&phpDias=' + this.dias + '&phpHoras=' + this.horas + '&phpQuantidadeAtual=' + this.quantidadeAtual.replace(',', '.') + '&phpQuantidadeMinima=' + this.quantidadeMinima.replace(',', '.') + '&phpEmail=' + this.email + '&phpCodigo=' + localStorage.getItem('agendamento');
        
        this.servidor.enviar('Responsavel/Novo Lembrete/atualizar.php', dados).subscribe(res => {
          if(res[0]['Erro'] == false)
          {
            this.cancelar();
          }
          else
          {
            this.txtAvisoDois = 'Erro na hora de atualizar o lembrete!';
            document.getElementById('avisoDois').classList.remove('invisivel');
          }
        });
      }
      else
      {
        //Enviando ao PHP
        let dados = 'phpDataInicial=' + this.dataInicial.substring(0, 10) + ' ' + this.horario + ':00' + '&phpDias=' + this.dias + '&phpHoras=' + this.horas + '&phpQuantidadeAtual=' + this.quantidadeAtual.replace(',', '.') + '&phpQuantidadeMinima=' + this.quantidadeMinima.replace(',', '.') + '&phpEmail=' + this.email;

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
    }
  }
  //#endregion
  
  //#region Horas
  horass()
  {
    if(this.horario != null && this.horas != 'vazio')
    {
      var data = new Date();
      data.setHours(this.horario.substring(0, 2));
      data.setMinutes(this.horario.substring(3, 5));
    
      this.previsao = this.horario;

      for (let i = 1; i < (24 / this.horas); i++)
      {
        data.setHours(data.getHours() + parseInt(this.horas));
        this.previsao += ' - ' + String(data.getHours()).padStart(2, '0') + ':' + String(data.getMinutes()).padEnd(2, '0');
      }  
    }
    else
    {
      this.previsao = 'Horários em que o alareme será disparado';
    }
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
        this.descricao = res[0]['Descricao'];
        this.dataInicial = String(res[0]['DataInicial']).substring(0, 10);
        this.horario = String(res[0]['DataInicial']).substring(11, 16);
        this.horas = res[0]['Horas'];
        this.horass();

        if(res[0]['Dosagem'] - Math.floor(res[0]['Dosagem']) == 0)
        {
          this.dosagem = Math.trunc(res[0]['Dosagem']);
        }
        else
        {
          this.dosagem = res[0]['Dosagem'];
        }

        if(res[0]['QuantidadeAtual'] - Math.floor(res[0]['QuantidadeAtual']) == 0)
        {
          this.quantidadeAtual = Math.trunc(res[0]['QuantidadeAtual']);
        }
        else
        {
          this.quantidadeAtual = res[0]['QuantidadeAtual'];
        }

        if(res[0]['QuantidadeMinima'] - Math.floor(res[0]['QuantidadeMinima']) == 0)
        {
          this.quantidadeMinima = Math.trunc(res[0]['QuantidadeMinima']);
        }
        else
        {
          this.quantidadeMinima = res[0]['QuantidadeMinima'];
        }

        if(res[0]['Dias'] == null)
        {
          this.check = true;
          this.change();
        }
        else
        {
          this.dias = res[0]['Dias'];
        }     
      });
    }
  }
  //#endregion

  ngOnInit(){}
}
