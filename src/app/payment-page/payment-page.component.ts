import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  fetchShipmentPageState,
  ShipmentPageState,
} from '../order-store/shipment-page-store/shipment-page.selector';

export interface DialogData {
  trackingNumber: string;
}

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  storeData$: Observable<ShipmentPageState>;
  constructor(public dialog: MatDialog, store: Store) {
    this.storeData$ = store.select(fetchShipmentPageState);
  }
  ngOnInit(): void {
    this.storeData$.subscribe((response) => {
      console.log(response);
    });
  }
  public clickedImage(message: string) {
    if (message != 'cash') alert('This option is currently unavailable!');
    else {
      const dialogRef = this.dialog.open(DialogPaymentOverview, {
        width: '300px',
        data: {},
      });
      // TODO: We will need to send data to BE

      // dialogRef.afterClosed().subscribe((result) => {
      //   console.log('The dialog was closed');
      // });
    }
  }
}

@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog.html',
})
export class DialogPaymentOverview {
  constructor(
    public dialogRef: MatDialogRef<DialogPaymentOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
