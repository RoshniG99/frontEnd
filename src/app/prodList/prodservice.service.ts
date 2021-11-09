import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const apiurl = "http://localhost:3000/products/"
@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {

  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get('assets/json/prodList.json')
  }

  getProductById(product: any) {
    return this.http.get(apiurl + '?id=' + product.id)
  }

  addProd(product: any, mode: string) {
    if (mode === 'add') {
      return this.http.post(apiurl, product)
    } else {
      return this.http.put(apiurl + product.id, product)
    }
  }

  deleteProductById(product: any) {
    return this.http.delete(apiurl + product.id, product)
  }

}