import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpCacheService } from '../services/http-cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: HttpCacheService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse: HttpResponse<any> | undefined = this.cacheService.get(req.url);
    const cachableUrl: string[] = [

    ]
      .map(item => `/api/${item}`);

    if (req.method === 'GET' && cachableUrl.includes(req.url)) {
      if (cachedResponse) {
        return of(cachedResponse);
      }
      return next.handle(req)
        .pipe(tap(event => {
          if (event instanceof HttpResponse) {
            this.cacheService.put(req.url, event);
          }
        }));
    } else {
      this.cacheService.invalidateCache(); // TODO add logics to invalidate only affected Cache
    }
    return next.handle(req);
  }
}
