import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoformThreeComponent } from './todoform-three.component';

describe('TodoformThreeComponent', () => {
  let component: TodoformThreeComponent;
  let fixture: ComponentFixture<TodoformThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoformThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoformThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
