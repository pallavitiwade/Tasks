import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerDashTwoComponent } from './passanger-dash-two.component';

describe('PassangerDashTwoComponent', () => {
  let component: PassangerDashTwoComponent;
  let fixture: ComponentFixture<PassangerDashTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassangerDashTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassangerDashTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
