import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigateByUrl('/reactiveForm');
  }

  home(){
    this.router.navigateByUrl('/Home');
  }

  pl(){
    this.router.navigateByUrl('/prodList');
  }
}
