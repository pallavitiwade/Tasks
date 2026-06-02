import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListThreeComponent } from './student-list-three.component';

describe('StudentListThreeComponent', () => {
  let component: StudentListThreeComponent;
  let fixture: ComponentFixture<StudentListThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
