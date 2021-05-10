import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking-status-page',
  templateUrl: './tracking-status-page.component.html',
  styleUrls: ['./tracking-status-page.component.css'],
})
export class TrackingStatusPageComponent implements OnInit {
  trackingStatusForm: FormGroup;
  constructor(
    // private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.trackingStatusForm = this.formBuilder.group({
      trackingNumber: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.trackingStatusForm.invalid) {
      return;
    }

    console.log(this.trackingStatusForm.value);
    // this.authService.register(this.trackingStatusForm.value).pipe(
    //   map(user => this.router.navigate(['login-page']))
    // ).subscribe();
    this.router.navigate(['tracking-status-followup-page']);
  }
}
