import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ExibeDeputadosComponent } from './exibe-deputados/exibe-deputados.component';
import { ExibeNomeDeputadoComponent } from './exibe-nome-deputado/exibe-nome-deputado.component';
import { ExibePartidoDeputadoComponent } from './exibe-partido-deputado/exibe-partido-deputado.component';
import { DeputadoService } from './model/deputado.service';
import { ExibirLideresComponent } from './exibir-lideres/exibir-lideres.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
            HttpClientModule,
            ExibeNomeDeputadoComponent, 
            ExibeDeputadosComponent,
            ExibePartidoDeputadoComponent,
            ExibirLideresComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app4-deputados';
  exibirTodosDeputados = false;
  exibirComPartidos = false;
  exibirComNomeDep = false;

  exibirDeputados(){
    if (this.exibirTodosDeputados == false) {
      this.exibirTodosDeputados = true
      this.exibirComNomeDep = false
      this.exibirComPartidos = false
    } else {
      this.exibirTodosDeputados = false
    }
  }

  exibirComponentPartidos(){
    if (this.exibirComPartidos == false) {
      this.exibirComPartidos = true
      this.exibirTodosDeputados = false
      this.exibirComNomeDep = false
    } else {
      this.exibirComPartidos = false
    }
  }
  
  exibirComponentNomeDep(){
    if (this.exibirComNomeDep == false) {
      this.exibirComNomeDep = true
      this.exibirComPartidos = false
      this.exibirTodosDeputados = false
    } else {
      this.exibirComNomeDep = false
    }
  }

  

}
