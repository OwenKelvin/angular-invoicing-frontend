import { Component, OnInit } from '@angular/core';
import {InventoryQuantityService} from '../../services/inventory-quantity.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-inventory-movement-management',
  templateUrl: './inventory-movement-management.component.html',
  styleUrls: ['./inventory-movement-management.component.less']
})
export class InventoryMovementManagementComponent implements OnInit {
  inventoryId$ = this.activatedRoute.paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  inventoryStatement$ = this.inventoryId$.pipe(
    switchMap(productId => this.inventoryService.changesStatement(productId))
  );
  constructor(private inventoryService: InventoryQuantityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
