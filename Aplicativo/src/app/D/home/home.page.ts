import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  //#region Abrir e Fechar o Menu
  open()
  {
    var menu = document.getElementById('dHome');
    menu.classList.remove('invisivel');
  }

  close()
  {
    var menu = document.getElementById('dHome');
    menu.classList.add('invisivel');
  }
  //#endregion

  ngOnInit() {
  }
}
