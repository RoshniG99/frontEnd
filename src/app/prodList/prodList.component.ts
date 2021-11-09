import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdserviceService } from './prodservice.service';
import { AddProductModel } from './product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prodList',
  templateUrl: './prodList.component.html',
  styleUrls: ['./prodList.component.scss']
})
export class ProdListComponent implements OnInit {
  
  headers: any = [];
  productList: any =[];
  showAddPopup = false;
  addProductModel = {} as AddProductModel;
  addProductForm = this.fb.group({
    productName: ['', Validators.required],
    author: ['', Validators.required],
    productPrice: ['', Validators.required]
  });

  mode: string = 'add';
  constructor(private prodService: ProdserviceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.headers=['ProductName', 'Author', 'ProductPrice', 'Action'];
    this.getProductList();
  }

  getProductList(){
    this.prodService.getProductList().subscribe((response: any)=> {
      this.productList = response.products;
    })
  }

  addProduct(){
    this.showAddPopup = true;
  }

  onSubmit(){
    alert(JSON.stringify(this.addProductModel));
    this.prodService.addProd(this.addProductModel, this.mode).subscribe((products: any)=> {
      console.log('Successfully added!');
    })
  }


editProduct(product: any){
  this.mode = 'edit';
  this.prodService.getProductById(product).subscribe((response:any)=>{
    this.showAddPopup = true;
    this.addProductModel = response[0];
  })
}

  deleteProduct(product: any){
    this.prodService.deleteProductById(product).subscribe((response:any)=>{
      alert("Deleted!")
    })
  }

  logout(){
    this.router.navigateByUrl('/reactiveForm');
  }
}
