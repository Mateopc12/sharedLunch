import { IUser, IMatch } from '../user.interface';
import { UserService } from '../user.service';
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
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    const authenticate = this.userService
      .authenticate(this.username, this.password);

    if (authenticate) {
      authenticate.subscribe((user: IUser) => {
        this.loggedUser = user;
      }, error => console.log('error:', error));
    }
  }

}
