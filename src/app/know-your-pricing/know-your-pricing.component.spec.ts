import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourPricingComponent } from './know-your-pricing.component';

describe('KnowYourPricingComponent', () => {
  let component: KnowYourPricingComponent;
  let fixture: ComponentFixture<KnowYourPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowYourPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowYourPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
