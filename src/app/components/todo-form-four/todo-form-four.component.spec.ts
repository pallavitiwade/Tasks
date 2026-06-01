import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormFourComponent } from './todo-form-four.component';

describe('TodoFormFourComponent', () => {
  let component: TodoFormFourComponent;
  let fixture: ComponentFixture<TodoFormFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
