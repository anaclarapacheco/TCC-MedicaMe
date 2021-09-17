import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.page.html',
  styleUrls: ['./lembretes.page.scss'],
})
export class LembretesPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  //#region Abrir e Fechar o Menu
  open()
  {
    var menu = document.getElementById('mLembretes');
    menu.classList.remove('invisivel');
  }

  close()
  {
    var menu = document.getElementById('mLembretes');
    menu.classList.add('invisivel');
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

  sair()
  {
    this.navCtrl.navigateForward('first-view');
  }
  //#endregion

  //#region Tabs
  dependentes()
  {
    this.navCtrl.navigateForward('R/dependentes');
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
