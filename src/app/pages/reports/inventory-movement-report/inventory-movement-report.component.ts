import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {formMixin} from 'src/app/mixins/form.mixin';
import {ProductsService} from 'src/app/shared/services/products.service';
import {Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {InventoryQuantityService} from '../../inventory/services/inventory-quantity.service';

@Component({
  selector: 'app-inventory-movement-report',
  templateUrl: './inventory-movement-report.component.html',
  styleUrls: ['./inventory-movement-report.component.less']
})
export class InventoryMovementReportComponent extends formMixin() {
  products$ = this.productsService.loadProducts$;
  itemForm: FormGroup = this.fb.group({
    productId: [null, [Validators.required]]
  });
  submitSubject$ = new Subject();
  movements$ = this.submitSubject$.pipe(
    switchMap(() =>
      this.inventoryService.changesStatement(this.itemForm.value.productId))
  );

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
