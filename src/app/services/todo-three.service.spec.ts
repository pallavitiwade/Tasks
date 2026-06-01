import { TestBed } from '@angular/core/testing';

import { TodoThreeService } from './todo-three.service';

describe('TodoThreeService', () => {
  let service: TodoThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
