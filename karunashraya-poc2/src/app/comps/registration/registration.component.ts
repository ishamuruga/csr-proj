import { Component, OnInit } from '@angular/core';
import { AngFireService } from 'src/app/services/ang-fire.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public emailid:string="abirami@gmail.com";
  public password:string="abirami123";

  constructor(private angFireService:AngFireService) { }

  ngOnInit(): void {
  }

  doSignup(){
    this.angFireService.registration(this.emailid,this.password);
  }

}
