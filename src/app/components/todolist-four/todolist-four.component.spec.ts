import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistFourComponent } from './todolist-four.component';

describe('TodolistFourComponent', () => {
  let component: TodolistFourComponent;
  let fixture: ComponentFixture<TodolistFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
