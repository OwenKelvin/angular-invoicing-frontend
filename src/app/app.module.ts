import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ScrollSpyDirective} from './shared/directives/scroll-spy.directive';
import {StoreModule} from '@ngrx/store';
import {
  metaReducers, REDUCER_TOKEN, reducerProvider, appFeatureKey, reducers
} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ComponentsModule} from './shared/components/components.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './shared/interceptors/jwt.interceptor';
import {CacheInterceptor} from './shared/interceptors/cache.interceptor';
import {APIInterceptor} from './shared/interceptors/api.interceptor';
import {PagesModule} from './pages/pages.module';
import {EffectsModule} from '@ngrx/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ResMessageInterceptor} from './shared/interceptors/res-message.interceptor';
import {ErrorInterceptor} from './shared/interceptors/error.interceptor';
import {NetworkLoadingModule, NetworkLoadingInterceptor} from './shared/network-loading';
import {ErrorModule} from './shared/components/error/error.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {AppToastModule} from './shared/components/toast/toast.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollSpyDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    AppToastModule,
    StoreModule.forRoot(REDUCER_TOKEN, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot(),
    StoreModule.forFeature(appFeatureKey, reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ComponentsModule,
    NetworkLoadingModule,
    ErrorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ReactiveComponentModule
  ],
  providers: [
    {provide: 'API_URL', useValue: environment.API_URL},
    {provide: HTTP_INTERCEPTORS, useClass: NetworkLoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResMessageInterceptor, multi: true},
    reducerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
