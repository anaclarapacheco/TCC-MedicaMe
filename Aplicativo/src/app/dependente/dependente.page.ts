import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';

@Component({
  selector: 'app-dependente',
  templateUrl: './dependente.page.html',
  styleUrls: ['./dependente.page.scss'],
})
export class DependentePage implements OnInit {

  //#region Constructor
  constructor(public nav: NavegationService)
  {
    this.nav.verificar();
  }
  //#endregion

  //#region Navegação
  nao()
  {
    localStorage.setItem('locNavRTutorial', 'rHome');
    this.nav.rTutorial();
  }

  sim()
  {
    localStorage.setItem('locNavDigitarResponsavel', 'dependente');
    this.nav.digitarResponsavel();
  }

  dependente()
  {
    localStorage.setItem('locNavDTutorial', 'dHome');
    this.nav.dTutorial();
  }
  //#endregion

  ngOnInit() {
  }
}
