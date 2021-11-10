import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';
import { IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  //#region Constructor
  constructor(private nav: NavegationService, private servidor: ServidorService)
  {
    this.servidor.verificar();
  }
  //#endregion

  @ViewChild(IonSlides) slides: IonSlides;
  public sliderOptions = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };
  
  //#region Próximo item do carrossel
  proximo()
  {
    this.slideChanged();
    const proximo = this.slides.slideNext();
  }
  //#endregion

  //#region Verifica se é o último slide
  public fim = false;
  slideChanged(){
    if (this.fim){
      this.pular();
    }

    var verificarFim = this.slides.isEnd();
    verificarFim.then(data => {
      console.log(data);
      if(data){
        this.fim = true;
      }
    });
  }
  //#endregion

  //#region Navegação
  pular()
  {
    switch (localStorage.getItem('DTutorial')) {
      case 'dHome':
        this.nav.dHome();
        break;

      case 'dependente':
        this.nav.dependente();
        break
    }

    localStorage.removeItem('DTutorial');
  }
  //#endregion

  //#region OnInit
  ngOnInit()
  {
    this.servidor.verificar();
  }
  //#endregion
}
