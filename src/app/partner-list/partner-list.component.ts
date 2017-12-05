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
  constructor(private userService: UserService,
    private router: Router) {
      this.partners = this.userService.getPartnerList();
  }

  ngOnInit(): void {
    if (this.partners === null || this.partners.length === 0) {
      this.userService.getMatches();
    }
  }

  goToNextPartnerDetail(): void {
    this.router.navigate([`partnerDetail/${this.userService.getCurrentMatch().id}/false`]);
  }

}
