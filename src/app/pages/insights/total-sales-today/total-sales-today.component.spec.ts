import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSalesTodayComponent } from './total-sales-today.component';

describe('TotalProfitTodayComponent', () => {
  let component: TotalSalesTodayComponent;
  let fixture: ComponentFixture<TotalSalesTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalSalesTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSalesTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
