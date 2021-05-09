import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { saveSenderPageForm } from '../order-store/store.actions';

@Component({
  selector: 'app-sender-page',
  templateUrl: './sender-page.component.html',
  styleUrls: ['./sender-page.component.css'],
})
export class SenderPageComponent implements OnInit {
  senderForm: FormGroup;
  phoneRegex = new RegExp('^(3706|\\+3706|86)+[0-9]{7}$');
  postalCodeRegex = new RegExp('^[0-9]{6,6}$');
  constructor(
    // private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
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
