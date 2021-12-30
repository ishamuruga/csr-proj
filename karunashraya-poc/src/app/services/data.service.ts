import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public isAuthticated:boolean = false;

  public add(x:any,y:any){
    return x+y;
  }

  constructor() { }
}
