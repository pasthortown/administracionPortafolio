import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfoliocostsComponent } from './porfoliocosts.component';

describe('PorfoliocostsComponent', () => {
  let component: PorfoliocostsComponent;
  let fixture: ComponentFixture<PorfoliocostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PorfoliocostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorfoliocostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
