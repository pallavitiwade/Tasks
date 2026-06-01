import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListFourComponent } from './todo-list-four.component';

describe('TodoListFourComponent', () => {
  let component: TodoListFourComponent;
  let fixture: ComponentFixture<TodoListFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
