import { TestBed } from '@angular/core/testing';

import { StudentFiveService } from './student-five.service';

describe('StudentFiveService', () => {
  let service: StudentFiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentFiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
