import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoThreeDashboardComponent } from './todo-three-dashboard.component';

describe('TodoThreeDashboardComponent', () => {
  let component: TodoThreeDashboardComponent;
  let fixture: ComponentFixture<TodoThreeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoThreeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoThreeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
