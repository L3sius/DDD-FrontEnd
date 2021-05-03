import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ShipmentPageComponent } from './shipment-page/shipment-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SenderPageComponent } from './sender-page/sender-page.component';
import { ReceiverPageComponent } from './receiver-page/receiver-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ShipmentPageComponent,
    SenderPageComponent,
    ReceiverPageComponent,
    PaymentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  exports: [MatSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
