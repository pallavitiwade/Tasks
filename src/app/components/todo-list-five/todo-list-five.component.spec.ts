import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListFiveComponent } from './todo-list-five.component';

describe('TodoListFiveComponent', () => {
  let component: TodoListFiveComponent;
  let fixture: ComponentFixture<TodoListFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
