import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { PartnerDetailComponent } from './partner-list/partner-detail/partner-detail.component';
import { Error404Component } from './error-404/error-404.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'partnerList', component: PartnerListComponent },
  { path: 'partnerDetail/:id/:inactive', component: PartnerDetailComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
