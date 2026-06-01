import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListThreeComponent } from './todo-list-three.component';

describe('TodoListThreeComponent', () => {
  let component: TodoListThreeComponent;
  let fixture: ComponentFixture<TodoListThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
