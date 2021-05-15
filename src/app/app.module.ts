import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {
  senderPageReducer,
  shipmentPageReducer,
  receiverPageReducer,
  trackingStatusPageReducer,
} from './order-store/store.reducer';
import {
  DialogPaymentOverview,
  PaymentPageComponent,
} from './payment-page/payment-page.component';
import { ReceiverPageComponent } from './receiver-page/receiver-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {
  DialogRestorePasswordOverview,
  RestorePasswordPageComponent,
} from './restore-password-page/restore-password-page.component';
import { SelfServicePageComponent } from './self-service-page/self-service-page.component';
import { SenderPageComponent } from './sender-page/sender-page.component';
import { AuthHttpInterceptor } from './services/auth/auth-http-interceptor';
import { ShipmentPageComponent } from './shipment-page/shipment-page.component';
import { TrackingStatusFollowupPageComponent } from './tracking-status-followup-page/tracking-status-followup-page.component';
import { TrackingStatusPageComponent } from './tracking-status-page/tracking-status-page.component';
import { MatTableModule } from '@angular/material/table';

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
    HttpClientModule,
    MatTableModule,
    StoreModule.forRoot({
      shipmentPage: shipmentPageReducer,
      senderPage: senderPageReducer,
      receiverPage: receiverPageReducer,
      trackingStatusPage: trackingStatusPageReducer,
    }),
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
