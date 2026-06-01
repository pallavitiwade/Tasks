import { TestBed } from '@angular/core/testing';

import { TodoTwoService } from './todo-two.service';

describe('TodoTwoService', () => {
  let service: TodoTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
