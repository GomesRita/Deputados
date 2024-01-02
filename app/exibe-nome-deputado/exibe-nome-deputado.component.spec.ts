import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeNomeDeputadoComponent } from './exibe-nome-deputado.component';

describe('ExibeNomeDeputadoComponent', () => {
  let component: ExibeNomeDeputadoComponent;
  let fixture: ComponentFixture<ExibeNomeDeputadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibeNomeDeputadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibeNomeDeputadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
