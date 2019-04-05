import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmodalComponent } from './paymentmodal.component';

describe('PaymentmodalComponent', () => {
  let component: PaymentmodalComponent;
  let fixture: ComponentFixture<PaymentmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
