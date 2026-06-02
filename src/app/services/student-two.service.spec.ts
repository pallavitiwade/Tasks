import { TestBed } from '@angular/core/testing';

import { StudentTwoService } from './student-two.service';

describe('StudentTwoService', () => {
  let service: StudentTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
