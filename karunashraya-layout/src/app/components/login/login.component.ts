import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/services/layout.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;


  constructor(private fb: FormBuilder,private router:Router,private layoutService:LayoutService) { 
    this.loginForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
        'userid' : [null, Validators.required],
        'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
      })
  }

  submitForm(form: any): void {
    console.log(form);
    let userid = form["userid"];
    let password = form["password"]

    if (userid === "rajk") {
      
      this.layoutService.isAuthenticated= true;
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit(): void {
    this.layoutService.isAuthenticated= false;
  }

}
