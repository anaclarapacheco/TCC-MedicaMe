import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService){}

  //#region Próximo item do carrossel
  proximo()
  {
    //
  }
  //#endregion

  //#region Navegação
  pular()
  {
    switch (localStorage.getItem('RTutorial')) {
      case 'rHome':
        this.nav.rHome();
        break;

      case 'rLembretes':
          this.nav.rLembretes();
          break;
    }

    localStorage.removeItem('RTutorial');
  }
  //#endregion

  //#region OnInit
  ngOnInit()
  {
    //Verificar Login
    this.servidor.verificar();
  }
  //#endregion
}
