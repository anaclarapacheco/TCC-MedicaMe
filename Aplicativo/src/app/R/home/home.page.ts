import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //#region Constructor
  constructor(private nav: NavegationService, private servidor: ServidorService)
  {
    //Data de hoje
    let nowData = new Date();
    this.data = String(nowData.getDate()).padStart(2, '0') + '/' + String(nowData.getMonth() + 1).padStart(2, '0')  + '/' + nowData.getFullYear();
  }
  //#endregion

  //#region Valores
  public data: any = "";
  public medicamentos: any = [];
  public pendentes: any = [];
  public temMedic: any = false;
  public temPendente: any = false;
  public temMedicNao: any = false;
  //#endregion

  //#region Abrir e Fechar o Menu
  open()
  {
    //Variaveis
    var menu = document.getElementById('mHome');
    var content = document.getElementById('hMenu');

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
    var menu = document.getElementById('mHome');
    var content = document.getElementById('hMenu');

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

  //#region Tomei ou Não tomei
  enviar(codigo, situacao)
  {
    //Animação
    document.getElementById(codigo).classList.add('OutAlerta');
    setTimeout(function(){}, 301);

    //Enviar ao PHP
    let dados = 'phpSituacao=' + situacao + '&phpCodigo=' + codigo + '&phpEmail=' + localStorage.getItem('email');
    
    this.servidor.enviar('Home/situacao.php', dados).subscribe(res => {
      this.carregarPendente();
    });
  }
  //#endregion

  //#region Carregar medicamentos pendentes
  carregarPendente()
  {
    let dados = 'phpEmail=' + localStorage.getItem('email');

    this.servidor.enviar('Home/pendente.php', dados).subscribe(res =>{
      if(res[0].Erro != true)
      {
        this.temPendente = true;
        this.pendentes = res;

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
        this.temPendente = false;
      }
    });
  }
  //#endregion

  //#region Carregar medicamentos de hoje
  carregar()
  {
    let dados = 'phpEmail=' + localStorage.getItem('email');

    this.servidor.enviar('Home/main.php', dados).subscribe(res =>{
      if(res[0].Erro != true)
      {
        this.temMedic = true;
        this.temMedicNao = false;
        this.medicamentos = res;

        console.log(this.medicamentos);
        

        this.medicamentos.forEach(medic => {
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
        this.temMedic = false;
        this.temMedicNao = true;
      }
    });
  }
  //#endregion

  //#region Navegação
  tutorial()
  {
    localStorage.setItem('RTutorial', 'rHome');
    this.nav.rTutorial();
  }

  dadosAdicionais()
  {
    localStorage.setItem('dadosAdicionais', 'rHome');
    this.nav.dadosAdicionais();
  }

  adicionarResponsavel()
  {
    localStorage.setItem('digitarResponsavel', 'rHome');
    this.nav.digitarResponsavel();
  }

  sair()
  {
    this.servidor.limpar();
  }

  home()
  {
    this.nav.rHome();
  }

  lembretes()
  {
    this.nav.rLembretes();
  }

  estoque()
  {
    this.nav.rEstoque();
  }

  dependentes()
  {
    this.nav.rDependentes();
  }

  relatorio()
  {
    this.nav.rRelatorio();
  }
  //#endregion

  //#region ViewWillEnter
  ionViewWillEnter()
  {
    //Verificar Login
    this.servidor.verificar();

    //Carregar medicamentos
    this.carregar();
    this.carregarPendente();
  }
  //#endregion

  ngOnInit(){}
}
