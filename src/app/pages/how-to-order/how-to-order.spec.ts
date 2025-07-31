import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToOrder } from './how-to-order';

describe('HowToOrder', () => {
  let component: HowToOrder;
  let fixture: ComponentFixture<HowToOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
