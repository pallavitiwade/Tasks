import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormFourComponent } from './student-form-four.component';

describe('StudentFormFourComponent', () => {
  let component: StudentFormFourComponent;
  let fixture: ComponentFixture<StudentFormFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFormFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
