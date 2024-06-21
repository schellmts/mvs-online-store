import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrosectionComponent } from './retrosection.component';

describe('RetrosectionComponent', () => {
  let component: RetrosectionComponent;
  let fixture: ComponentFixture<RetrosectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetrosectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetrosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
