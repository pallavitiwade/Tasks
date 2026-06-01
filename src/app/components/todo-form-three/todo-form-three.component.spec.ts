import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormThreeComponent } from './todo-form-three.component';

describe('TodoFormThreeComponent', () => {
  let component: TodoFormThreeComponent;
  let fixture: ComponentFixture<TodoFormThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
