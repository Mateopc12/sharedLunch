import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from './user.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  username = 'mateo.parra@yuxiglobal.com';
  password = 'mateo';
  url = 'https://shared-lunch.firebaseio.com/users';
  id = '-KkI14PCd_DplJLln3kG';
  loggedUser: IUser;
  constructor(private http: HttpClient
      ) {
  }

  getLoggedUser(): IUser {
    return this.loggedUser;
  }

  getPartner(id: string): Observable<IUser> {
    return this.http.get(`${this.url}/${id}.json`)
    .map(data => data as IUser);
  }

  authenticate(username: string, password: string): Observable<IUser> {
    if (username === this.username && password === this.password) {
      return this.http.get(`${this.url}/${this.id}.json`).map((user: IUser) => this.loggedUser = user);
    }

    return null;
  }
}
