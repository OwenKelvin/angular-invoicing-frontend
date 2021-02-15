import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {formMixin} from 'src/app/mixins/form.mixin';
import {ProductsService} from 'src/app/shared/services/products.service';
import {BehaviorSubject, combineLatest, Subject} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {InventoryQuantityService} from '../../inventory/services/inventory-quantity.service';

@Component({
  selector: 'app-inventory-movement-report',
  templateUrl: './inventory-movement-report.component.html',
  styleUrls: ['./inventory-movement-report.component.less']
})
export class InventoryMovementReportComponent extends formMixin() {
  products$ = this.productsService.loadProducts$;
  itemForm: FormGroup = this.fb.group({
    productId: [null, [Validators.required]],
    startDate: [(new Date()).toISOString().substring(0, 10)]
  });
  submitSubject$ = new Subject();
  dateSubject$ = new Subject<string>();
  movements$ = this.submitSubject$.pipe(
    switchMap(() =>
      this.inventoryService.changesStatement(this.itemForm.value.productId)),
    tap(() => this.dateSubject$.next(this.startDateControl.value))
  );

  datedMovement$ = combineLatest([this.movements$, this.dateSubject$.asObservable()]).pipe(
    map(([movement, date]) => ({
      ...movement,
      inventoryStatement: movement.inventoryStatement.filter(({dateTime}) =>
        new Date(dateTime) > new Date(date)),
      // unfilteredInventoryStatement: movement,
      total: movement.inventoryStatement.reduce((prev, {quantity}) => prev + quantity, 0)
    }))
  );

  get startDateControl() {
    return this.itemForm.get('startDate') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private inventoryService: InventoryQuantityService
  ) {
    super();
  }

  getStatement() {
    this.submitSubject$.next();
  }
}
