import { Component, OnInit } from '@angular/core';
import { takeWhile, map, tap, mergeMap, take } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { loadSupportStaffsSuccess, loadSupportStaffByIdSuccess } from '../../store/actions/support-staff.actions';
import { selectSupportStaffWithId } from '../../store/selectors/support-staff.selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user-info',
  templateUrl: './view-user-info.component.html',
  styleUrls: ['./view-user-info.component.less']
})
export class ViewUserInfoComponent {

  routeId = this.route.parent?.paramMap.pipe(map(params => Number(params.get('id'))));

  userProfile$ = this.routeId?.pipe(
    mergeMap((id) => this.store.pipe(select(selectSupportStaffWithId(id)))),
  );

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  changeProfile(fieldName: string, $event: string | number) {
    this.routeId?.pipe(
      tap(id => this.store.dispatch(loadSupportStaffByIdSuccess({
        data: { id, [fieldName]: $event }
      }))),
      take(1)
    ).subscribe()
    // this.store.dispatch(loadSupportStaffsSuccess({
    //   data: {
    //     // id: this.teacherId,
    //     [fieldName]: $event,
    //   }
    // }));
  }
  updateSelectValue(fieldName: string, $event: { id: number, name: string; }) {
    this.routeId?.pipe(
      tap(id => this.store.dispatch(loadSupportStaffByIdSuccess({
        data: { id, [fieldName + '_id']: $event.id, [fieldName + '_name']: $event.name }
      }))),
      take(1)
    ).subscribe()
    // this.store.dispatch(loadSupportStaffsSuccess({
    //   data: {
    //     // id: this.teacherId,
    //     [fieldName + '_id']: $event.id,
    //     [fieldName + '_name']: $event.name,
    //   }
    // }));

  }

}
