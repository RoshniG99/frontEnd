import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = 'Hello!!';
  val = "Welcome to Hotel Transylvania!"
  ghost = "There are actual ghosts here!"
  sp ="SPOOKYYY!!"
  disable=true
  isDisabled=false
  url="assets/p1.jpg";
  address="Mumbai"
  counter=0;
  calc="2*2"
  submit() {
    this.isDisabled=true
    this.address="Banglore"
  }

  new() {
    window.open("https://angular.io/guide/property-binding")
  }

  try() {
    this.counter=this.counter+1;
  }

  hbd() {
    window.alert("Happy Birthday Toshi!!!! WooHoo!!")
  }

  t1() {
    this.calc="4";
  }
}
