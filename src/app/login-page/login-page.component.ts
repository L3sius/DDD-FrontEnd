import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm: FormGroup;

  // TODO: Check authentication?
  // private token: string;

  constructor(
    private router: Router // private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    // TODO: Finish authService navigation
    // this.authService.login(this.loginForm.value).pipe(
    //   map(token => this.router.navigate(['service-page']))
    // ).subscribe();
    console.log(this.loginForm.value);
    this.router.navigate(['self-service-page']);
  }
}
