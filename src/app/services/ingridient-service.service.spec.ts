import { TestBed } from '@angular/core/testing';

import { IngridientServiceService } from './ingridient-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('IngridientServiceService', () => {
  let service: IngridientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(IngridientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
