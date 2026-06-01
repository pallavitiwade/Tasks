import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboardTwoComponent } from './todo-dashboard-two.component';

describe('TodoDashboardTwoComponent', () => {
  let component: TodoDashboardTwoComponent;
  let fixture: ComponentFixture<TodoDashboardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboardTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashboardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
