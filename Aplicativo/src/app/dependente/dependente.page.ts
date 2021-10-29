import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-dependente',
  templateUrl: './dependente.page.html',
  styleUrls: ['./dependente.page.scss'],
})
export class DependentePage implements OnInit {

  //#region Constructor
  constructor(private nav: NavegationService, private servidor: ServidorService)
  {
    //Verificar Login
    this.servidor.verificar();
  }
  //#endregion

  //#region Navegação
  nao()
  {
    localStorage.setItem('RTutorial', 'rHome');
    this.nav.rTutorial();
  }

  sim()
  {
    localStorage.setItem('digitarResponsavel', 'dependente');
    this.nav.digitarResponsavel();
  }

  dependente()
  {
    localStorage.setItem('DTutorial', 'dependente');
    this.nav.dTutorial();
  }
  //#endregion

  //#region Oninit
  ngOnInit()
  {
    this.servidor.verificar();
  }
  //#endregion
}
