import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { saveReceiverPageForm } from '../order-store/store.actions';

@Component({
  selector: 'app-receiver-page',
  templateUrl: './receiver-page.component.html',
  styleUrls: ['./receiver-page.component.css'],
})
export class ReceiverPageComponent implements OnInit {
  receiverForm: FormGroup;
  phoneRegex = new RegExp('^(3706|\\+3706|86)+[0-9]{7}$');
  postalCodeRegex = new RegExp('^[0-9]{6,6}$');
  constructor(
    // private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.receiverForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(this.phoneRegex)]],
      email: [null, [Validators.required, Validators.email]],
      city: [null, [Validators.required]],
      address: [null, [Validators.required]],
      postalCode: [
        null,
        [Validators.required, Validators.pattern(this.postalCodeRegex)],
      ],
      additionalInformation: [null, [Validators.maxLength(100)]],
    });
  }

  onSubmit() {
    if (this.receiverForm.invalid) {
      return;
    }

    console.log(this.receiverForm.value);
    this.store.dispatch(
      saveReceiverPageForm({
        name: this.receiverForm.get('name').value,
        phone: this.receiverForm.get('phone').value,
        email: this.receiverForm.get('email').value,
        city: this.receiverForm.get('city').value,
        address: this.receiverForm.get('address').value,
        postalCode: this.receiverForm.get('postalCode').value,
        additionalInformation: this.receiverForm.get('additionalInformation')
          .value,
      })
    );
    this.router.navigate(['payment-page']);
    // this.authService.register(this.receiverForm.value).pipe(
    //   map(user => this.router.navigate(['login-page']))
    // ).subscribe();
  }
}
