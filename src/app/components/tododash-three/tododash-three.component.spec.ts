import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TododashThreeComponent } from './tododash-three.component';

describe('TododashThreeComponent', () => {
  let component: TododashThreeComponent;
  let fixture: ComponentFixture<TododashThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TododashThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TododashThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
