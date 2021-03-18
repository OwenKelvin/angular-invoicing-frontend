import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalProfitTodayComponent } from './total-profit-today.component';



@NgModule({
    declarations: [TotalProfitTodayComponent],
    exports: [
        TotalProfitTodayComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TotalProfitTodayModule { }
