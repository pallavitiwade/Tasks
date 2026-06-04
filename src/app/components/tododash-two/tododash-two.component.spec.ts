import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TododashTwoComponent } from './tododash-two.component';

describe('TododashTwoComponent', () => {
  let component: TododashTwoComponent;
  let fixture: ComponentFixture<TododashTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TododashTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TododashTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
