import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeputadoService } from '../model/deputado.service';
import { Deputado } from '../model/deputado';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-exibe-nome-deputado',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './exibe-nome-deputado.component.html',
  styleUrl: './exibe-nome-deputado.component.css',
  providers: [DeputadoService]
})
export class ExibeNomeDeputadoComponent implements OnInit{
  deputado: any
  nome: string = ''
  constructor(private dep: DeputadoService){  }
  
  ngOnInit(): void {
    this.dep.obterNome(this.nome).subscribe(resposta =>{
      this.nome = resposta;
    })
  
  }

  obterNome(nome: string){
    this.dep.obterNome(nome).subscribe(data =>{
      this.deputado = data.dados[0]
    })
  }

  limparPesquisa(): void {
    this.deputado = null;
  }
}
