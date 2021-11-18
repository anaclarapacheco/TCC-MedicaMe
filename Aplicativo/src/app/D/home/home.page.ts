import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService){}

  //#region Valores do FrontEnd
  public temLista: any = false;
  public temListaCont: any = false;
  public temListaNao: any = false;
  public pendentes: any = [];
  public medicamento: any = [];

  public formaFarma = ['1', '2', '3', '4'];
  //#endregion

  //#region Abrir e Fechar o Menu
  open()
  {
    //Variaveis
    var menu = document.getElementById('dHome');
    var content = document.getElementById('depMenu');

    //Abre
    menu.classList.remove('invisivel');

    //Preparação
    menu.classList.remove('OutFundo');
    content.classList.remove('OutMenu');

    //Animação
    setTimeout(function()
    {
      menu.classList.add('InFundo');
      content.classList.add('InMenu');
    }, 100);
  }

  close()
  {
    //Variaveis
    var menu = document.getElementById('dHome');
    var content = document.getElementById('depMenu');

    //Preparação
    menu.classList.remove('InFundo');
    content.classList.remove('InMenu');

    //Animação
    menu.classList.add('OutFundo');
    content.classList.add('OutMenu');
    
    //Fecha
    setTimeout(function()
    {
      menu.classList.add('invisivel');
    }, 301);
  }
  //#endregion

  //#region Carregar
  carregar()
  {
    let dados = 'phpEmail=' + localStorage.getItem('email');

    this.servidor.enviar('Home/pendente.php', dados).subscribe(res =>{
      if(res[0].Erro != true)
      { 
        this.temLista = true;
        this.temListaCont = false;
        this.temListaNao = false;
        this.pendentes[0] = res[0];

        this.pendentes.forEach(medic => {
          if(medic['FormaFarmaceutica'] == '4' || medic['FormaFarmaceutica'] == '3')
          {
            let plural = false;

            medic['Dosagem'] = Math.trunc(medic['Dosagem']);

            if(medic['Dosagem'] > 1)
            {
              plural = true;
            }

            if(medic['FormaFarmaceutica'] == '3')
            {
              medic['Dosagem'] += ' comprimido';
            }
            else
            {
              medic['Dosagem'] += ' cápsula';
            }

            if(plural)
            {
              medic['Dosagem'] += 's';
            }
          }
          else
          {
            medic['Dosagem'] = medic['Dosagem'].replace('.', ',') + 'ml';
          }
        });
      }
      else
      {
        this.temLista = false;

        let dados = 'phpEmail=' + localStorage.getItem('email');
        
        this.servidor.enviar('Home/main.php', dados).subscribe(res =>{
          if(res[0].Erro != true)
          {
            this.temLista = false;
            this.temListaCont = true;
            this.temListaNao = false;
            this.medicamento = res;

            this.medicamento.forEach(medic => {
              if(medic['FormaFarmaceutica'] == '4' || medic['FormaFarmaceutica'] == '3')
              {
                let plural = false;
    
                medic['Dosagem'] = Math.trunc(medic['Dosagem']);
    
                if(medic['Dosagem'] > 1)
                {
                  plural = true;
                }
    
                if(medic['FormaFarmaceutica'] == '3')
                {
                  medic['Dosagem'] += ' comprimido';
                }
                else
                {
                  medic['Dosagem'] += ' cápsula';
                }
    
                if(plural)
                {
                  medic['Dosagem'] += 's';
                }
              }
              else
              {
                medic['Dosagem'] = medic['Dosagem'].replace('.', ',') + 'ml';
              }
            });
          }
          else
          {
            this.temLista = false;
            this.temListaCont = false;
            this.temListaNao = true;
          }
        });
      }
    });
  }
  //#endregion

  //#region Tomei ou Não tomei
  enviar(codigo, situacao)
  {
    //Animação
    document.getElementById(codigo).classList.add('OutAlerta');
    setTimeout(function(){}, 301);

    //Enviar ao PHP
    let dados = 'phpSituacao=' + situacao + '&phpCodigo=' + codigo + '&phpEmail=' + localStorage.getItem('email');
    
    this.servidor.enviar('Home/situacao.php', dados).subscribe(res => {
      this.carregar();
    });
  }
  //#endregion

  //#region Navegação
  tutorial()
  {
    localStorage.setItem('DTutorial', 'dHome');
    this.nav.dTutorial();
  }

  dadosAdicionais()
  {
    localStorage.setItem('dadosAdicionais', 'dHome');
    this.nav.dadosAdicionais();
  }

  sair()
  {
    this.servidor.limpar();
  }

  sintomas()
  {
    localStorage.setItem('sintomas', 'dHome');
    this.nav.adicionarSintomas();
  }
  //#endregion

  //#region ViewWillEnter
  ionViewWillEnter()
  {
    //Verificar Login
    this.servidor.verificar();

    //Carregar medicamentos
    this.carregar();
  }
  //#endregion

  ngOnInit(){}
}
