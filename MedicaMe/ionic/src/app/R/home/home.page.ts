import { FormatWidth, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],


})
export class HomePage implements OnInit {

  data: any = "";

  constructor(public navCtrl: NavController) {
    let nowData = new Date();

    this.data = String(nowData.getDate()).padStart(2, '0') + '/' + String(nowData.getMonth() + 1).padStart(2, '0')  + '/' + nowData.getFullYear();
   }

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
  dependentes()
  {
    this.navCtrl.navigateForward('R/dependentes');
  }
  
  lembretes()
  {
    this.navCtrl.navigateForward('R/lembretes');
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
