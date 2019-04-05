import { TestBed } from '@angular/core/testing';

import { OrderfoodService } from './orderfood.service';

describe('OrderfoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderfoodService = TestBed.get(OrderfoodService);
    expect(service).toBeTruthy();
  });
});
