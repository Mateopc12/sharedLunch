import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-item',
  templateUrl: './partner-item.component.html',
  styleUrls: ['./partner-item.component.css']
})
export class PartnerItemComponent implements OnInit {
  @Input() partner: IUser;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetail(): void {
    this.router.navigate([`partnerDetail/${this.partner.id}/true`]);
  }

}
