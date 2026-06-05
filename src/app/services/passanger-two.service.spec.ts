import { TestBed } from '@angular/core/testing';

import { PassangerTwoService } from './passanger-two.service';

describe('PassangerTwoService', () => {
  let service: PassangerTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassangerTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
