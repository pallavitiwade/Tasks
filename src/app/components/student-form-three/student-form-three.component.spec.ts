import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormThreeComponent } from './student-form-three.component';

describe('StudentFormThreeComponent', () => {
  let component: StudentFormThreeComponent;
  let fixture: ComponentFixture<StudentFormThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFormThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
