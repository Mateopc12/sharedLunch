import { MatSnackBar } from '@angular/material';
import { RatingComponent } from './../../rating/rating.component';
import { IUser } from './../../user.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-partner-detail',
  templateUrl: './partner-detail.component.html',
  styleUrls: ['./partner-detail.component.css'],
})
export class PartnerDetailComponent implements OnInit {
  partner: IUser;
  inactive: boolean;
  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.inactive = params.get('inactive') === 'true';
      console.log(this.inactive);
      if (!this.inactive) {
        this.partner = this.userService.getCurrentMatch();
      } else {
        this.partner = this.userService.getDetailPartner(params.get('id'));
      }

      if (!this.partner || this.partner === null) {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
  }

  ratingComponetClick(rating: number): void {
    if (!this.inactive) {
      this.userService.changeRating(rating);
      this.snackBar.open(`Le has asignado ${rating} estrellas a ${this.partner.firstName} ${this.partner.lastName}`,
        null,
        { duration: 2000 });
      this.router.navigate(['partnerList']);
    }
  }
}
