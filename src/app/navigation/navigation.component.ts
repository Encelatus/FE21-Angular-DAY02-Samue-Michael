import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  donationCounter: number = 0;
  constructor() { }

  countDonations() {
    let donations = this.donationCounter + 10;
    this.donationCounter = donations;
  }

  ngOnInit(): void {
  }

}
