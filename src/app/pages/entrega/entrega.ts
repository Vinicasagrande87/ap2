import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entrega',
  imports: [CommonModule, FormsModule],
  templateUrl: './entrega.html',
  styleUrl: './entrega.css',
})
export class Entrega {

  buscarCep(event: any) {
    const cep = event.target.value.replace(/\D/g, '');
    if (cep.length !== 8) return;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        if (data.erro) return;
        console.log(data); // aqui você vai preencher os campos com [(ngModel)]
      });
  }
}