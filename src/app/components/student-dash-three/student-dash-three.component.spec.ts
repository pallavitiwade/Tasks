import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashThreeComponent } from './student-dash-three.component';

describe('StudentDashThreeComponent', () => {
  let component: StudentDashThreeComponent;
  let fixture: ComponentFixture<StudentDashThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
