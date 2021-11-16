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

  constructor(private nav: NavegationService, private servidor: ServidorService){}

  //#region IonSlides
  @ViewChild(IonSlides) slides: IonSlides;
  public sliderOptions = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };
  //#endregion

  //#region Próximo item do carrossel
  proximo()
  {
    const proximo = this.slides.slideNext();

    if(this.fim)
    {
      this.pular();
    }
  }
  //#endregion

  //#region Verifica se é o último slide
  fim: boolean;
  slideChanged()
  {
    var verificarFim = this.slides.isEnd();

    verificarFim.then(data => {
      if(data)
      {
        this.fim = true;
      }
    });
  }
  //#endregion

  //#region Navegação
  pular()
  {
    switch (localStorage.getItem('RTutorial')) {
      case 'rHome':
        this.nav.rHome();
        break;

      case 'rLembretes':
        this.nav.rLembretes();
        break;

      case 'rEstoque':
        this.nav.rEstoque();
        break;
      
      case 'rDependentes':
        this.nav.rDependentes();
        break;

      case 'rRelatorio':
        this.nav.rRelatorio();
        break;
      
      default:
        this.nav.rHome();
        break;
    }

    localStorage.removeItem('RTutorial');
  }
  //#endregion

  //#region OnInit
  ngOnInit()
  {
    //Verificar Login
    this.servidor.verificar();
  }
  //#endregion
}
