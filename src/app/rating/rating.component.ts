import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Input() itemId: number;
  @Input() inactive: boolean;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inpustName: string;
  ngOnInit() {
    this.inpustName = this.itemId + '_rating';
    console.log(this.inactive);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.itemId = changes.itemId.currentValue;
    this.rating = changes.rating.currentValue;
    console.log(changes.inactive);
  }

  onClick(rating: number): void {
    if (!this.inactive) {
      this.rating = rating;
      this.ratingClick.emit(rating);
    }
  }
}
