import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { SenderInfo } from '../models/senderInfo';
import { Token } from '../models/token';
import { saveSenderPageForm } from '../order-store/store.actions';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-sender-page',
  templateUrl: './sender-page.component.html',
  styleUrls: ['./sender-page.component.css'],
})
export class SenderPageComponent implements OnInit {
  senderForm: FormGroup;
  phoneRegex = new RegExp('^(3706|\\+3706|86)+[0-9]{7}$');
  postalCodeRegex = new RegExp('^[0-9]{5,5}$');
  senderAddressInfo: SenderInfo;
  senderId: number;

  private baseUrl = environment.baseUrl;
  constructor(
    // private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.senderForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(this.phoneRegex)]],
      email: [null, [Validators.required, Validators.email]],
      city: [null, [Validators.required]],
      address: [null, [Validators.required]],
      postalCode: [
        null,
        [Validators.required, Validators.pattern(this.postalCodeRegex)],
      ],
    });
    if (this.authService.getToken()) {
      this.fetchSenderAddressInfo().subscribe((response) => {
        // console.log(response);
        // console.log(Object.keys(response).length);
        //Take first address to send from
        console.log(response[0].id);
        this.senderAddressInfo = {
          id: response[0].id,
          city: response[0].city,
          postalCode: response[0].postalCode,
          address: response[0].address,
        };
        this.senderForm.get('city').setValue(this.senderAddressInfo.city);
        this.senderForm
          .get('postalCode')
          .setValue(this.senderAddressInfo.postalCode);
        this.senderForm.get('address').setValue(this.senderAddressInfo.address);
        console.log(this.senderAddressInfo.address);
      });
    }
  }

  public tokenModel: Token;
  public fetchSenderAddressInfo(): Observable<SenderInfo> {
    this.tokenModel = { sessionToken: sessionStorage.getItem('authorization') };
    return this.http.put<SenderInfo>(
      `${this.baseUrl}/address`,
      this.tokenModel
    );
  }
  onSubmit() {
    if (this.senderForm.invalid) {
      return;
    }

    console.log(this.senderForm.value);
    this.store.dispatch(
      saveSenderPageForm({
        name: this.senderForm.get('name').value,
        phone: this.senderForm.get('phone').value,
        email: this.senderForm.get('email').value,
        city: this.senderForm.get('city').value,
        address: this.senderForm.get('address').value,
        postalCode: this.senderForm.get('postalCode').value,
      })
    );
    this.router.navigate(['receiver-page']);
    // this.authService.register(this.senderForm.value).pipe(
    //   map(user => this.router.navigate(['login-page']))
    // ).subscribe();
  }
}
