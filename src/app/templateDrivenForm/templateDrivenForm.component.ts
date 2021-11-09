import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateDrivenForm',
  templateUrl: './templateDrivenForm.component.html',
  styleUrls: ['./templateDrivenForm.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model: any = {};

  onSubmit() {
    alert('Registered Successfully!!\n\n' + JSON.stringify(this.model));
  }
}
