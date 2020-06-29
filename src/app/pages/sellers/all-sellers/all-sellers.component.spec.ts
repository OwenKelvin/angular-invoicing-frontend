import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSellersComponent } from './all-sellers.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('AllSellersComponent', () => {
  let component: AllSellersComponent;
  let fixture: ComponentFixture<AllSellersComponent>;

  beforeEach(async(() => {
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
        ModalModule.forRoot()
      ],
      providers: [
        reducerProvider,
      ],
      declarations: [ AllSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
