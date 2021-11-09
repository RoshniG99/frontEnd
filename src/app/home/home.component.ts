import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.prods=[
      {name:"one"},
      {name:"two"},
      {name:"three"},
      {name:"four"},
      {name:"five"}
    ]
  }

  val: any = "";
  clg: any = "";
  t: boolean=true;
  prods:any=";"
}
