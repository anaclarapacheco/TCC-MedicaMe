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
  public quantidadeAdicional: any;

  public situacao = ['aviso'];
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

        this.medicamentos.forEach(medic => {
          if(medic['FormaFarmaceutica'] == '4' || medic['FormaFarmaceutica'] == '3')
          {
            let plural = false;

            medic['Quantidade'] = Math.trunc(medic['Quantidade']);

            if(medic['Quantidade'] > 1)
            {
              plural = true;
            }
            else if(medic['Quantidade'] < 0)
            {
              medic['Quantidade'] = 0;
            }

            if(medic['FormaFarmaceutica'] == '3')
            {
              medic['Quantidade'] += ' comprimido';
            }
            else
            {
              medic['Quantidade'] += ' cápsula';
            }

            if(plural)
            {
              medic['Quantidade'] += 's';
            }
          }
          else
          {
            medic['Quantidade'] = medic['Quantidade'].replace('.', ',') + 'ml';
          }
        });
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

    var reg = new RegExp('0|1|2|3|4|5|6|7|8|9|,', 'g');
    this.codigo = codigo;
    this.editarQuantidade = 0;
    this.quantidadeAdicional = quantidade.replace(reg, '');
  }

  fechar()
  {    
    if(event.target == document.getElementById('qFundo') || event.target == document.getElementById('qBtn') || event.target == document.getElementById('qSpn') || event.target == document.getElementById('qBtn2') || event.target == document.getElementById('qSpn2'))
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

  adicionar()
  {
    //Enviar ao PHP
    let dados = 'phpCodigo=' + this.codigo + '&phpQuantidade=' + this.editarQuantidade + '&phpOperacao=Adicionar' + '&phpEmail=' + this.email;

    this.servidor.enviar('Responsavel/Estoque/editar.php', dados).subscribe(res =>{
      if(res[0]['Erro'] == false)
      {
        this.fechar();
        this.carregarEstoque();
      }
    });
  }

  retirar()
  {
    //Enviar ao PHP
    let dados = 'phpCodigo=' + this.codigo + '&phpQuantidade=' + this.editarQuantidade + '&phpOperacao=Retirar' + '&phpEmail=' + this.email;

    this.servidor.enviar('Responsavel/Estoque/editar.php', dados).subscribe(res =>{
      if(res[0]['Erro'] == false)
      {
        this.fechar();
        this.carregarEstoque();
      }
    });
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

    //Recaregar lembretes
    this.carregarEstoque();

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
  }
  //#endregion

  //#region Navegação
  tutorial()
  {
    localStorage.setItem('RTutorial', 'rEstoque');
    this.nav.rTutorial();
  }

  adicionarResponsavel()
  {
    localStorage.setItem('digitarResponsavel', 'rEstoque');
    this.nav.digitarResponsavel();
  }

  adicionarSintomas()
  {
    localStorage.setItem('sintomas', 'rEstoque');
    this.nav.adicionarSintomas();
  }

  removDependente()
  {
    this.nav.rDependente();
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
      document.getElementById('eTabs').classList.add('invisivel');
      document.getElementById('eNav').classList.add('invisivel');
      document.getElementById('eContent').classList.add('baixoButton2');

      this.nomeDependente = localStorage.getItem('nomeDependente');
      this.email = localStorage.getItem('emailDependente');
    }
    else
    {
      document.getElementById('eDep').classList.add('invisivel');
      document.getElementById('eMeio').classList.remove('depMeio');
      document.getElementById('eTabs').classList.remove('invisivel');
      document.getElementById('eNav').classList.remove('invisivel');
      document.getElementById('eContent').classList.remove('baixoButton2');

      this.email = localStorage.getItem('email');
    }

    //Puxar lista de lembretes
    this.carregarEstoque();
  }
  //#endregion
  
  ngOnInit(){}
}
