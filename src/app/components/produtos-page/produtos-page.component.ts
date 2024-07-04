import {Component, OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-produtos-page',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './produtos-page.component.html',
  styleUrl: './produtos-page.component.css'
})
export class ProdutosPageComponent implements OnInit{
  product: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.apiService.getProduto(id).subscribe(product => {
      this.product = product;
    });
  }
}
