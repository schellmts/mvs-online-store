import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import {BuscarcepService} from "../../services/buscarcep.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {Router, RouterLink, RouterModule} from "@angular/router";
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";
import {CustomPipe} from "../../custom.pipe";
import Swal from 'sweetalert2'
import {DetalhesCepComponent} from "../detalhes-cep/detalhes-cep.component";

@Component({
  selector: 'app-rastreio',
  standalone: true,
  imports: [NavbarComponent, DetalhesCepComponent, CustomPipe, HttpClientModule, CommonModule, ReactiveFormsModule, NgxMaskDirective, RouterLink],
  templateUrl: './rastreio.component.html',
  styleUrl: './rastreio.component.css',
  providers: [provideNgxMask()],
})

export class RastreioComponent {
  form: FormGroup;
  cepData: any;

  buscarCepFilho() {
    this.buscarCep();
  }

  constructor(private fb: FormBuilder, private cepService: BuscarcepService) {
    this.form = this.fb.group({
      cep: ['', [Validators.required, Validators.pattern('[0-9]{8}')]]
    });
    this.cepData = null;
  }

  buscarCep() {
    if (this.form.invalid) {
      Swal.fire({
        title: 'Erro!',
        text: 'Formulário inválido, por favor confira os campos e tente novamente',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
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
