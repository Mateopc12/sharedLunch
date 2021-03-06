import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})

export class PartnerListComponent implements OnInit {
  partners: IUser[] = [];
  isBusy: Observable<any>;
  constructor(private userService: UserService,
    private router: Router) {
      this.partners = this.userService.getPartnerList();
  }

  ngOnInit(): void {
    if (this.partners === null || this.partners.length === 0) {
      this.isBusy = this.userService.getMatches();
      if (this.isBusy !== null) {
        this.isBusy.subscribe(data => delete this.isBusy);
      } else {
        this.router.navigate(['login']);
      }
    }
  }

  goToNextPartnerDetail(): void {
    this.router.navigate([`partnerDetail/${this.userService.getCurrentMatch().id}/false`]);
  }

}
