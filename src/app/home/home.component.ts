import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cars2 } from '../cars';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {
  info = new FormGroup({
    carName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    carType: new FormControl('', [Validators.required, Validators.minLength(5)]),
    carColor: new FormControl('', [Validators.required, Validators.minLength(5)]),
    carPrice: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  cars = cars2;
  carsX = cars2;
  constructor() { }

  onSubmit(cars: any) {
    console.table(cars);
    if (this.info.valid) {
    let a = this.info.value; // easier way to access info
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
    cars.push(car); // add a instead of car for easier access
    this.info.reset();
  }
  }

  // returnCars(){
  //   return this.cars;
  // }

  ngOnInit(): void {
    console.log("hello");
    // this.cars = this.returnCars();
  }

  ngDoCheck(){
    console.table(this.carsX);
    // this.cars = this.returnCars();
    // console.table(this.cars);
  }
}
