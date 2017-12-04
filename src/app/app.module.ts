import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import { AppComponent } from './app.component';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { LoginComponent } from './login/login.component';
import { PartnerDetailComponent } from './partner-list/partner-detail/partner-detail.component';
import { UserService } from './user.service';
import { PartnerItemComponent } from './partner-list/partner-item/partner-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PartnerListComponent,
    LoginComponent,
    PartnerDetailComponent,
    PartnerItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCardModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
