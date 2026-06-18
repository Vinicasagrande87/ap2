import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  // Simulação de autenticação
  // Quando a API estiver pronta, substitua pelo serviço real de auth
  const isLoggedIn = localStorage.getItem('logado') === 'true';

  if (isLoggedIn) {
    return true; // acesso liberado
  }

  // Acesso negado — redireciona para login
  router.navigate(['/usuarios']);
  return false;
};