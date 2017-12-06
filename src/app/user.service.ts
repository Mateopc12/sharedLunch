import { IMatch } from './user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from './user.interface';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class UserService {
  url = 'https://shared-lunch.firebaseio.com/users';
  id = '-KkI14PCd_DplJLln3kG';
  loggedUser: IUser;
  currentMatch: IUser;
  partnerList: IUser[] = [];
  constructor(private http: HttpClient) { }

  getLoggedUser(): IUser {
    return this.loggedUser;
  }

  getCurrentMatch(): IUser {
    return this.currentMatch;
  }

  getPartnerList(): IUser[] {
    return this.partnerList;
  }

  getDetailPartner(id: string): IUser {
    return this.partnerList.filter(partner => partner.id === id)[0];
  }

  changeRating(rating: number): void {
    this.currentMatch.rating = rating;
  }

  getMatches(): Observable<void[]> {
    if (this.loggedUser) {
      const partnersIdList = Object.keys(this.loggedUser.matches);
      const observableBatch: Observable<void>[] = [];
      if (this.loggedUser.currentMatch) {
        this.http.get(`${this.url}/${this.loggedUser.currentMatch}.json`)
        .map((user: IUser) => {
        this.currentMatch = user;
        this.currentMatch.id = this.loggedUser.currentMatch;
        })
        .subscribe();
      }

      partnersIdList.forEach((match) => {
        observableBatch.push(
          this.http.get(`${this.url}/${match}.json`)
            .map((partner: IUser) => {
              partner.id = match;
              partner.rating = Math.round(Math.random() * (5 - 1) + 1);
              this.partnerList.push(partner);
            }));
      });

      return forkJoin(observableBatch);
    } else {
      return null;
    }
  }

  getPartner(id: string): Observable<IUser> {
    return this.http.get(`${this.url}/${id}.json`)
      .map(data => data as IUser);
  }

  authenticate(username: string, password: string): Observable<IUser> {
      return this.http.get(`${this.url}/${this.id}.json`).map((user: IUser) => this.loggedUser = user);
  }
}
