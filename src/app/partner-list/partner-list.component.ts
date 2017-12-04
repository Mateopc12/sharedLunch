import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent implements OnInit {
  @Input() loggedUser: IUser;
  partners: IUser[] = [];
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    const partnersGetArray: Observable<IUser>[] = [];
    for (const match of Object.keys(this.loggedUser.matches)) {
      partnersGetArray.push(this.userService.getPartner(match));
    }
    forkJoin(partnersGetArray).subscribe((partners: IUser[]) => {
      this.partners = partners;
    });
  }

}
