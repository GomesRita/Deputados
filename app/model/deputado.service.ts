import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class DeputadoService {
  private URL = 'https://dadosabertos.camara.leg.br/api/v2'
  
  constructor(private http: HttpClient) { }

  obterTodos(): Observable<any> {
    return this.http.get(
      `${this.URL}/deputados?ordem=ASC&ordenarPor=nome`)
  }

  obterNome(nome: string): Observable<any>{
    return this.http.get(`${this.URL}/deputados?nome=${nome}&ordem=ASC&ordenarPor=nome`)
  }

  obterPartido(partido: string): Observable<any>{
    return this.http.get(`${this.URL}/partidos?sigla=${partido}&sigla=&ordem=ASC&ordenarPor=sigla`)
  }

  obterLideres(id: number): Observable<any>{
    return this.http.get(`${this.URL}//legislaturas/${id}/lideres`)
  }
}