import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoformTwoComponent } from './todoform-two.component';

describe('TodoformTwoComponent', () => {
  let component: TodoformTwoComponent;
  let fixture: ComponentFixture<TodoformTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoformTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoformTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
