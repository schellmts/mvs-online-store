import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-galeria-produtos',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './galeria-produtos.component.html',
  styleUrl: './galeria-produtos.component.css'
})
export class GaleriaProdutosComponent implements OnInit{
  camisas: any[] = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getCamisas().subscribe(data => {
      this.camisas = data;
    })
  }

}
