import { TestBed } from '@angular/core/testing';

import { StudentThreeService } from './student-three.service';

describe('StudentThreeService', () => {
  let service: StudentThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
