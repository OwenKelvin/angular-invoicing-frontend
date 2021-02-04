import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllPurchasesComponent } from './all-purchases.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('AllPurchasesComponent', () => {
  let component: AllPurchasesComponent;
  let fixture: ComponentFixture<AllPurchasesComponent>;

  beforeEach(waitForAsync(() => {
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
        ModalModule.forRoot()
      ],
      providers: [
        reducerProvider,
      ],
      declarations: [ AllPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
