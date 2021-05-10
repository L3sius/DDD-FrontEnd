import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { saveShipmentPageForm } from '../order-store/store.actions';

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

  priceMapping = new Map();

  // temporary$: Observable<ShipmentPageState>;
  // private authService: AuthenticationService
  constructor(private router: Router, private store: Store) {
    // this.temporary$ = store.select(fetchShipmentPageState);
  }

  ngOnInit(): void {
    this.shipmentForm = new FormGroup({
      valueFrom: new FormControl(null, [Validators.required]),
      valueTo: new FormControl(null, [Validators.required]),
      shipmentSize: new FormControl(null, [Validators.required]),
      fragileCheckBox: new FormControl(false, []),
      deliverySpeed: new FormControl(null, [Validators.required]),
    });
    // this.temporary$.subscribe((response) => {
    //   console.log(response);
    // });
    this.priceMapping.set('Vilnius', 1);
    this.priceMapping.set('Kaunas', 2);

    this.priceMapping.set('extrasmall', 0.1);
    this.priceMapping.set('small', 0.2);
    this.priceMapping.set('medium', 0.3);
    this.priceMapping.set('large', 0.4);
    this.priceMapping.set('extralarge', 0.5);

    this.priceMapping.set('slow', 0.5);
    this.priceMapping.set('medium', 1);
    this.priceMapping.set('fast', 2);

    this.priceMapping.set('true', 3);
    this.priceMapping.set('false', 0);
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
    this.store.dispatch(
      saveShipmentPageForm({
        cityFrom: this.shipmentForm.get('valueFrom').value,
        cityTo: this.shipmentForm.get('valueTo').value,
        shipmentSize: this.shipmentForm.get('shipmentSize').value,
        fragileStatus: this.shipmentForm.get('fragileCheckBox').value,
        deliverySpeed: this.shipmentForm.get('deliverySpeed').value,
      })
    );
    this.router.navigate(['sender-page']);
  }
  generatePrice(priceLabel) {
    let totalSum = 0;
    for (const inputValue in this.shipmentForm.controls) {
      let input = this.shipmentForm.get(inputValue).value;
      totalSum += this.priceMapping.get(input.toString());
    }
    document.getElementById(priceLabel).innerHTML = totalSum.toString();
  }
}
