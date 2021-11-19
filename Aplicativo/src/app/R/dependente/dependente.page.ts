import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-dependente',
  templateUrl: './dependente.page.html',
  styleUrls: ['./dependente.page.scss'],
})
export class DependentePage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService) { }
  
  //#region Valores
  public nomeDependente: any;
  public email: any;
  //#endregion
  
  //#region Navegação
  voltar()
  {
    localStorage.removeItem('nomeDependente');
    localStorage.removeItem('emailDependente');

    this.nav.rDependentes();
  }

  lembretes()
  {
    this.nav.rLembretes();
  }

  estoque()
  {
    this.nav.rEstoque();
  }

  adicionarSintomas()
  {
    localStorage.setItem('sintomas', 'rDependente');
    this.nav.adicionarSintomas();
  }

  relatorio()
  {
    this.nav.rRelatorio();
  }
  //#endregion

  //#region ViewWillEnter
  ionViewWillEnter()
  {
    //Verificar Login
    this.servidor.verificar();

    //Dependente
    this.nomeDependente = localStorage.getItem('nomeDependente');
    this.email = localStorage.getItem('emailDependente');
  }
  //#endregion

  ngOnInit(){}
}
