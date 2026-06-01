import { TestBed } from '@angular/core/testing';

import { TodoFiveService } from './todo-five.service';

describe('TodoFiveService', () => {
  let service: TodoFiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
