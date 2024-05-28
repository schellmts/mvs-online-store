import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NovidadesComponent } from '../novidades/novidades.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, NovidadesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
