import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NetworkLoadingComponent } from './network-loading.component';

describe('NetworkLoadingComponent', () => {
  let component: NetworkLoadingComponent;
  let fixture: ComponentFixture<NetworkLoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
