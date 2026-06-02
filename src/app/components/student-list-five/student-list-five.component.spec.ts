import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListFiveComponent } from './student-list-five.component';

describe('StudentListFiveComponent', () => {
  let component: StudentListFiveComponent;
  let fixture: ComponentFixture<StudentListFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
