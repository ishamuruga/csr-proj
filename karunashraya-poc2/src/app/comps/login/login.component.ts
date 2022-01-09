import { Component, OnInit } from '@angular/core';
import { AngFireService } from 'src/app/services/ang-fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public emailid:string="abirami@gmail.com";
  public password:string="abirami123";

  constructor(private angFireService:AngFireService) { }

  ngOnInit(): void {
  }

  doAuth() {
    console.log("Login clicked")
    console.log(this.emailid + "," + this.password);
    this.angFireService.SignIn(this.emailid,this.password);
  }

}
