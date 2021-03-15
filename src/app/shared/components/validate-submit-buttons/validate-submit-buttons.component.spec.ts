import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ValidateSubmitButtonsComponent } from './validate-submit-buttons.component';
import { FormGroup } from '@angular/forms';
import {AppToastModule} from '../toast/toast.module';

describe('ValidateSubmitButtonsComponent', () => {
  let component: ValidateSubmitButtonsComponent;
  let fixture: ComponentFixture<ValidateSubmitButtonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppToastModule
      ],
      declarations: [ ValidateSubmitButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateSubmitButtonsComponent);
    component = fixture.componentInstance;
    component.formItem = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
