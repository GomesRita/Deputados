import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibePartidoDeputadoComponent } from './exibe-partido-deputado.component';

describe('ExibePartidoDeputadoComponent', () => {
  let component: ExibePartidoDeputadoComponent;
  let fixture: ComponentFixture<ExibePartidoDeputadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibePartidoDeputadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibePartidoDeputadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
