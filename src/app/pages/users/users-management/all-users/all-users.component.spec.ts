import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllUsersComponent } from './all-users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {AppPrintModule} from '../../../../shared/print/print.module';

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppPrintModule
      ],
      declarations: [ AllUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
