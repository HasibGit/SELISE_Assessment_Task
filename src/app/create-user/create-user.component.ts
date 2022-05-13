import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { formatDate } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs';
import {
  HttpClient,
  HttpClientModule,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { DataStorageService } from '../data-storage.service';
import { User } from '../user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorSnackbarComponent } from '../error-snackbar/error-snackbar.component';
import { SuccessSnackbarComponent } from '../success-snackbar/success-snackbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit, OnDestroy {
  userForm: FormGroup = null;
  minDate = new Date();
  maxDate = new Date(this.minDate.getFullYear() - 100, 0, 1); // yy/mm/dd  ** month starts from 0
  cities: string[];
  filteredOptions: Observable<string[]>;
  newUser: User;
  error = null;
  errorSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dataStorageService: DataStorageService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.http
    //   .get('https://countriesnow.space/api/v0.1/countries')
    //   .subscribe((response: any) => {
    //     // console.log(response.data);
    //     for (let country of response.data.splice(0, 500)) {
    //       for (let city of country.cities) {
    //         this.cities.push(city);
    //       }
    //     }
    //   });

    this.errorSubscription = this.dataStorageService.error.subscribe(
      (errorMsg) => {
        this.error = errorMsg;
      }
    );

    this.cities = this.dataStorageService.getCities();

    this.createUserForm();

    this.filteredOptions = this.userForm.controls['City'].valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  createUserForm() {
    this.userForm = this.fb.group({
      FirstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      LastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      Email: ['', [Validators.email, Validators.required]],
      Sex: ['', [Validators.required]],
      DateOfBirth: ['', [Validators.required]],
      City: ['', []],
      PhoneNumber: ['', [Validators.required, Validators.minLength(11)]],
    });
  }

  numericOnly(event) {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  onSaveUser() {
    this.newUser = this.userForm.value;
    this.dataStorageService.saveUser(this.newUser);

    if (this.error) {
      this.errorSnackBar();
      this.userForm.reset();
    } else {
      this.successSnackBar();
      this.router.navigate(['/users']);
    }
  }

  errorSnackBar() {
    this._snackBar.openFromComponent(ErrorSnackbarComponent, {
      duration: 3000,
    });
  }

  successSnackBar() {
    this._snackBar.openFromComponent(SuccessSnackbarComponent, {
      duration: 3000,
    });
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
