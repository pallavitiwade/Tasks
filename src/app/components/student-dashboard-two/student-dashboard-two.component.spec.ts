import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardTwoComponent } from './student-dashboard-two.component';

describe('StudentDashboardTwoComponent', () => {
  let component: StudentDashboardTwoComponent;
  let fixture: ComponentFixture<StudentDashboardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashboardTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashboardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
