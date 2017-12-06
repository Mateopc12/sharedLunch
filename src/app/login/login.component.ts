import { IUser, IMatch } from '../user.interface';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  isBusy: Observable<any>;
  constructor(
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.isBusy = this.userService
      .authenticate(this.username, this.password);

    this.isBusy.subscribe((user: IUser) => {
      delete this.isBusy;
      this.router.navigate(['partnerList']);
    }, error => console.log('error:', error));
  }
}
