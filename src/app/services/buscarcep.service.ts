import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BuscarcepService {

  private viacepUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  getCep(cep: string): Observable<any> {
    return this.http.get<any>(`${this.viacepUrl}/${cep}/json`);
  }
}
