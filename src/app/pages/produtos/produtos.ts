import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Tamanho {
  tamanho: string;
  quantidade: number;
}

interface Produto {
  nome: string;
  foto: string;
  preco: number;
  tamanhos: Tamanho[];
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.html',   // ← corrigido
  styleUrls: ['./produtos.css'],    // ← corrigido
  imports: [FormsModule, CommonModule] // ← necessário para ngModel e ngFor
})
export class Produtos {             // ← corrigido
  termoBusca = '';
  produtos: Produto[] = [];

  todosProdutos: Produto[] = [
    {
      nome: 'Brasil 2024',
      foto: '/camisetas/brasil.png',
      preco: 299.90,
      tamanhos: [
        { tamanho: 'P',  quantidade: 5 },
        { tamanho: 'M',  quantidade: 3 },
        { tamanho: 'G',  quantidade: 0 },
        { tamanho: 'GG', quantidade: 2 },
      ]
    },
    {
      nome: 'Argentina 2024',
      foto: '/camisetas/argentina.png',
      preco: 289.90,
      tamanhos: [
        { tamanho: 'P',  quantidade: 0 },
        { tamanho: 'M',  quantidade: 8 },
        { tamanho: 'G',  quantidade: 4 },
        { tamanho: 'GG', quantidade: 1 },
      ]
    }
  ];

  buscar() {
    const termo = this.termoBusca.toLowerCase().trim();
    if (!termo) {
      this.produtos = [];
      return;
    }
    this.produtos = this.todosProdutos.filter(p =>
      p.nome.toLowerCase().includes(termo)
    );
  }
}