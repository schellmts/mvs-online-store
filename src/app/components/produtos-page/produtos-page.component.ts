import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-produtos-page',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent
  ],
  templateUrl: './produtos-page.component.html',
  styleUrl: './produtos-page.component.css'
})
export class ProdutosPageComponent {

}
