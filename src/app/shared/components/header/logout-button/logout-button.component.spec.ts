  import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

  import { LogoutButtonComponent } from './logout-button.component';
  import { HttpClientTestingModule } from '@angular/common/http/testing';
  import { Store, StoreModule } from '@ngrx/store';
  import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

  describe('LogoutButtonComponent', () => {
  let component: LogoutButtonComponent;
  let fixture: ComponentFixture<LogoutButtonComponent>;

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
      ],
      providers: [
        reducerProvider,
        {
          provide: Store,
          useValue: {
            pipe: () => ([])
          }
        }
      ],
      declarations: [ LogoutButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
