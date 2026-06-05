import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerCountTwoComponent } from './passanger-count-two.component';

describe('PassangerCountTwoComponent', () => {
  let component: PassangerCountTwoComponent;
  let fixture: ComponentFixture<PassangerCountTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassangerCountTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassangerCountTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
