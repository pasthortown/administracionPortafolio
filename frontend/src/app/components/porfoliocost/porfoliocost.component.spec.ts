import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfoliocostComponent } from './porfoliocost.component';

describe('PorfoliocostComponent', () => {
  let component: PorfoliocostComponent;
  let fixture: ComponentFixture<PorfoliocostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PorfoliocostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorfoliocostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
