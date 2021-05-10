import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-status-followup-page',
  templateUrl: './tracking-status-followup-page.component.html',
  styleUrls: ['./tracking-status-followup-page.component.css'],
})
export class TrackingStatusFollowupPageComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) {}

  trackingNumber: String;
  ngOnInit(): void {
    // TODO: Implement number usage from previous page
    this.trackingNumber = 'some-kind-of-number';
    document.getElementById('trackingLabel').innerHTML =
      'Your tracking number is: ' + this.trackingNumber;
  }
}
