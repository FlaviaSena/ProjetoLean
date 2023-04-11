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
  },  {
    path: 'incluirprodutos',
    loadComponent: () => import('./paginas/incluirprodutos/incluirprodutos.page').then( m => m.IncluirprodutosPage)
  },

  
  
 


];
