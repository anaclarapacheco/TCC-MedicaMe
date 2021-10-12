import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  //#region Abrir e Fechar o Menu
  open()
  {
    var menu = document.getElementById('mRelatorio');
    menu.classList.remove('invisivel');
  }

  close()
  {
    var menu = document.getElementById('mRelatorio');
    menu.classList.add('invisivel');
  }
  //#endregion

  //#region Navegação
  historico()
  {
    this.navCtrl.navigateBack('R/historico')
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

  lembretes()
  {
    this.navCtrl.navigateForward('R/lembretes');
  }
  //#endregion

  ngOnInit() {
  }
}
