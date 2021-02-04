import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { tap, filter } from 'rxjs/operators';
import { selectStaffTypes } from '../../store/selectors/staff-type.selectors';
import { loadStaffTypes } from '../../store/actions/staff-type.actions';

@Injectable({
  providedIn: 'root'
})
export class RolesAndPermissionsService {

  loadAllStaffTypes$: Observable<any> = this.store.pipe(
    select(selectStaffTypes),
    filter(res => Number(res?.length) < 2),
    tap(() => this.store.dispatch(loadStaffTypes()))
  );

  staffTypes(): Observable<any>{
    return this.http.get(`api/permissions-and-roles/roles/?staff=${true}`);
  }
  updatePermissionForRoleWithId(roleId: number, data: { name: any; hasPermission: any; }) {
    return this.http.post(`api/permissions-and-roles/roles/${roleId}`, { ...data, _method: 'PATCH'});
  }
  getAllPermissionsStatusForRole(id: number): any {
    return this.http.get(`api/permissions-and-roles/roles/${id}?allPermissions=${true}`);
  }
  getRoleWithId(id: number): any {
    return this.http.get(`api/permissions-and-roles/roles/${id}`);
  }

  constructor(private http: HttpClient, private store: Store) { }

  get roles$(): Observable<any> {
    return this.http.get('api/permissions-and-roles/roles');
  }
}
