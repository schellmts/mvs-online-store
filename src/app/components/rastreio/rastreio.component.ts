import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import {BuscarcepService} from "../../services/buscarcep.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-rastreio',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, CommonModule, ReactiveFormsModule],
  templateUrl: './rastreio.component.html',
  styleUrl: './rastreio.component.css'
})
export class RastreioComponent {
  form: FormGroup;
  cepData: any;

  constructor(private fb: FormBuilder, private cepService: BuscarcepService) {
    this.form = this.fb.group({
      cep: ['']
    });
    this.cepData = null;
  }

  buscarCep() {
    const cep = this.form.get('cep')?.value;
    this.cepService.getCep(cep).subscribe(
      (data) => {
        this.cepData = data;
        console.log(data)
      },
      (error) => {
        console.error(error)
    })
  }
}
