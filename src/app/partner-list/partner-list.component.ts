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
  loggedUser: IUser;
  partners: IUser[] = [];
  constructor(private userService: UserService,
    private router: Router) {
    this.loggedUser = this.userService.getLoggedUser();
  }

  ngOnInit() {
    if (this.loggedUser) {
      const partnersGetArray: Observable<IUser>[] = [];
      for (const match of Object.keys(this.loggedUser.matches)) {
        partnersGetArray.push(this.userService.getPartner(match));
      }
      forkJoin(partnersGetArray).subscribe((partners: IUser[]) => {
        this.partners = partners;
      });
    } else {
      this.router.navigate(['']);
    }
  }

}
