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
  //UM
  public nomeMedicamento: any;
  public formaFarma: any;
  public dosagem: any;
  public descricao: any;

  //Dois
  public dataInicial: any;
  public dataFinal: any;
  public maximo: any;
  public minimo: any;
  public dias: any;
  public horas: any;
  public quantidadeAtual: any;
  public quantidadeMinima: any;

  public nomeDependente: any;
  public email: any;

  public titulo: any;
  public txtAvisoUm: any

  public listaFarma: any = [];
  //#endregion 

  //#region Navegação
  proximo()
  {
    //Verificação dos valores
    document.getElementById('avisoUm').classList.add('invisivel');

    if(this.nomeMedicamento == '' || this.formaFarma == 'vazio' || this.dosagem == '' || this.nomeMedicamento == null || this.dosagem == null)
    { 
      this.txtAvisoUm = 'O preenchimento dos campos: Nome do medicamento, Forma farmacêutica e Dosagem, são obrigatórios!';
      document.getElementById('avisoUm').classList.remove('invisivel');
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
        }
        else
        {
          this.txtAvisoUm = 'Erro na hora de criar o lembrete!';
          document.getElementById('avisoUm').classList.remove('invisivel');
        }
      });
    }
  }

  voltar()
  {
    //Troca pro Um
    document.getElementById('dois').classList.add('invisivel');
    document.getElementById('um').classList.remove('invisivel');
    this.titulo = 'Informações do medicamento';
  }

  cancelar()
  {
    //Voltar
    localStorage.removeItem('agendamento');

    //Troca pro Um
    document.getElementById('dois').classList.add('invisivel');
    document.getElementById('um').classList.remove('invisivel');
    this.titulo = 'Informações do medicamento';

    //Volta
    this.nav.rLembretes();
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

    //Editar
    if(localStorage.getItem('agendamento') != null && localStorage.getItem('agendamento') != '')
    {
      let dados = 'phpEmail=' + this.email + '&phpCodigo=' + localStorage.getItem('agendamento');

      this.servidor.enviar('Responsavel/Novo Lembrete/editar.php', dados).subscribe( res => {
        if(res[0]['Erro'] == false)
        {
          this.nomeMedicamento = res[1]['Nome'];
          this.formaFarma = res[1]['FormaFarmaceutica'];
          this.dosagem = res[0]['Dosagem'];
          this.descricao = res[0]['Descricao'];
        }
      });
    }
  }
  //#endregion

  ngOnInit(){}
}
