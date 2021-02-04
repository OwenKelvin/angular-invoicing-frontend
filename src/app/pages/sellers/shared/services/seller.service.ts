import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { ISeller } from '../interfaces/seller.interface';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { loadSellers } from '../../store/actions/seller.actions';
import { selectAllSellers } from '../../store/selectors/seller.selectors';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private store: Store, private http: HttpClient) { }

  sellersLoaded = false;

  sellers$: Observable<ISeller[]> = this.http.get('api/sellers').pipe(
    map((res: any[]) => (res.map(item => ({
      id: item.id,
      name: item.name,
      description: item.description
    })))),
    tap(() => this.sellersLoaded = true)
  );

  loadSellers$: Observable<any> = this.store.pipe(
    select(selectAllSellers),
    tap(({ length }) => (length < 1 && !this.sellersLoaded ) ? this.store.dispatch(loadSellers()) : ''),
  );

  deleteSeller(id: number) {
    return this.http.delete(`api/sellers/${id}`);
  }

  saveSeller(value: ISeller): Observable<ISeller> {

    let url = `api/sellers/${value.id}`;
    if (value.id === 0) {
      url = 'api/sellers';
      return this.http.post(url, {
        description: value.description,
        name: value.name
      }).pipe(
        map((res: any) => res.data),
        map((item: any) => ({
          id: item.id,
          name: item.name,
          description: item.description
        }))
      );
    }
    return this.http.post(url, {
      _method: 'PATCH',
      description: value.description,
      name: value.name
    }).pipe(
      map((res: any) => res.data),
      map((item: any) => ({
        id: item.id,
        name: item.name,
        description: item.description
      }))
    );
  }
}
