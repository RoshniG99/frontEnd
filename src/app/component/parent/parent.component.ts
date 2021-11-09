import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  productListParent:any =[]
  msg: any;
  constructor() { }

  ngOnInit() {
    this.productListParent = [
      {name: "prod1", price: 10},
      {name: "prod2", price: 12},
      {name: "prod3", price: 14},
      {name: "prod4", price: 16},
      {name: "prod5", price: 18},
    ]
  }

  receiveMsg(event: any) {
    this.msg=event
  }

}
