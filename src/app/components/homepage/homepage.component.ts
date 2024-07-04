import { HeaderComponent } from './../header/header.component';
import {Component, OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NovidadesComponent } from '../novidades/novidades.component';
import { RetrosectionComponent } from '../retrosection/retrosection.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, NovidadesComponent, RetrosectionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  providers: [ApiService]
})
export class HomepageComponent implements OnInit{
  camisas: any[] = [];



  constructor(private apiService: ApiService) {
  }

  ngOnInit():void {
    this.apiService.getCamisas().subscribe(data => {
      this.camisas = data;

    })
  }
}
