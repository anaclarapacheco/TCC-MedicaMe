import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  //#region Constructor
  constructor(private nav: NavegationService, private servidor: ServidorService)
  {
    this.servidor.verificar();
  }
  //#endregion

  //#region Próximo item do carrossel
  proximo()
  {
    //
  }
  //#endregion

  //#region Navegação
  pular()
  {
    switch (localStorage.getItem('DTutorial')) {
      case 'dHome':
        this.nav.dHome();
        break;

      case 'dependente':
        this.nav.dependente();
        break
    }

    localStorage.removeItem('DTutorial');
  }
  //#endregion

  //#region OnInit
  ngOnInit()
  {
    this.servidor.verificar();
  }
  //#endregion
}
