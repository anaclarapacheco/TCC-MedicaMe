import { Component, OnInit } from '@angular/core';
import { NavegationService } from '../services/navegation.service';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.page.html',
  styleUrls: ['./first-view.page.scss'],
})
export class FirstViewPage implements OnInit {

  constructor (public nav: NavegationService) { }

  //#region Navegação
  criarConta()
  {
    this.nav.cadastro();
  }

  entrar()
  {
    this.nav.entrar();
  }
  //#endregion

  ngOnInit(){
  }
}
