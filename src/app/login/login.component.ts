import { IUser, IMatch } from './user.interface';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'mateo.parra@yuxiglobal.com';
  password = 'mateo';
  loggedUser: IUser;
  currentPartner: IUser;
  partners: IUser[] = [];
  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  login() {
    const authenticate = this.loginService
      .authenticate(this.username, this.password);

    if (authenticate) {
      authenticate.subscribe((user: IUser) => {
        this.loggedUser = user;
        const partnersGetArray: Observable<IUser>[] = [];
        partnersGetArray.push(this.loginService.getPartner(user.currentMatch));
        for (const match of Object.keys(user.matches)) {
          partnersGetArray.push(this.loginService.getPartner(match));
        }

        forkJoin(partnersGetArray).subscribe(partners => {
          this.currentPartner = partners[0];
          this.partners = partners.filter(partner => partner !== this.currentPartner);
        });
      }, error => console.log('error:', error));
    }
  }

}
