import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.page.html',
  styleUrls: ['./lembretes.page.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LembretesPage implements OnInit {

  constructor(private nav: NavegationService, private servidor: ServidorService){}

  //#region Valores
  public nomeDependente: any;
  public email: any;
  public conteudo: any;
  //#endregion

  //#region Abrir e Fechar o Menu
  open()
  {
    //Variaveis
    var menu = document.getElementById('mLembretes');
    var content = document.getElementById('lMenu');

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
    var menu = document.getElementById('mLembretes');
    var content = document.getElementById('lMenu');

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
    }, 1000);
  }
  //#endregion

  //#region Editar
  editar(codigo: any)
  {
    localStorage.setItem('agendamento', codigo);
    this.novoLembrete();
  }
  //#endregion

  //#region Navegação
  novoLembrete()
  {
    this.nav.rNovoLembrete();
  }

  tutorial()
  {
    localStorage.setItem('RTutorial', 'rLembretes');
    this.nav.rTutorial();
  }

  dadosAdicionais()
  {
    localStorage.setItem('dadosAdicionais', 'rLembretes');
    this.nav.dadosAdicionais();
  }

  adicionarResponsavel()
  {
    localStorage.setItem('digitarResponsavel', 'rLembretes');
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

  //#region OnInit
  ngOnInit()
  {
    //Verificar Login
    this.servidor.verificar();

    //Dependente
    if(localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '')
    {
      document.getElementById('lDep').classList.remove('invisivel');
      document.getElementById('lMeio').classList.add('depMeio');

      this.nomeDependente = localStorage.getItem('nomeDependente');
      this.email = localStorage.getItem('emailDependente');
    }
    else
    {
      document.getElementById('lDep').classList.add('invisivel');
      document.getElementById('lMeio').classList.remove('depMeio');

      this.email = localStorage.getItem('email');
    }

    //Puxar lista de lembretes
    let dados = 'phpEmail=' + this.email;

    this.servidor.enviar('Responsavel/Lembretes/main.php', dados).subscribe(res => {
      if(res[0]['Erro'] == false)
      {
        document.getElementById('lembretes').innerHTML = '';
        
        for (let i = 1; i < Object.keys(res).length; i++)
        {
          //Variaveis
          let formaFarma = res[i]['Forma Farmaceutica'];
          let nome = res[i]['Nome'];
          let descricao = res[i]['Descrição'];
          let dataFinal = 'Até o dia ' + String(res[i]['Data Final']).substring(8, 10) + '/' + String(res[i]['Data Final']).substring(5, 7) + '/' + String(res[i]['Data Final']).substring(0, 4);
          let codigo = res[i]['Agendamento'];

          //Colocando na tela
          document.getElementById('lembretes').innerHTML += `
            <div class="lembretes full flex">
            <img src="../../../assets/IMG/Icon/` + formaFarma + `.png">
            <div class="text leftA">
            <h3>` + nome + `</h3>
            <p class="descricao">` + descricao + `</p>
            <p>` + dataFinal + `</p>
            </div>
            <button class="normal full flex" (click)="editar(` + codigo + `)"> Editar
            <svg viewBox="0 0 24 24">
            <path d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"/>
            </svg>
            </button>
            </div>
          `;
        }
      }
      else
      {
        document.getElementById('lembretes').innerHTML = `
          <div class="semMedicamento centerA">
          <p>Você ainda não agendou lembretes para os seus medicamentos, clique no botão: "Novo Lembrete", para criar o primeiro!</p>
          </div>
        `;
      }
    });
  }
  //#endregion
}
