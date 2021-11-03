import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-novo-lembrete',
  templateUrl: './novo-lembrete.page.html',
  styleUrls: ['./novo-lembrete.page.scss'],
})
export class NovoLembretePage implements OnInit {

  titulo: any = '';

  constructor(private nav: NavegationService, private servidor: ServidorService)
  {
    this.titulo = 'Informações do medicamento';
  }

  //#region Valores
  public nomeMedicamento: any;
  public formaFarma: any;
  public dosagem: any;
  public descricao: any;

  public nomeDependente: any;
  public email: any;
  //#endregion  

  //#region Navegação
  proximo()
  {
    //Trocar para o dois
    var conteudo = document.getElementById('um');
    conteudo.classList.add('invisivel');

    this.titulo = 'Período';
    conteudo = document.getElementById('dois');
    conteudo.classList.remove('invisivel');
  }

  voltar()
  {
    //Trocar para o um
    var conteudo = document.getElementById('dois');
    conteudo.classList.add('invisivel');

    this.titulo = 'Informações do medicamento';
    conteudo = document.getElementById('um');
    conteudo.classList.remove('invisivel');
  }

  cancelar()
  {
    //Voltar
    this.nav.rLembretes;
  }
  //#endregion

  //#region OnInit
  ngOnInit()
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
  }
  //#endregion
}
