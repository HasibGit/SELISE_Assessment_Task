import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createUserForm();
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
