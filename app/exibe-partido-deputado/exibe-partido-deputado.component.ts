import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeputadoService } from '../model/deputado.service';
import { Partido } from '../model/partido';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-exibe-partido-deputado',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './exibe-partido-deputado.component.html',
  styleUrl: './exibe-partido-deputado.component.css',
  providers: [DeputadoService]
})
export class ExibePartidoDeputadoComponent implements OnInit{
    partido: any
    sigla: string = ''
    constructor(private part: DeputadoService){ }
    
    ngOnInit(): void {
      this.part.obterPartido(this.sigla).subscribe(resposta =>{
        this.sigla = resposta;
      })
    
    }
    exibirPartido(partd: string){
      this.part.obterPartido(partd).subscribe(data =>{
        this.partido = data.dados[0];
      })
    }

    limparPesquisa(): void {
      this.partido= null;
    }
}
