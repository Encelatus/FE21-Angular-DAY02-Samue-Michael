import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  info = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  constructor() { }

  onSubmit() {
    if (this.info.valid) {
      var a = this.info.value;
    console.table(a);
    } else {
      console.log("error");
    //   let fName = this.info.get("fname")?.status;
    //   let lname = this.info.get("lname")?.valid;
    //   let age = this.info.get("age")?.valid;
    //   let email = this.info.get("email")?.valid;
    //   console.log(fName);
    }
    
  }


  ngOnInit(): void {
  }

}
