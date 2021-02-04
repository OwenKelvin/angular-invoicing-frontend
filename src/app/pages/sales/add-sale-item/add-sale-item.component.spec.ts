import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddSaleItemComponent } from './add-sale-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import {NgSelectModule} from '@ng-select/ng-select';
import { AppInputModule } from 'src/app/shared/components/input/app-input.module';
import { of } from 'rxjs';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
describe('AddSaleItemComponent', () => {
  let component: AddSaleItemComponent;
  let fixture: ComponentFixture<AddSaleItemComponent>;

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
        NgSelectModule,
        AppInputModule
      ],
      declarations: [AddSaleItemComponent],
      providers: [reducerProvider,
        provideMockStore({ initialState: { cart: [] } }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
