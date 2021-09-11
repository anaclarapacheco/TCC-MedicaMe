import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-dependentes',
  templateUrl: './dependentes.page.html',
  styleUrls: ['./dependentes.page.scss'],
})
export class DependentesPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  //#region Abrir e Fechar o Menu
  open()
  {
    var menu = document.getElementById('menu');
    menu.classList.add('visivel');
    menu.classList.remove('invisivel');
  }

  close()
  {
    var menu = document.getElementById('menu');
    menu.classList.add('invisivel');
    menu.classList.remove('visivel');
  }
  //#endregion

  //#region SideMenu
  tutorial()
  {
    this.navCtrl.navigateForward('R/tutorial');
  }

  dadosAdicionais()
  {
    this.navCtrl.navigateForward('dados-adicionais');
  }

  adicionarResponsavel()
  {
    this.navCtrl.navigateForward('digitar-responsavel');
  }
  //#endregion

  //#region Tabs
  lembretes()
  {
    this.navCtrl.navigateForward('R/lembretes');
  }
  
  home()
  {
    this.navCtrl.navigateForward('R/home');
  }

  estoque()
  {
    this.navCtrl.navigateForward('R/estoque');
  }

  relatorio()
  {
    this.navCtrl.navigateForward('R/relatorio');
  }
  //#endregion

  ngOnInit() {
  }

}
