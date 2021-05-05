import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
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
    this.router.navigate(['receiver-page']);
    // this.authService.register(this.receiverForm.value).pipe(
    //   map(user => this.router.navigate(['login-page']))
    // ).subscribe();
  }
}
