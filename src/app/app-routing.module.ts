import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ShipmentPageComponent } from './shipment-page/shipment-page.component';
import { SenderPageComponent } from './sender-page/sender-page.component';
import { ReceiverPageComponent } from './receiver-page/receiver-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'shipment-page', component: ShipmentPageComponent },
  { path: 'sender-page', component: SenderPageComponent },
  { path: 'receiver-page', component: ReceiverPageComponent },
  { path: 'payment-page', component: PaymentPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
