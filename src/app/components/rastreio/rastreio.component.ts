import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-rastreio',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './rastreio.component.html',
  styleUrl: './rastreio.component.css'
})
export class RastreioComponent {

}
