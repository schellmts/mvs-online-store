import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from "sweetalert2";

@Component({
  selector: 'app-produtos-page',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './produtos-page.component.html',
  styleUrls: ['./produtos-page.component.css']
})
export class ProdutosPageComponent implements OnInit {
  @Input() product: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  enviarDados() {
    const tamanho = (document.querySelector('input[name="interest"]:checked') as HTMLInputElement)?.value;
    if (!tamanho) {
      Swal.fire({
        title: "Erro!",
        text: "Por favor, escolha um tamanho.",
        icon: "error"
      });
      return;
    }

    const produtoItem = {
      nome: this.product.nome,
      ano: this.product.ano,
      local: this.product.local,
      valor: this.product.valor,
      tamanho: tamanho,
      foto: this.product.foto
    };

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(produtoItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    Swal.fire({
      title: "Sucesso!",
      text: "Produto adicionado ao carrinho!",
      icon: "success"
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.apiService.getProduto(id).subscribe(product => {
      this.product = product;
    });
  }
}
