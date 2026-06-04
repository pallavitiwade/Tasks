import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TododashFourComponent } from './tododash-four.component';

describe('TododashFourComponent', () => {
  let component: TododashFourComponent;
  let fixture: ComponentFixture<TododashFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TododashFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TododashFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
