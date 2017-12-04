import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../user.interface';

@Component({
  selector: 'app-partner-item',
  templateUrl: './partner-item.component.html',
  styleUrls: ['./partner-item.component.css']
})
export class PartnerItemComponent implements OnInit {
  @Input() partner: IUser;
  constructor() { }

  ngOnInit() {
  }

}
