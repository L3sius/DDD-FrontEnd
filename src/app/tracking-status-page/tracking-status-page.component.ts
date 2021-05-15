import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { saveTrackingStatusForm } from '../order-store/store.actions';

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
    private router: Router,
    private store: Store
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

    this.store.dispatch(
      saveTrackingStatusForm({
        trackingNumber: this.trackingStatusForm.get('trackingNumber').value,
      })
    );
    this.router.navigate(['tracking-status-followup-page']);
  }
}
