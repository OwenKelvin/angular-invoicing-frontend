import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile, debounceTime, filter, finalize, switchMap, tap } from 'rxjs/operators';
import { UsersService } from '../../../services/users.service';
import { SupportStaffService } from '../../../services/support-staff.service';
import { EmailValidatorDirective } from 'src/app/shared/validators/email.validator';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit, OnDestroy {

  constructor(
    private users: UsersService,
    private fb: FormBuilder,
    private router: Router,
    private supportStaffService: SupportStaffService,
    private route: ActivatedRoute
  ) { }
  get email(): FormControl {
    return this.newStaffForm.get('email') as FormControl;
  }

  newStaffInitialForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    middleName: [''],
    otherNames: [''],
    religion: [''],
    gender: [''],
    phone: [''],
    namePrefix: ['']
  });
  newStaffForm: FormGroup = this.newStaffInitialForm;
  submittingSubject$ = new BehaviorSubject<boolean>(false);
  submittingAction$ = this.submittingSubject$.asObservable();
  staffType$ = this.route.paramMap
    .pipe(
      map(params => Number(params.get('id'))),
      mergeMap(id => this.supportStaffService.loadStaffTypeWithId$(id)),
    );
  triggerValidation: boolean;
  componentIsActive = true;
  confirmData: boolean;
  usersData: any;
  confirmedData: boolean;
  resetForm = () => this.newStaffForm = this.newStaffInitialForm;

  ngOnInit() {
    this.subscribeToEmailChecking();
    this.staffType$.subscribe();
  }


  subscribeToEmailChecking(): void {
    this.email.valueChanges.pipe(
      debounceTime(1000),
      filter(() => !(new EmailValidatorDirective()).validate(this.email)),
      switchMap((event) => this.users.findIfEmailExists(event)),
      takeWhile(() => this.componentIsActive))
      .subscribe(data => {
        this.confirmData = false;
        if (data) {
          this.confirmData = true;
        }
        this.usersData = data;
        this.confirmedData = true;
      });
  }
  updateFieldsForEmail() {
    const data = {
      firstName: this.usersData.first_name,
      lastName: this.usersData.last_name,
      middleName: this.usersData.middle_name,
      otherNames: this.usersData.other_names,
      dateOfBirth: this.usersData.date_of_birth,
      phone: this.usersData.phone,
      namePrefix: this.usersData.name_prefix_id,
      email: this.usersData.email,
    };

    this.newStaffForm.setValue(data);
    this.confirmData = false;
    this.confirmedData = true;
  }
  clearEmail() {
    this.usersData = null;
    this.confirmData = false;
    this.confirmedData = false;
    this.resetForm();
  }
  submitNewStaffForm() {
    this.submittingSubject$.next(true);
    this.staffType$.pipe(
      filter(staffType => !!staffType),
      map(staffType => staffType?.id),
      mergeMap((id) => this.supportStaffService.save({ ...this.newStaffForm.value, staff_type: id })),
      takeWhile(() => this.componentIsActive),
      finalize(() => this.submittingSubject$.next(false)),
    ).subscribe({ next: (res) => this.router.navigate(['/users', res.data.id, 'info']) });
  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
