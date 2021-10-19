import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavegationService {

  constructor(public navCtrl: NavController) { }

  /*#region Verificação*/
  login()
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
  /*#endregion*/

  /*#region Responsável*/
  rHome(login: any)
  {
    localStorage.setItem('locEmail', login);
    this.navCtrl.navigateForward('R/home');
  }
  /*#endregion*/

  /*#region Dependete*/
  dHome(login: any)
  {
    localStorage.setItem('locEmail', login);
    this.navCtrl.navigateForward('D/home');
  }
  /*#endregion*/
}
