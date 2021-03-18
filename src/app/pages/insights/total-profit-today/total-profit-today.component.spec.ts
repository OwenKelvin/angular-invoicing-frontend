import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProfitTodayComponent } from './total-profit-today.component';

describe('TotalProfitTodayComponent', () => {
  let component: TotalProfitTodayComponent;
  let fixture: ComponentFixture<TotalProfitTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalProfitTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalProfitTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
