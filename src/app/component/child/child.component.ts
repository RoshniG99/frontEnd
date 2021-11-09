import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() productListChild: any = []

  msg: string = "Hello!"

  @Output() msgEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendMsg() {
    this.msgEvent.emit(this.msg)
  }

}
