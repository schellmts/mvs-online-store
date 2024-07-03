import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCepComponent } from './detalhes-cep.component';

describe('DetalhesCepComponent', () => {
  let component: DetalhesCepComponent;
  let fixture: ComponentFixture<DetalhesCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesCepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
