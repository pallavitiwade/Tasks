import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashFourComponent } from './student-dash-four.component';

describe('StudentDashFourComponent', () => {
  let component: StudentDashFourComponent;
  let fixture: ComponentFixture<StudentDashFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
