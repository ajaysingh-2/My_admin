import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ReportsComponent} from './pages/reports/reports.component';
import {UsersComponent} from './pages/users/users.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddUserComponent } from './pages/add-user/add-user.component';
import { RemoveUserComponent } from './pages/remove-user/remove-user.component';
import { CouponOfferComponent } from './pages/coupon-offer/coupon-offer.component';
import { OrderTrackingComponent } from './pages/order-tracking/order-tracking.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';
import { FaqComponent } from './pages/faq/faq.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportsComponent,
    UsersComponent,
    AddUserComponent,
    RemoveUserComponent,
    CouponOfferComponent,
    OrderTrackingComponent,
    DialogComponent,
    FaqComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
