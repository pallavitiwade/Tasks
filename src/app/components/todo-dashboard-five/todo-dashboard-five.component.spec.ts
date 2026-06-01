import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboardFiveComponent } from './todo-dashboard-five.component';

describe('TodoDashboardFiveComponent', () => {
  let component: TodoDashboardFiveComponent;
  let fixture: ComponentFixture<TodoDashboardFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboardFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashboardFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
