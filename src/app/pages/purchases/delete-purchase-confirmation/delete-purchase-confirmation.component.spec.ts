import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeletePurchaseConfirmationComponent } from './delete-purchase-confirmation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule, Store } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('DeletePurchaseConfirmationComponent', () => {
  let component: DeletePurchaseConfirmationComponent;
  let fixture: ComponentFixture<DeletePurchaseConfirmationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        reducerProvider,
        {
          provide: Store,
          useValue: {
            dispatch: () => true,
            pipe: of(1)
          }
        }
      ],
      declarations: [ DeletePurchaseConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePurchaseConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
