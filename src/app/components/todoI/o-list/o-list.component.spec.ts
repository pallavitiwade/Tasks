import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OListComponent } from './o-list.component';

describe('OListComponent', () => {
  let component: OListComponent;
  let fixture: ComponentFixture<OListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
