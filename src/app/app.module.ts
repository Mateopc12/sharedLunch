import { AppRoutingModule } from './app-routing.module';
import { MaterialBundleModule } from './material-bundle/material-bundle.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { LoginComponent } from './login/login.component';
import { PartnerDetailComponent } from './partner-list/partner-detail/partner-detail.component';
import { UserService } from './user.service';
import { PartnerItemComponent } from './partner-list/partner-item/partner-item.component';
import { Error404Component } from './error-404/error-404.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    PartnerListComponent,
    LoginComponent,
    PartnerDetailComponent,
    PartnerItemComponent,
    Error404Component,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialBundleModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
