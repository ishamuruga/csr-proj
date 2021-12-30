import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class MessageqService {

  private subject = new BehaviorSubject<any>("");

  constructor() { }

  public sendMessage(stu:Student) {
    this.subject.next({
      payload:stu
    });
  }

  public getMessage() :Observable<any> {
    return this.subject.asObservable();
  }

  public clearData() {
    this.subject.next({});
  }


}
