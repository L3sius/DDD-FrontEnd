import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { paymentContent } from '../models/payment';
import { SenderInfo } from '../models/senderInfo';
import {
  fetchReceiverPageState,
  fetchSenderPageState,
  fetchShipmentPageState,
  ReceiverPageState,
  SenderPageState,
  ShipmentPageState,
} from '../order-store/store.selector';
import { AuthService } from '../services/auth/auth.service';

export interface DialogData {
  trackingNumber: string;
}

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  shipmentData$: Observable<ShipmentPageState>;
  senderData$: Observable<SenderPageState>;
  receiverData$: Observable<ReceiverPageState>;
  private baseUrl = environment.baseUrl;

  receiverContent_name: string;
  receiverContent_email: string;
  receivercontent_phoneNumber: string;

  receiverAddressContent_address: string;
  receiverAddressContent_city: string;
  receiverAddressContent_postalCode: string;

  parcelInfoContent_fragileType: boolean;
  parcelInfoContent_sizeType: string;
  parcelInfoContent_speedType: string;

  paymentContent: paymentContent[];

  constructor(
    public dialog: MatDialog,
    store: Store,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.shipmentData$ = store.select(fetchShipmentPageState);
    this.senderData$ = store.select(fetchSenderPageState);
    this.receiverData$ = store.select(fetchReceiverPageState);
  }
  ngOnInit(): void {
    this.senderData$.subscribe((response) => {
      console.log(response);
    });
    this.receiverData$.subscribe((response) => {
      console.log(response);
      this.receiverContent_name = response.name;
      this.receiverContent_email = response.email;
      this.receivercontent_phoneNumber = response.phone;
      this.receiverAddressContent_address = response.address;
      this.receiverAddressContent_city = response.city;
      this.receiverAddressContent_postalCode = response.postalCode;
    });
    this.shipmentData$.subscribe((response) => {
      console.log(response);
      this.parcelInfoContent_fragileType = response.fragileStatus;
      this.parcelInfoContent_sizeType = response.shipmentSize;
      this.parcelInfoContent_speedType = response.deliverySpeed;
    });

    console.log(
      this.fetchSenderAddressInfo()
        .toPromise()
        .then((response) => {
          console.log(response);
        })
    );
  }

  public fetchSenderAddressInfo(): Observable<SenderInfo> {
    return this.http.get<SenderInfo>(`${this.baseUrl}/api/address`);
  }

  public clickedImage(message: string) {
    if (message != 'cash') alert('This option is currently unavailable!');
    else {
      const dialogRef = this.dialog.open(DialogPaymentOverview, {
        width: '300px',
        data: {},
      });

      // dialogRef.afterClosed().subscribe((result) => {
      //   console.log('The dialog was closed');
      // });
    }
    // TODO: We will need to send data to BE
    var paymentContent: paymentContent = {
      sessionToken: this.authService.getToken(),
      receiver: {
        name: this.receiverContent_name,
        email: this.receiverContent_email,
        phoneNumber: this.receivercontent_phoneNumber,
      },
      senderAddressId: 1,
      receiverAddress: {
        address: this.receiverAddressContent_address,
        city: this.receiverAddressContent_city,
        postalCode: this.receiverAddressContent_postalCode,
      },

      parcelInfo: {
        fragileType: this.parcelInfoContent_fragileType ? 1 : 0,
        sizeType: this.parcelInfoContent_sizeType,
        speedType: this.parcelInfoContent_speedType,
      },
    };
    console.log(paymentContent);

    this.http
      .post(`${this.baseUrl}/order`, paymentContent, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response',
      })
      .subscribe(
        (response) => {
          console.log('order created response.body' + response.body);
          console.log('order created response' + response);
          console.log('order created response.header' + response.headers);
        },
        (error) => console.log(error)
      );
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
