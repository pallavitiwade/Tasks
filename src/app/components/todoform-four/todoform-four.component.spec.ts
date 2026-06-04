import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoformFourComponent } from './todoform-four.component';

describe('TodoformFourComponent', () => {
  let component: TodoformFourComponent;
  let fixture: ComponentFixture<TodoformFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoformFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoformFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
