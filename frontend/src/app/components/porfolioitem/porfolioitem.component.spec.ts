import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioitemComponent } from './porfolioitem.component';

describe('PorfolioitemComponent', () => {
  let component: PorfolioitemComponent;
  let fixture: ComponentFixture<PorfolioitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PorfolioitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorfolioitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
