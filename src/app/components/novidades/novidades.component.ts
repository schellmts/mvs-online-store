import {Component, input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-novidades',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './novidades.component.html',
  styleUrl: './novidades.component.css',
})
export class NovidadesComponent implements OnInit{
  camisas: any[] = []

  constructor(private apiServce: ApiService) {
  }

  ngOnInit() {
    this.apiServce.getCamisas().subscribe(data => {
      this.camisas = data;
    });

  }

  protected readonly ApiService = ApiService;
}
