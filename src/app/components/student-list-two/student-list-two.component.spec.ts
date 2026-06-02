import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListTwoComponent } from './student-list-two.component';

describe('StudentListTwoComponent', () => {
  let component: StudentListTwoComponent;
  let fixture: ComponentFixture<StudentListTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
