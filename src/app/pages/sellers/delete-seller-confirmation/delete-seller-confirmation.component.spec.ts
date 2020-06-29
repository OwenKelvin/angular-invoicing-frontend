import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSellerConfirmationComponent } from './delete-seller-confirmation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DeleteSellerConfirmationComponent', () => {
  let component: DeleteSellerConfirmationComponent;
  let fixture: ComponentFixture<DeleteSellerConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
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
