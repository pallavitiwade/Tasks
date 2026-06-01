import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboardFourComponent } from './todo-dashboard-four.component';

describe('TodoDashboardFourComponent', () => {
  let component: TodoDashboardFourComponent;
  let fixture: ComponentFixture<TodoDashboardFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboardFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashboardFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
