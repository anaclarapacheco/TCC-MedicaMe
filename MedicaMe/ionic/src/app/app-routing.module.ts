import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'first-view',
    pathMatch: 'full'
  },
  {
    path: 'first-view',
    loadChildren: () => import('./first-view/first-view.module').then( m => m.FirstViewPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'dados-adicionais',
    loadChildren: () => import('./dados-adicionais/dados-adicionais.module').then( m => m.DadosAdicionaisPageModule)
  },
  {
    path: 'dependente',
    loadChildren: () => import('./dependente/dependente.module').then( m => m.DependentePageModule)
  },
  {
    path: 'entrar',
    loadChildren: () => import('./entrar/entrar.module').then( m => m.EntrarPageModule)
  },
  {
    path: 'digitar-responsavel',
    loadChildren: () => import('./digitar-responsavel/digitar-responsavel.module').then( m => m.DigitarResponsavelPageModule)
  },
  {
    path: 'D/tutorial',
    loadChildren: () => import('./D/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'R/tutorial',
    loadChildren: () => import('./R/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'R/home',
    loadChildren: () => import('./R/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
