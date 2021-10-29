import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavegationService {

  constructor(public navCtrl: NavController) { }

  //#region Verificação
  verificar()
  {
    if(localStorage.getItem('locEmail') == '' || localStorage.getItem('locEmail') == null)
    {
      this.firstView();
    }
  }
  //#endregion

  //#region Geral
  firstView()
  {
    this.navCtrl.navigateForward('first-view');
  }

  entrar()
  {
    this.navCtrl.navigateForward('entrar');
  }

  cadastro()
  {
    this.navCtrl.navigateForward('cadastro');
  }

  dadosAdicionais()
  {
    this.navCtrl.navigateForward('dados-adicionais');
  }

  dependente()
  {
    this.navCtrl.navigateForward('dependente');
  }

  digitarResponsavel()
  {
    this.navCtrl.navigateForward('digitar-responsavel');
  }
  //#endregion

  //#region Responsável
  rTutorial()
  {
    this.navCtrl.navigateForward('R/tutorial');
  }
  
  rHome()
  {
    this.navCtrl.navigateForward('R/home');
  }
  //#endregion

  //#region Dependete
  dTutorial()
  {
    this.navCtrl.navigateForward('D/tutorial');
  }
  
  dHome()
  {
    this.navCtrl.navigateForward('D/home');
  }
  //#endregion
}
