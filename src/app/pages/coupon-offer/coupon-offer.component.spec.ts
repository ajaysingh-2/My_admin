import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponOfferComponent } from './coupon-offer.component';

describe('CouponOfferComponent', () => {
  let component: CouponOfferComponent;
  let fixture: ComponentFixture<CouponOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
