import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  sendData(data:NgForm)
  {
    console.log("data from form is",data.value)
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
