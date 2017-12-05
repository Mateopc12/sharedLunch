import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _location: Location) { }
  goBack() {
    if (this._location.path() !== '') {
      this._location.back();
    }
  }
}
