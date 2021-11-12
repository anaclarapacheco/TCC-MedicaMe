import { Component, OnInit } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';
import { ServidorService } from 'src/app/services/servidor.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.page.html',
  styleUrls: ['./estoque.page.scss'],
})
export class EstoquePage implements OnInit {

  public editarQuantidade: number;

  constructor(private nav: NavegationService, private servidor: ServidorService) {}
  
  //#region Valores
  public nomeDependente: any;
  public email: any;
  public codigo: any;
  public medicamentos: any = [];
  public temLista: any = false;
  public temListaNao: any = false;

  public formaFarmaceutica: any;
  public formaFarma = ['1', '2', '3', '4'];
  //#endregion

  //#region Abrir e Fechar o Menu
  open()
  {
    //Variaveis
    var menu = document.getElementById('mEstoque');
    var content = document.getElementById('eMenu');

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
    var menu = document.getElementById('mEstoque');
    var content = document.getElementById('eMenu');

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

  //#region Carregar o Estoque
  carregarEstoque()
  {
    let dados = 'phpEmail=' + this.email;

    this.servidor.enviar('Responsavel/Estoque/main.php', dados).subscribe(res =>{
      if(res[0].Erro != true)
      {
        this.temLista = true;
        this.temListaNao = false;
        this.medicamentos = res;
      }
      else
      {
        this.temLista = false;
        this.temListaNao = true;
      }
    });
  }
  //#endregion

  //#region Editar quantidade
  editar(codigo, quantidade, formaFarma)
  {
    document.getElementById('eQuantidade').classList.remove('invisivel');

    //Preparação
    document.getElementById('qFundo').classList.remove('OutFundo');
    document.getElementById('qAlert').classList.remove('OutAlerta');

    //Animação
    setTimeout(function()
    {
      document.getElementById('qAlert').classList.add('InAlerta');
      document.getElementById('qFundo').classList.add('InFundo');
    }, 100);

    this.codigo = codigo;
    this.editarQuantidade = quantidade;
    this.formaFarmaceutica = formaFarma;
  }

  fechar()
  {    
    if(event.target == document.getElementById('qFundo'))
    {
      //Preparação
      document.getElementById('qFundo').classList.remove('InFundo');
      document.getElementById('qAlert').classList.remove('InAlerta');

      //Animação
      document.getElementById('qFundo').classList.add('OutFundo');
      document.getElementById('qAlert').classList.add('OutAlerta');
      
      //Fecha
      setTimeout(function()
      {
        document.getElementById('eQuantidade').classList.add('invisivel');
      }, 301);
    }
  }

  menos()
  {
    if(this.editarQuantidade != 0)
    {
      this.editarQuantidade--;
    }
  }

  mais()
  {
    this.editarQuantidade++;
  }
  //#endregion

  //#region Remover Medicamento
  removerMedicamento(codigo: any)
  {
    document.getElementById('rEstoque').classList.remove('invisivel');

    //Preparação
    document.getElementById('eFundo').classList.remove('OutFundo');
    document.getElementById('eAlert').classList.remove('OutAlerta');

    //Animação
    setTimeout(function()
    {
      document.getElementById('eAlert').classList.add('InAlerta');
      document.getElementById('eFundo').classList.add('InFundo');
    }, 100);

    this.codigo = codigo;
  }

  nao()
  {
    if(event.target == document.getElementById('eFundo') || event.target == document.getElementById('eBtn'))
    {
      //Preparação
      document.getElementById('eFundo').classList.remove('InFundo');
      document.getElementById('eAlert').classList.remove('InAlerta');

      //Animação
      document.getElementById('eFundo').classList.add('OutFundo');
      document.getElementById('eAlert').classList.add('OutAlerta');
      
      //Fecha
      setTimeout(function()
      {
        document.getElementById('rEstoque').classList.add('invisivel');
      }, 301);
    }
  }

  sim()
  {
    //Deletar o medicamento
    let dados = 'phpEmail=' + this.email + '&phpCodigo=' + this.codigo;

    this.servidor.enviar('Responsavel/Lembretes/remover.php', dados).subscribe(res =>{});

    //Preparação
    document.getElementById('eFundo').classList.remove('InFundo');
    document.getElementById('eAlert').classList.remove('InFundo');

    //Animação
    document.getElementById('eFundo').classList.add('OutFundo');
    document.getElementById('eAlert').classList.add('OutAlerta');
    
    //Fecha
    setTimeout(function()
    {
      document.getElementById('rEstoque').classList.add('invisivel');
    }, 301);

    //Recaregar lembretes
    this.carregarEstoque();
  }
  //#endregion

  //#region Navegação
  tutorial()
  {
    localStorage.setItem('RTutorial', 'rEstoque');
    this.nav.rTutorial();
  }

  dadosAdicionais()
  {
    localStorage.setItem('dadosAdicionais', 'rEstoque');
    this.nav.dadosAdicionais();
  }

  adicionarResponsavel()
  {
    localStorage.setItem('digitarResponsavel', 'rEstoque');
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

    //Dependente
    if(localStorage.getItem('emailDependente') != null && localStorage.getItem('emailDependente') != '')
    {
      document.getElementById('eDep').classList.remove('invisivel');
      document.getElementById('eMeio').classList.add('depMeio');

      this.nomeDependente = localStorage.getItem('nomeDependente');
      this.email = localStorage.getItem('emailDependente');
    }
    else
    {
      document.getElementById('eDep').classList.add('invisivel');
      document.getElementById('eMeio').classList.remove('depMeio');

      this.email = localStorage.getItem('email');
    }

    //Puxar lista de lembretes
    this.carregarEstoque();
  }
  //#endregion
  
  ngOnInit() {
  }
}
