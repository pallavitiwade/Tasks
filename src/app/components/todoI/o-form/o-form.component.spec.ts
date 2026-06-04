import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OFormComponent } from './o-form.component';

describe('OFormComponent', () => {
  let component: OFormComponent;
  let fixture: ComponentFixture<OFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
