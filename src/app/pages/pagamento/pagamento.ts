import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagamento',
  imports: [CommonModule, FormsModule],
  templateUrl: './pagamento.html',
  styleUrl: './pagamento.css',
})
export class Pagamento {
  metodo: 'pix' | 'debito' | 'credito' | '' = '';
  parcelas = 1;
  copiado = false;
  numeroPedido = this.gerarNumeroPedido();

  listaParcelas = [
    { valor: 1, label: 'À vista' },
    { valor: 2, label: '2x sem juros' },
    { valor: 3, label: '3x sem juros' },
    { valor: 4, label: '4x sem juros' },
    { valor: 5, label: '5x sem juros' },
  ];

  gerarNumeroPedido(): string {
    const numero = Math.floor(100000 + Math.random() * 900000);
    return `PED-${numero}`;
  }

  copiarChave() {
    navigator.clipboard.writeText('pagamentos@lojacamisetas.com');
    this.copiado = true;
    setTimeout(() => this.copiado = false, 3000);
  }

  confirmar() {
    alert(`Pedido ${this.numeroPedido} confirmado via ${this.metodo}!`);
  }
}