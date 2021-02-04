import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { selectStaffTypes, selectStaffType } from '../store/selectors/staff-type.selectors';
import { filter, tap, map, catchError, mergeMap } from 'rxjs/operators';
import { loadStaffTypes } from '../store/actions/staff-type.actions';
import { selectSupportStaffWithId } from '../users-management/store/selectors/support-staff.selectors';
import { loadSupportStaffById } from '../users-management/store/actions/support-staff.actions';

@Injectable({
  providedIn: 'root'
})
export class SupportStaffService {

  constructor(private store: Store, private http: HttpClient) { }

  loadAllStaffTypes$: Observable<any> = this.store.pipe(
    select(selectStaffTypes),
    filter(res => Number(res?.length) < 2),
    tap(() => this.store.dispatch(loadStaffTypes()))
  );

  loadStaffTypeWithId$ = (id: number) => this.store.pipe(
    select(selectStaffType(id)),
    tap((res) => {
      if (!res) {
        this.store.dispatch(loadStaffTypes());
      }
    })
  )

  staffTypes(): Observable<any> {
    return this.http.get(`api/permissions-and-roles/roles/?staff=${true}`);
  }

  loadStaffWithId$ = (id: number) => this.store.pipe(
    select(selectSupportStaffWithId(id)),
    tap((profile) => profile ? profile : this.store.dispatch(loadSupportStaffById({ data: { id } })))
  )

  getSupportStaffById(id: number): Observable<any> {

    return this.http.get<any>(`api/users/${id}`)
      .pipe(
        map((user) => ({
          ...user,
          firstName: user.first_name,
          middleName: user.middle_name,
          lastName: user.last_name,
          otherNames: user.other_names,
          dateOfBirth: user.date_of_birth,
          teacherId: user.teacher_id
        })),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  update = ({ id, data }: {id: number, data: any }) => this.http.post(`api/users/${id}`, { ...data });

  save(data: any): Observable<any> {

    return this.http.post('api/users', {
      ...data,
      date_of_birth: data.dateOfBirth,
      first_name: data.firstName,
      last_name: data.lastName,
      middle_name: data.middleName,
      other_names: data.otherNames
    });
  }
}
