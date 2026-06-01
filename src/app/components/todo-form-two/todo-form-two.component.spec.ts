import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormTwoComponent } from './todo-form-two.component';

describe('TodoFormTwoComponent', () => {
  let component: TodoFormTwoComponent;
  let fixture: ComponentFixture<TodoFormTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
