import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistThreeComponent } from './todolist-three.component';

describe('TodolistThreeComponent', () => {
  let component: TodolistThreeComponent;
  let fixture: ComponentFixture<TodolistThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
