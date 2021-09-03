import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-digitar-responsavel',
  templateUrl: './digitar-responsavel.page.html',
  styleUrls: ['./digitar-responsavel.page.scss'],
})
export class DigitarResponsavelPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  registrar()
  {
    //Verificar se o e-mail do responsável existe

    this.navCtrl.navigateForward('D/tutorial')
  }

  voltar()
  {
    this.navCtrl.navigateForward('dependente');
  }

  ngOnInit() {
  }
}
