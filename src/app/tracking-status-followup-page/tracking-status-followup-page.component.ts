import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  fetchTrackingStatusPageState,
  trackingStatusPageState,
} from '../order-store/store.selector';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { TrackingInformation } from '../models/tracking';

// For testing table

// export interface PeriodicElement {
//   city: string;
//   date: string;
//   orderState: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { city: 'Hydrogen', date: '1.0079', orderState: 'H' },
//   { city: 'Helium', date: '4.0026', orderState: 'He' },
//   { city: 'Lithium', date: '6.941', orderState: 'Li' },
// ];

@Component({
  selector: 'app-tracking-status-followup-page',
  templateUrl: './tracking-status-followup-page.component.html',
  styleUrls: ['./tracking-status-followup-page.component.css'],
})
export class TrackingStatusFollowupPageComponent implements OnInit {
  private trackingNumber: string;
  private baseUrl = environment.baseUrl;
  displayedColumns: string[] = ['city', 'date', 'orderState'];
  // public dataSource = ELEMENT_DATA;
  public dataSource;

  constructor(
    @Inject(DOCUMENT) document,
    public store: Store,
    public http: HttpClient
  ) {
    this.trackingStatusPageData$ = store.select(fetchTrackingStatusPageState);
  }

  trackingStatusPageData$: Observable<trackingStatusPageState>;

  ngOnInit(): void {
    this.trackingStatusPageData$.subscribe((response) => {
      this.trackingNumber = response.trackingNumber;
    });

    document.getElementById('trackingLabel').innerHTML =
      'Your tracking number is: ' + this.trackingNumber;

    this.fetchInfo().subscribe((response) => {
      this.dataSource = response;
    });
  }

  public fetchInfo(): Observable<TrackingInformation> {
    return this.http.get<TrackingInformation>(
      `${this.baseUrl}/track/${this.trackingNumber}`
    );
  }
}
