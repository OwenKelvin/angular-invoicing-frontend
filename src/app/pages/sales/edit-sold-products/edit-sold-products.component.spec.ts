import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditSoldProductsComponent } from './edit-sold-products.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN , metaReducers, reducerProvider} from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditSoldProductsComponent', () => {
  let component: EditSoldProductsComponent;
  let fixture: ComponentFixture<EditSoldProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule.forRoot(),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        HttpClientTestingModule
      ],
      declarations: [ EditSoldProductsComponent ],
      providers: [
        reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSoldProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
