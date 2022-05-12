import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { formatDate } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup = null;
  minDate = new Date();
  maxDate = new Date(this.minDate.getFullYear() - 100, 0, 1); // yy/mm/dd  ** month starts from 0
  options: string[] = ['angular', 'react', 'vue'];
  filteredOptions: Observable<string[]>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createUserForm();

    this.filteredOptions = this.userForm.controls['City'].valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
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
      DateOfBirth: [null, [Validators.required]],
      City: ['', []],
      PhoneNumber: ['', [Validators.required]],
    });
  }
}
