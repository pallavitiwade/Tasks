import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListFourComponent } from './student-list-four.component';

describe('StudentListFourComponent', () => {
  let component: StudentListFourComponent;
  let fixture: ComponentFixture<StudentListFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
