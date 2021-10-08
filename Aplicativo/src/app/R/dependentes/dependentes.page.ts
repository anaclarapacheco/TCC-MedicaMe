import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-dependentes',
  templateUrl: './dependentes.page.html',
  styleUrls: ['./dependentes.page.scss'],
})
export class DependentesPage implements OnInit {

  dependentes: any = "";

  constructor(public navCtrl: NavController) {
    //this.carregarDependentes();
  }

  //#region Remover Dependente
  removerDependente(codigo: any)
  {
    var alert = document.getElementById('rDependentes');
    alert.classList.remove('invisivel');
  }

  sim()
  {
    console.log("Remover o Dependente");

    //Remover o Dependente
    //this.carregarDependentes();
  }

  nao()
  {
    if(event.target == document.getElementById('nao') || event.target == document.getElementById('naoBtn'))
    {
      var alert = document.getElementById('rDependentes');
      alert.classList.add('invisivel');
    }
  }
  //#endregion

  //#region Adicionar Dependente
  novoDependente()
  {
    var alert = document.getElementById('aDependentes');
    alert.classList.remove('invisivel');
  }

  entendi()
  {
    if(event.target == document.getElementById('entendi') || event.target == document.getElementById('entendiBtn'))
    {
      var alert = document.getElementById('aDependentes');
      alert.classList.add('invisivel');
    }
  }
  //#endregion

  //#region Carregando os dependentes
  carregarDependentes()
  {
    this.dependentes = "";
    let data: any;

    for (let i = 0; i < data.count; i++) {
      this.dependentes += '<div class="dependentes full flex">';
      this.dependentes += '<img src="../../../assets/IMG/Logo/Light (Base).png" alt="Logo do aplicativo MedicaMe">';
      this.dependentes += '<div class="text flex leftA">';
      this.dependentes += '<h3>' + data[i].nome + '</h3>';
      this.dependentes += '<svg viewBox="0 0 24 24" (click)="removerDependente(' + data[i].codigo + ')">';
      this.dependentes += '<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/>';
      this.dependentes += '</svg>';
      this.dependentes += '<p>E-mail: ' + data[i].email + '</p>';
      this.dependentes += '<p>' + data[i].idade + '</p>';
      this.dependentes += '</div>';
      this.dependentes += '<button class="normal full flex" (click)="editarDependente(' + data[i].codigo + ')">Administrar</button>';
      this.dependentes += '</div>';
    }
  }
  //#endregion

  //#region Abrir e Fechar o Menu
  open()
  {
    var menu = document.getElementById('mDependentes');
    menu.classList.remove('invisivel');
  }

  close()
  {
    var menu = document.getElementById('mDependentes');
    menu.classList.add('invisivel');
  }
  //#endregion

  //#region SideMenu
  tutorial()
  {
    this.navCtrl.navigateForward('R/tutorial');
  }

  dadosAdicionais()
  {
    this.navCtrl.navigateForward('dados-adicionais');
  }

  adicionarResponsavel()
  {
    this.navCtrl.navigateForward('digitar-responsavel');
  }

  sair()
  {
    this.navCtrl.navigateForward('first-view');
  }
  //#endregion

  //#region Tabs
  lembretes()
  {
    this.navCtrl.navigateForward('R/lembretes');
  }
  
  home()
  {
    this.navCtrl.navigateForward('R/home');
  }

  estoque()
  {
    this.navCtrl.navigateForward('R/estoque');
  }

  relatorio()
  {
    this.navCtrl.navigateForward('R/relatorio');
  }
  //#endregion

  ngOnInit() {
  }
}
