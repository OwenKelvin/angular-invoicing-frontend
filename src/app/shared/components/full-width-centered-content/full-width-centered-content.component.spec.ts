import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullWidthCenteredContentComponent } from './full-width-centered-content.component';

describe('FullWithCenterComponent', () => {
  let component: FullWidthCenteredContentComponent;
  let fixture: ComponentFixture<FullWidthCenteredContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWidthCenteredContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthCenteredContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
