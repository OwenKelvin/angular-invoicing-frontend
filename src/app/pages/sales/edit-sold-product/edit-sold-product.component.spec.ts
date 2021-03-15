import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditSoldProductComponent } from './edit-sold-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { ModalModule } from 'ngx-bootstrap/modal';
import {AppLinksModule} from '../../../shared/components/links/links.module';

describe('EditSoldProductComponent', () => {
  let component: EditSoldProductComponent;
  let fixture: ComponentFixture<EditSoldProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLinksModule,
        ReactiveFormsModule, HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        ModalModule.forRoot()
      ],
      declarations: [ EditSoldProductComponent ],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSoldProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
