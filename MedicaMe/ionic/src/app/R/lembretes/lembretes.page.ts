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
