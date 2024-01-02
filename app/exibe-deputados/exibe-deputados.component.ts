import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeputadoService } from '../model/deputado.service';
import { HttpClientModule } from '@angular/common/http';
import { Deputado } from '../model/deputado';



@Component({
  selector: 'app-exibe-deputados',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './exibe-deputados.component.html',
  styleUrl: './exibe-deputados.component.css',
  providers: [DeputadoService]
})
export class ExibeDeputadosComponent{

  deputado: Deputado[] = [];
  nome: string = ''
  constructor(private ds: DeputadoService,) {
    ds.obterTodos().subscribe(resposta => {
      this.deputado = resposta.dados
      console.log(resposta.dados)
    })

  }

  obterNome(nome: string){
    this.ds.obterNome(nome).subscribe(resposta =>{
      this.nome = resposta;
    })
  }



}
