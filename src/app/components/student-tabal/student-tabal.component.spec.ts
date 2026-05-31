import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTabalComponent } from './student-tabal.component';

describe('StudentTabalComponent', () => {
  let component: StudentTabalComponent;
  let fixture: ComponentFixture<StudentTabalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTabalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTabalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
