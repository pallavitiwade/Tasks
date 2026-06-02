import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormFiveComponent } from './student-form-five.component';

describe('StudentFormFiveComponent', () => {
  let component: StudentFormFiveComponent;
  let fixture: ComponentFixture<StudentFormFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFormFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
