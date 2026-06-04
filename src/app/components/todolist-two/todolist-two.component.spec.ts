import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistTwoComponent } from './todolist-two.component';

describe('TodolistTwoComponent', () => {
  let component: TodolistTwoComponent;
  let fixture: ComponentFixture<TodolistTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
