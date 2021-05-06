import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ShipmentPageComponent } from './shipment-page/shipment-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SenderPageComponent } from './sender-page/sender-page.component';
import { ReceiverPageComponent } from './receiver-page/receiver-page.component';
import {
  DialogPaymentOverview,
  PaymentPageComponent,
} from './payment-page/payment-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { shipmentPageReducer } from './order-store/shipment-page-store/shipment-page.reducer';
import { FaqPageComponent } from './faq-page/faq-page.component';
import {
  DialogRestorePasswordOverview,
  RestorePasswordPageComponent,
} from './restore-password-page/restore-password-page.component';
import { TrackingStatusPageComponent } from './tracking-status-page/tracking-status-page.component';
import { TrackingStatusFollowupPageComponent } from './tracking-status-followup-page/tracking-status-followup-page.component';
import { SelfServicePageComponent } from './self-service-page/self-service-page.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    DialogPaymentOverview,
    FaqPageComponent,
    RestorePasswordPageComponent,
    DialogRestorePasswordOverview,
    TrackingStatusPageComponent,
    TrackingStatusFollowupPageComponent,
    SelfServicePageComponent,
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
    MatCardModule,
    MatDialogModule,
    StoreModule.forRoot({ shipmentPage: shipmentPageReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  entryComponents: [
    PaymentPageComponent,
    DialogPaymentOverview,
    RestorePasswordPageComponent,
    DialogRestorePasswordOverview,
  ],
  exports: [MatSelectModule, MatLabel, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
