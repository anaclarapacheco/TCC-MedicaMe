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
    this.titulo = 'Informações do medicamento';
  }
  //#endregion

  //#region Valores
  public nomeMedicamento: any;
  public formaFarma: any;
  public dosagem: any;
  public descricao: any;

  public nomeDependente: any;
  public email: any;

  titulo: any;
  //#endregion  

  //#region Navegação
  proximo()
  {
    document.getElementById('um').classList.add('invisivel');
    document.getElementById('dois').classList.remove('invisivel');
    this.titulo = 'Período';
  }

  voltar()
  {
    document.getElementById('dois').classList.add('invisivel');
    document.getElementById('um').classList.remove('invisivel');
    this.titulo = 'Informações do medicamento';
  }

  cancelar()
  {
    //Voltar
    localStorage.removeItem('agendamento');
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
      this.nomeMedicamento = '';
      this.formaFarma = '';
      this.dosagem = '';
      this.descricao = '';
    }
  }
  //#endregion

  ngOnInit(){}
}
