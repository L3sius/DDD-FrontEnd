import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

interface DropdownValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-shipment-page',
  templateUrl: './shipment-page.component.html',
  styleUrls: ['./shipment-page.component.css'],
})
export class ShipmentPageComponent {
  shipmentForm: FormGroup;
  selectedValue: string;

  cities: DropdownValues[] = [
    { value: 'Vilnius', viewValue: 'Vilnius' },
    { value: 'Kaunas', viewValue: 'Kaunas' },
    { value: 'Klaipėda', viewValue: 'Klaipėda' },
  ];

  sizes: DropdownValues[] = [
    { value: 'extrasmall', viewValue: 'XS: 8,5 x 19 x 61cm; 1kg' },
    { value: 'small', viewValue: 'S: 8,5 x 44 x 61 cm; 5kg' },
    { value: 'medium', viewValue: 'M: 18 x 44 x 61 cm; 10kg' },
    { value: 'large', viewValue: 'L: 37 x 44 x 61 cm; 20kg' },
    { value: 'extralarge', viewValue: 'XL: 50 x 50 x 61 cm; 31,5kg' },
  ];

  speeds: DropdownValues[] = [
    { value: 'slow', viewValue: 'Slow Delivery (5 days)' },
    { value: 'medium', viewValue: 'Medium Delivery (3 days)' },
    { value: 'fast', viewValue: 'Fast Delivery (1 day)' },
  ];

  constructor(
    private router: Router // private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.shipmentForm = new FormGroup({
      valueFrom: new FormControl(null, [Validators.required]),
      valueTo: new FormControl(null, [Validators.required]),
      shipmentSize: new FormControl(null, [Validators.required]),
      fragileCheckBox: new FormControl(false, []),
      deliverySpeed: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    if (this.shipmentForm.invalid) {
      return;
    }
    // TODO: Finish authService navigation
    // this.authService.login(this.loginForm.value).pipe(
    //   map(token => this.router.navigate(['service-page']))
    // ).subscribe();
    console.log(this.shipmentForm.value);
    this.router.navigate(['sender-page']);
  }
  generatePrice(priceLabel) {
    document.getElementById(priceLabel).innerHTML = '19.99';
  }
}
