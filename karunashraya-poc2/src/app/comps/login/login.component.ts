import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngFireService } from 'src/app/services/ang-fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public emailid:string="abirami@gmail.com";
  public password:string="abirami123";

  constructor(private angFireService:AngFireService,
    private router:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem("auth")
  }

  doAuth() {
    console.log("Login clicked")
    console.log(this.emailid + "," + this.password);
    this.angFireService.signIn(this.emailid,this.password).then(x=>{
      console.log(x);
      sessionStorage.setItem("auth",JSON.stringify(x));
      this.router.navigate(['dashboard']);
    }).catch(err=>{
      alert("In valud Login");
    }).finally(()=>{
      console.log("Happily");
    })
  }

  async doGoogleSignIn() {
    let data:any = await this.angFireService.googleSignin();
    sessionStorage.setItem("auth",JSON.stringify(data));
    this.router.navigate(['dashboard']);
  }

}
