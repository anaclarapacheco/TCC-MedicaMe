import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavegationService {

  constructor(public navCtrl: NavController) { }

  /*#region Verificação*/
  varificar()
  {
    if(localStorage.getItem('locEmail') == '' || localStorage.getItem('locEmail') == null)
    {
      this.firstView();
    }
  }
  /*#endregion*/

  /*#region Geral*/
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
  /*#endregion*/

  /*#region Responsável*/
  rHome()
  {
    this.navCtrl.navigateForward('R/home');
  }
  /*#endregion*/

  /*#region Dependete*/
  dHome()
  {
    this.navCtrl.navigateForward('D/home');
  }
  /*#endregion*/
}
