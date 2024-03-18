import { TestBed } from '@angular/core/testing';

import { SupabseService } from './supabse.service';

describe('SupabseService', () => {
  let service: SupabseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
