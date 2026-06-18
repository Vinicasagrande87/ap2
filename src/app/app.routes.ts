import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Usuarios } from './pages/usuarios/usuarios';
import { Produtos } from './pages/produtos/produtos';
import { Pagamento } from './pages/pagamento/pagamento';
import { Entrega } from './pages/entrega/entrega';
import { Naoencontrada } from './pages/naoencontrada/naoencontrada';

export const routes: Routes = [
  // Redireciona raiz para home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home',      component: Home },
  { path: 'usuarios',  component: Usuarios },
  { path: 'produtos',  component: Produtos },

  // Rota dinâmica — exibe detalhe de um produto pelo id
  { path: 'produtos/:id', component: Produtos },

  { path: 'entrega',   component: Entrega },
  { path: 'pagamento', component: Pagamento },

    // Wildcard — página não encontrada (sempre por último!)
  { path: '**', component: Naoencontrada }
];