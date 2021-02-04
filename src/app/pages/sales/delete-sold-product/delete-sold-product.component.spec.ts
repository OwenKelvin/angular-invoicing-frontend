import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteSoldProductComponent } from './delete-sold-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { ModalModule } from 'ngx-bootstrap/modal';
import { of } from 'rxjs';

describe('DeleteSoldProductComponent', () => {
  let component: DeleteSoldProductComponent;
  let fixture: ComponentFixture<DeleteSoldProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
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
      declarations: [ DeleteSoldProductComponent ],
      providers: [reducerProvider, 
        {
          provide: Store,
          useValue: {
            pipe: () => of([]),
            dispatch: () => {}
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSoldProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
