import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeputadoService } from '../model/deputado.service';
import { Lideres } from '../model/lider';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-exibir-lideres',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './exibir-lideres.component.html',
  styleUrl: './exibir-lideres.component.css',
  providers: [DeputadoService]
})
export class ExibirLideresComponent {
  lideres: any
  id: number = 0

  constructor(private lider: DeputadoService){  }

  ngOnInit():void{
    this.lider.obterLideres(this.id).subscribe(resposta =>{
      this.id = resposta
    })
  }

  exibirLider(id: number){
    this.lider.obterLideres(id).subscribe(data => {
      this.lideres = data.dados[0]
    })
  }

  limparPesquisa(): void {
  }
}
