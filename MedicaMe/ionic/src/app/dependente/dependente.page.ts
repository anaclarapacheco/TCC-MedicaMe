import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dependente',
  templateUrl: './dependente.page.html',
  styleUrls: ['./dependente.page.scss'],
})
export class DependentePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  nao()
  {
    this.navCtrl.navigateForward('R/tutorial');
  }

  sim()
  {
    this.navCtrl.navigateForward('digitar-responsavel');
  }

  dependente()
  {
    this.navCtrl.navigateForward('D/tutorial');
  }

  ngOnInit() {
  }
}