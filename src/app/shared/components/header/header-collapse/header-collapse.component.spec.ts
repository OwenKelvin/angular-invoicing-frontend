import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCollapseComponent } from './header-collapse.component';
import { AppLayoutModule } from 'src/app/shared/modules/app-layout.module';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { EffectsModule } from '@ngrx/effects';

describe('HeaderCollapseComponent', () => {
  let component: HeaderCollapseComponent;
  let fixture: ComponentFixture<HeaderCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLayoutModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        EffectsModule.forRoot([])
      ],
      declarations: [HeaderCollapseComponent],
      providers: [
        reducerProvider
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
