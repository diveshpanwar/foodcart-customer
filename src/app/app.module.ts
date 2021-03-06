import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from './common/mat/mat.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { NavigationReducer } from './store/reducers/navigation.reducer';
import { OrderfoodComponent } from './orderfood/orderfood.component';
import { ErrorComponent } from './error/error.component';
import { OrderfoodService } from './services/orderfood.service';
import { SelectfoodComponent } from './selectfood/selectfood.component';
import { PaymentmodalComponent } from './paymentmodal/paymentmodal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    HomeComponent,
    OrderfoodComponent,
    ErrorComponent,
    SelectfoodComponent,
    PaymentmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ navigation: NavigationReducer })
  ],
  providers: [
    OrderfoodService
  ],
  entryComponents: [
    PaymentmodalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
