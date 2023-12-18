import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ReportsComponent} from './pages/reports/reports.component';
import {UsersComponent} from './pages/users/users.component';
import {AddUserComponent} from "./pages/add-user/add-user.component";
import {RemoveUserComponent} from "./pages/remove-user/remove-user.component";
import {CouponOfferComponent} from "./pages/coupon-offer/coupon-offer.component";
import {OrderTrackingComponent} from "./pages/order-tracking/order-tracking.component";
import {FaqComponent} from "./pages/faq/faq.component";


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'reports',component:ReportsComponent},
  {path:'users',component:UsersComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'remove-user',component:RemoveUserComponent},
  {path:'coupon-offer',component:CouponOfferComponent},
  {path:'order-tracking',component:OrderTrackingComponent},
  {path:'faq',component:FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
