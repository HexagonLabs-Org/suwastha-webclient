import { TestBed } from '@angular/core/testing';

import { PrescriptionOpdService } from './prescription-opd.service';

describe('PrescriptionOpdService', () => {
  let service: PrescriptionOpdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionOpdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
