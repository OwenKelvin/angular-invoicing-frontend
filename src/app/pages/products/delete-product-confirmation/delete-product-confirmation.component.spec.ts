import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteProductConfirmationComponent } from './delete-product-confirmation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { of } from 'rxjs';

describe('DeleteProductConfirmationComponent', () => {
  let component: DeleteProductConfirmationComponent;
  let fixture: ComponentFixture<DeleteProductConfirmationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      declarations: [DeleteProductConfirmationComponent],
      providers: [
        reducerProvider,
        {
          provide: Store,
          useValue: {
            pipe: () => of(true),
            dispatch: () => { }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
