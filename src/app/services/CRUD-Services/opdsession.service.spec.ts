import { TestBed } from '@angular/core/testing';

import { OpdsessionService } from './opdsession.service';

describe('OpdsessionService', () => {
  let service: OpdsessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpdsessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
