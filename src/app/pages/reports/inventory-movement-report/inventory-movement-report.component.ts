import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formMixin } from 'src/app/mixins/form.mixin';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-inventory-movement-report',
  templateUrl: './inventory-movement-report.component.html',
  styleUrls: ['./inventory-movement-report.component.less']
})
export class InventoryMovementReportComponent extends formMixin() {
  products$ = this.productsService.loadProducts$;
  itemForm: FormGroup = this.fb.group({
    productId: [null, [Validators.required]]
  })
  constructor(private fb: FormBuilder, private productsService: ProductsService) {
    super();
  }

}
