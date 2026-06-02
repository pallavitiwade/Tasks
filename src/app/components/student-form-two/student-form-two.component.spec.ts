import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormTwoComponent } from './student-form-two.component';

describe('StudentFormTwoComponent', () => {
  let component: StudentFormTwoComponent;
  let fixture: ComponentFixture<StudentFormTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFormTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
