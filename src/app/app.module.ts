import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { LoginComponent } from './login/login.component';
import { PartnerDetailComponent } from './partner-list/partner-detail/partner-detail.component';
import { UserService } from './user.service';
import { PartnerItemComponent } from './partner-list/partner-item/partner-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'partnerList', component: PartnerListComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
//  { path: '**', component: PageNotFoundComponent }
];
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
    MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
