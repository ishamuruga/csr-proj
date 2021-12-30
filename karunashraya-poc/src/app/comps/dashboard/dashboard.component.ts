import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, of, Subscription } from 'rxjs';

import { Product } from 'src/app/model/product';
import { Student } from 'src/app/model/student';
import { ProdsService } from 'src/app/services/prods.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  public students:Student[]  = [
    {id:1,name:"superstar"},
    {id:2,name:"Bashabhai"},
    {id:3,name:"Kalaiyaan"},
    {id:4,name:"superstar"},
    {id:5,name:"Bashabhai"},
    {id:6,name:"Kalaiyaan"},
    {id:7,name:"superstar"},
    {id:8,name:"Bashabhai"},
    {id:9,name:"Kalaiyaan"},
    {id:10,name:"superstar"},
    {id:11,name:"Bashabhai"},
    {id:12,name:"Kalaiyaan"}
  ]


  subs!:Subscription;

  prods:Product[] = [];

  constructor(private prodsService:ProdsService) { }


  doCreateNewProds(){
    let prod:Product = new Product();
    prod.id= Math.random();
    prod.name = "conpany 008";
    prod.familyId = 9;
    prod.locationId = 6;
    prod.quantity = prod.locationId * 25;
    prod.cost = 100;
    console.log(prod);
    this.prodsService.createProds(prod);
    this.prods.push(prod);
  }

  ngOnInit(): void {
    console.log("Dashboard loads.....")
    //Promise
    // this.prodsService.getProductsUPromise().then((x:any)=>{
    //   this.prods = x;
    //   console.log(this.prods);
    // }).catch(e=>{
    //   console.error("ERROR IN MY APP")
    //   console.log(e);
    // }).finally(()=>{
    //   console.log("Happilly");
    // })

    this.subs = this.prodsService.getProductsUObservable().pipe(
      map(data=>{
        data.map(x => x.cost = x.cost+123);
        return data;
      }), 
      map(data => data.filter(prod=>prod.cost>154)),
      map(data => data.filter(prod=>prod.cost>164)),
    ).subscribe((x:any)=>{
      this.prods = x;
      console.log(this.prods);
    },err => {
      console.error("ERROR in OBS");
      console.error(err);
    },()=>{
      console.log("Happily")
    });

  }  

  ngOnDestroy(): void {
    console.log("Dashboard Unloads.....")
    this.subs.unsubscribe();
  }


  doProcessLargeArray() {
    of(this.students).pipe(
      map(data=>{
        data.map(x => x.name = x.name + " San");
        return data;
      }), 
    ).subscribe(x=>{
      console.log(x);
    })
  }


 

}
