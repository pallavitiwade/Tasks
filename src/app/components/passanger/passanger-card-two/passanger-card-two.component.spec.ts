import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerCardTwoComponent } from './passanger-card-two.component';

describe('PassangerCardTwoComponent', () => {
  let component: PassangerCardTwoComponent;
  let fixture: ComponentFixture<PassangerCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassangerCardTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassangerCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
