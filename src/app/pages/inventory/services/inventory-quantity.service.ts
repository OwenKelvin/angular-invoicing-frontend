import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryQuantityService {

  adjustment: { [id: number]: number; } = {};
  adjustmentsSubject$ = new BehaviorSubject<{ [id: number]: number; }>({});
  adjustmentsAction$ = this.adjustmentsSubject$.asObservable()

  adjustQuantity({id, adjustment, reason}: {id: number, adjustment: number, reason: string}): Observable<any> {
    return this.http.post(`api/products/${id}/inventory-quantity`, { adjustment, reason }).pipe(
      tap((res: any) => this.adjustment = { ...this.adjustment, [res.data.product_id]: res.data.adjustment }),
      tap(() => this.adjustmentsSubject$.next({...this.adjustment})),
    )
  }
  quantityForProductWithId(id: number): Observable<any> {
    return this.http.get(`api/products/${id}/inventory-quantity`).pipe(
      tap(() => this.adjustment = { }),
      tap(() => this.adjustmentsSubject$.next({ }))
   )
  }

  constructor(
    private http: HttpClient
  ) { }
}
