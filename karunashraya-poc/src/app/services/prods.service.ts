import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class ProdsService {

  public students:Student[]  = [
    {id:4,name:"Com1"},
    {id:5,name:"Com2"},
    {id:6,name:"Com3"}
  ];

  private url:string = "http://localhost:3000";

  constructor(private httpC:HttpClient) { }

  public getDummyPromise() : Promise<Student[]> {
    return Promise.resolve(this.students);
  }

  public getProductsUPromise() {
    return this.httpC.get<Product[]>(this.url + "/products").toPromise();
  }

  public getProductsUObservable() {
    return this.httpC.get<Product[]>(this.url + "/products");
  }

  public createProds(p:Product) {
    console.log(p);
    this.httpC.post(this.url + "/products",p).toPromise().then(x=>{
      console.log(x);
    });
  }

}
