import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService) { }

  //#region Valores
  public email: any;
  public nomeDependente: any;

  public lista: any;
  //#endregion
  
  //#region Carregar
  carregar()
  {
    let dados = 'phpEmail=' + this.email;

    this.servidor.enviar('Responsavel/Relatorio/historico.php', dados).subscribe(res =>{
      if(res[0]['Erro'] != true)
      {
        this.lista = res;
        let letraAtual = '';
        let i = 0;

        this.lista.forEach(l => {
          if(i > 0)
          {
            if(l['Letra'] == letraAtual)
            {
              l['Letra'] = null;
            }
          }
          else
          {
            letraAtual = l['Letra'];
          }

          i++
        });

        console.log(this.lista);
      }
    })
  }
  //#endregion

  //#region Navegação
  voltar()
  {
    this.nav.rRelatorio();
  }

  removDependente()
  {
    this.nav.rDependente();
  }
  //#endregion

  //#region ViewWillEnter
  ionViewWillEnter()
  {
    //Verificar Login
    this.servidor.verificar();

    //Dependente
    if(localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '')
    {
      document.getElementById('hisDep').classList.remove('invisivel');
      document.getElementById('hisMeio').classList.add('depMeio');

      this.nomeDependente = localStorage.getItem('nomeDependente');
      this.email = localStorage.getItem('emailDependente');
    }
    else
    {
      document.getElementById('hisDep').classList.add('invisivel');
      document.getElementById('hisMeio').classList.remove('depMeio');

      this.email = localStorage.getItem('email');
    }

    this.carregar();
  }
  //#endregion

  ngOnInit(){}
}
