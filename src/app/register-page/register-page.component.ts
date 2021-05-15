import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { RegisterContent } from '../models/register';
import { Location } from '@angular/common';

class CustomValidators {
  static passwordContainsNumber(control: AbstractControl): ValidationErrors {
    const regex = /\d/;

    if (regex.test(control.value) && control.value !== null) {
      return null;
    } else {
      return { passwordInvalid: true };
    }
  }

  static passwordsMatch(control: AbstractControl): ValidationErrors {
    const password = control.get('password').value;
    const passwordConfirm = control.get('passwordConfirm').value;

    if (
      password === passwordConfirm &&
      password !== null &&
      passwordConfirm !== null
    ) {
      return null;
    } else {
      return { passwordsNotMatching: true };
    }
  }
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  phoneRegex = new RegExp('^(3706|\\+3706|86)+[0-9]{7}$');
  private baseUrl = environment.baseUrl;
  registerContent: RegisterContent[];

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: [null, [Validators.required]],
        username: [null, [Validators.required, Validators.minLength(6)]],
        email: [null, [Validators.required, Validators.email]],
        phone: [
          null,
          [Validators.required, Validators.pattern(this.phoneRegex)],
        ],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(6),
            CustomValidators.passwordContainsNumber,
          ],
        ],
        passwordConfirm: [null, [Validators.required]],
      },
      {
        validators: CustomValidators.passwordsMatch,
      }
    );
  }

  get password() {
    return this.registerForm.get('password');
  }
  get passwordConfirm() {
    return this.registerForm.get('passwordConfirm');
  }
  onPasswordInput() {
    if (this.registerForm.hasError('passwordsNotMatching'))
      this.passwordConfirm.setErrors([{ passwordsNotMatching: true }]);
    else this.passwordConfirm.setErrors(null);
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    var name = this.registerForm.get('name').value;
    var username = this.registerForm.get('username').value;
    var email = this.registerForm.get('email').value;
    var number = this.registerForm.get('phone').value;
    var password = this.registerForm.get('password').value;
    var registerContent: RegisterContent = {
      name,
      username,
      email,
      number,
      password,
    };
    console.log(registerContent);

    this.http
      .post(`${this.baseUrl}/register`, registerContent, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response',
      })
      .subscribe(
        () => {
          alert('Account created succesfully, you can login now.');
          this.location.replaceState('/');
          this.router.navigate(['/login-page']);
        },
        (error) => console.log(error)
      );
  }
}
