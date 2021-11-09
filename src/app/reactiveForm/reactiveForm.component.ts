import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactiveForm',
  templateUrl: './reactiveForm.component.html',
  styleUrls: ['./reactiveForm.component.scss']
})
export class ReactiveFormComponent implements OnInit {

constructor(private router: Router){}

  ngOnInit() {
  }

  model: any = {};

  // constructor(private formBuilder: FormBuilder) {
  // }

  //   contactForm = this.formBuilder.group({
  //     'userName': new FormControl(null, Validators.required),  
  //     email: ['', Validators.email],
  //     password: ['', Validators.required],
  //   });

  submitTo() {
      window.alert('Your form data : ' + JSON.stringify(this.model ));
      this.router.navigateByUrl('/prodList');
      this.model.reset();
  }
}
