import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-lembrete',
  templateUrl: './novo-lembrete.page.html',
  styleUrls: ['./novo-lembrete.page.scss'],
})
export class NovoLembretePage implements OnInit {

  titulo: any = '';

  constructor(public navCtrl: NavController)
  {
    this.titulo = 'Informações do medicamento';
  }

  //#region Navegação
  proximo()
  {
    var conteudo = document.getElementById('um');
    conteudo.classList.add('invisivel');

    this.titulo = 'Período';
    conteudo = document.getElementById('dois');
    conteudo.classList.remove('invisivel');
  }

  voltar()
  {
    var conteudo = document.getElementById('dois');
    conteudo.classList.add('invisivel');

    this.titulo = 'Informações do medicamento';
    conteudo = document.getElementById('um');
    conteudo.classList.remove('invisivel');
  }

  cancelar()
  {
    this.navCtrl.navigateForward('R/lembretes');
  }
  //#endregion

  ngOnInit() {
  }
}
