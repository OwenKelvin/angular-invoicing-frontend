import {NgModule} from '@angular/core';
import {ToastComponent} from './toast.component';
import {CommonModule} from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [CommonModule, ReactiveComponentModule],
  declarations: [ToastComponent],
  exports: [ToastComponent]
})

export class AppToastModule { }
