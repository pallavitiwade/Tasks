import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashFiveComponent } from './student-dash-five.component';

describe('StudentDashFiveComponent', () => {
  let component: StudentDashFiveComponent;
  let fixture: ComponentFixture<StudentDashFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
