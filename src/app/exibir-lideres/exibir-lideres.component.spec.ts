import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirLideresComponent } from './exibir-lideres.component';

describe('ExibirLideresComponent', () => {
  let component: ExibirLideresComponent;
  let fixture: ComponentFixture<ExibirLideresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirLideresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibirLideresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
