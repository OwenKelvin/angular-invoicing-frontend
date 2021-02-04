import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/pages/users/services/users.service';
import { selectEditModeOnState } from 'src/app/store/selectors/app.selectors';

@Component({
  selector: 'app-name-item',
  templateUrl: './name-item.component.html',
  styleUrls: ['./name-item.component.css']
})
export class NameItemComponent implements OnInit, OnDestroy {

  @Input() type: string;
  @Input() name: string;
  @Input() label = '';
  // @Input() editMode: boolean = false;
  @Input() userId: number;
  @Output() valueChanged = new EventEmitter();
  itemForm: FormGroup;
  editHovered = false;
  editable = false;
  isSubmitting = false;
  componentIsActive: boolean;
  editMode$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.editMode$ = this.store.pipe(select(selectEditModeOnState));
    this.componentIsActive = true;
    this.itemForm = this.fb.group({
      name: [this.name, Validators.minLength(2)]
    });
    if (['first', 'last', 'email'].includes(this.label.toLocaleLowerCase())) {
      this.itemForm.get('name')?.setValidators([Validators.required, Validators.minLength(2)]);
    }
    this.itemForm.updateValueAndValidity();

  }

  submitFormItem() {
    if (this.itemForm.valid) {
      this.isSubmitting = true;
      const fieldNewValue = this.itemForm.get('name')?.value;
      this.usersService.update({
        fieldName: this.label.replace(' ', ''),
        fieldNewValue,
        userId: this.userId
      })
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe({
          complete: () => this.isSubmitting = false,
          next: () => {
            this.valueChanged.emit(fieldNewValue);
            this.editable = false;
          }
        });
    } else {
      alert('Form not filled correctly');
    }

  }
  ngOnDestroy() {
    this.componentIsActive = false;

  }

}
