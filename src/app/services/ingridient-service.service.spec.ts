import { TestBed } from '@angular/core/testing';

import { IngridientServiceService } from './ingridient-service.service';

describe('IngridientServiceService', () => {
  let service: IngridientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngridientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
