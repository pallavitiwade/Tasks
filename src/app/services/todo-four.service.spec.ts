import { TestBed } from '@angular/core/testing';

import { TodoFourService } from './todo-four.service';

describe('TodoFourService', () => {
  let service: TodoFourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
