import {Component, NgModule, Input, Output, EventEmitter, input, output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-detalhes-cep',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalhes-cep.component.html',
  styleUrl: './detalhes-cep.component.css'
})
export class DetalhesCepComponent {
  @Input() cepData: any; //recebendo aq os dados do componente pai que e o de rastreio
  @Output() buscarCepEvent = new EventEmitter<void>(); //aq ta enviando os eventos pro pai
}
