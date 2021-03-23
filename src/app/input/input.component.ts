import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  info = new FormGroup({
    carName: new FormControl('', Validators.required),
    carType: new FormControl('', Validators.required),
    carColor: new FormControl('', Validators.required),
    carPrice: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
