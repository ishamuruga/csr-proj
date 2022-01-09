import { Component, OnInit } from '@angular/core';
import { AngFireService } from 'src/app/services/ang-fire.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AngFireService) { }

  ngOnInit(): void {
  }

}
