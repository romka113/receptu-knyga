import { TestBed } from '@angular/core/testing';

import { ReceptService } from './recept.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReceptService', () => {
  let service: ReceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    });
    service = TestBed.inject(ReceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
