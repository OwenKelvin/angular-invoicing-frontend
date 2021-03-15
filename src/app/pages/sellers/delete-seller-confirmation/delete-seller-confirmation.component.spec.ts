import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteSellerConfirmationComponent } from './delete-seller-confirmation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import {NetworkLoadingModule} from '../../../shared/network-loading';
import {AppLoadingBubbleModule} from '../../../shared/components/loading-bubble/app-loading-bubble';

describe('DeleteSellerConfirmationComponent', () => {
  let component: DeleteSellerConfirmationComponent;
  let fixture: ComponentFixture<DeleteSellerConfirmationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      providers: [
        reducerProvider,
        {
          provide: Store,
          useValue: {
            pipe: () => of(true),
            dispatch: () => {}
          }
        }
      ],
      declarations: [ DeleteSellerConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSellerConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
