import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  private token: string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]),
    });
  }
  onSubmit(user: User) {
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);

    this.authService.logIn(user).subscribe(
      (response) => {
        sessionStorage.setItem('authorization', response.body);
        this.location.replaceState('/');
        this.router.navigate(['self-service-page']);
      },
      (error) => {
        console.log(error.status);
      }
    );
  }
}
