import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

interface IInventoryMovement {
  id: number;
  quantity: number;
  type: 'sale' | 'purchase' | 'adjustment';
  dateTime: string;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryQuantityService {

  adjustment: { [id: number]: number; } = {};
  adjustmentsSubject$ = new BehaviorSubject<{ [id: number]: number; }>({});
  adjustmentsAction$ = this.adjustmentsSubject$.asObservable();

  adjustQuantity({id, adjustment, reason}: { id: number, adjustment: number, reason: string }): Observable<any> {
    return this.http.post(`api/products/${id}/inventory-quantity`, {adjustment, reason}).pipe(
      tap((res: any) => this.adjustment = {...this.adjustment, [res.data.product_id]: res.data.adjustment}),
      tap(() => this.adjustmentsSubject$.next({...this.adjustment})),
    );
  }

  quantityForProductWithId(id: number): Observable<any> {
    return this.http.get(`api/products/${id}/inventory-quantity`).pipe(
      tap(() => this.adjustment = {}),
      tap(() => this.adjustmentsSubject$.next({}))
    );
  }

  changesStatement(productId: number) {
    return this.http.get<IInventoryMovement[]>(`api/products/${productId}/inventory-changes-statement`)
      .pipe(
        map(movement => movement.sort(({dateTime: a}, {dateTime: b}) =>
          new Date(a) > new Date(b) ? 1 : -1
        )),
        map(movement => movement.reduce((prev: IInventoryMovement[], next, index) =>
            ([...prev, {...next, total: index === 0 ? next.quantity : prev[index - 1].total + next.quantity}]),
          [])
        ));
  }

  constructor(
    private http: HttpClient
  ) {
  }
}
