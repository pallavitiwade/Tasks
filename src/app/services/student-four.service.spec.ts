import { TestBed } from '@angular/core/testing';

import { StudentFourService } from './student-four.service';

describe('StudentFourService', () => {
  let service: StudentFourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentFourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
