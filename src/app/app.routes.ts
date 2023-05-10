import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'incluirprodutos',
    loadComponent: () => import('./paginas/incluirprodutos/incluirprodutos.page').then( m => m.IncluirprodutosPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'produtos',
    loadComponent: () => import('./paginas/produtos/produtos.page').then( m => m.ProdutosPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./paginas/cadastro/cadastro.page').then( m => m.CadastroclientePage)
  },
  {
    path: 'logado',
    loadComponent: () => import('./paginas/logado/logado.page').then( m => m.LogadoPage)
  },
  {
    path: 'incluircadastro',
    loadComponent: () => import('./paginas/incluircadastro/incluircadastro.page').then( m => m.IncluirCadastroclientPage)
  },

  
  
 


];
