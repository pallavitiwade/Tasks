import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormFiveComponent } from './todo-form-five.component';

describe('TodoFormFiveComponent', () => {
  let component: TodoFormFiveComponent;
  let fixture: ComponentFixture<TodoFormFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
