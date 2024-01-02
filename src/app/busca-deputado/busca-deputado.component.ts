import { Component } from '@angular/core';
import { CamaraService } from '../camara.service';
import { Deputado } from '../deputado';

@Component({
  selector: 'app-busca-deputado',
  standalone: true,
  imports: [],
  templateUrl: './busca-deputado.component.html',
  styleUrl: './busca-deputado.component.css'
})
export class BuscaDeputadoComponent {

  deputados: Deputado[] = []
  constructor(public ds: CamaraService) { }

  pesquisa(nome: string, partido: string) {
    if (nome != '' && partido == '') {
      this.ds.obterNome(nome).subscribe(res => {
        this.deputados = res.dados
      })
    } else if (nome == '' && partido != '') {
      this.ds.obterPartido(partido).subscribe(res => {
        this.deputados = res.dados
      })
    } else {
      this.ds.obterPartidoNome(partido, nome).subscribe(res => {
        this.deputados = res.dados
      })
    }



  }

}
