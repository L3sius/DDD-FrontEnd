import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { addressContent } from '../models/address';
import { orderHistoryContent } from '../models/orderHistory';
import { Token } from '../models/token';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-self-service-page',
  templateUrl: './self-service-page.component.html',
  styleUrls: ['./self-service-page.component.css'],
})
export class SelfServicePageComponent implements OnInit {
  selfServiceForm: FormGroup;
  phoneRegex = new RegExp('^(3706|\\+3706|86)+[0-9]{7}$');
  postalCodeRegex = new RegExp('^[0-9]{6,6}$');
  displayedColumns: string[] = [
    'id',
    'trackingNumber',
    'receiver.name',
    'receiver.phoneNumber',
  ];
  // dataSource = ELEMENT_DATA;
  public dataSource;
  private baseUrl = environment.baseUrl;
  public orderHistory: orderHistoryContent;
  constructor(
    // private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    this.selfServiceForm = this.formBuilder.group({
      city: [null, [Validators.required]],
      address: [null, [Validators.required]],
      postalCode: [
        null,
        [Validators.required, Validators.pattern(this.postalCodeRegex)],
      ],
    });

    this.fetchOrderInfo().subscribe((response) => {
      console.log(response);
      console.log(Object.keys(response).length);
      this.dataSource = response;
    });
  }

  public tokenModel: Token;
  public fetchOrderInfo(): Observable<orderHistoryContent> {
    this.tokenModel = { sessionToken: sessionStorage.getItem('authorization') };
    return this.http.put<orderHistoryContent>(
      `${this.baseUrl}/order`,
      this.tokenModel
    );
  }

  onSubmit() {
    if (this.selfServiceForm.invalid) {
      return;
    }

    console.log(this.selfServiceForm.value);
    var city = this.selfServiceForm.get('city').value;
    var postalCode = this.selfServiceForm.get('postalCode').value;
    var address = this.selfServiceForm.get('address').value;
    var addressContent: addressContent = {
      sessionToken: sessionStorage.getItem('authorization'),
      city,
      postalCode,
      address,
    };
    this.http
      .post(`${this.baseUrl}/address`, addressContent, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response',
      })
      .subscribe(
        () => {
          alert('Information saved succesfully');
        },
        (error) => console.log(error)
      );
  }
}
