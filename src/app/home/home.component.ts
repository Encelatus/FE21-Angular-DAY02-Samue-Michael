import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info = new FormGroup({
    carName: new FormControl('', Validators.required),
    carType: new FormControl('', Validators.required),
    carColor: new FormControl('', Validators.required),
    carPrice: new FormControl('', Validators.required),
  });

  constructor() { }

  onSubmit(cars: any) {
    if (this.info.valid) {
    let Name = this.info.get("carName")?.value;
    let Type = this.info.get("carType")?.value;
    let Color = this.info.get("carColor")?.value;
    let Price = this.info.get("carPrice")?.value;

    let car = {
      carName: Name,
      carType: Type,
      carColor: Color,
      carPrice: Price
    }
    cars.push(car);
  }
  }

  ngOnInit(): void {
  }

  cars = [{
    "carName": "Equinox",
    "carType": "Chevrolet",
    "carColor": "Orange",
    "carPrice": 27748
  }, {
    "carName": "Scirocco",
    "carType": "Volkswagen",
    "carColor": "Puce",
    "carPrice": 24218
  }, {
    "carName": "Explorer Sport Trac",
    "carType": "Ford",
    "carColor": "Blue",
    "carPrice": 18512
  }, {
    "carName": "Windstar",
    "carType": "Ford",
    "carColor": "Khaki",
    "carPrice": 28512
  }, {
    "carName": "5 Series",
    "carType": "BMW",
    "carColor": "Puce",
    "carPrice": 31982
  }, {
    "carName": "GS",
    "carType": "Lexus",
    "carColor": "Red",
    "carPrice": 17518
  }, {
    "carName": "Intrigue",
    "carType": "Oldsmobile",
    "carColor": "Yellow",
    "carPrice": 19208
  }, {
    "carName": "88",
    "carType": "Oldsmobile",
    "carColor": "Puce",
    "carPrice": 29580
  }];

}
