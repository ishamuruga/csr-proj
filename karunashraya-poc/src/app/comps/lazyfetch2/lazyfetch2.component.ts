import { Component, OnInit } from '@angular/core';
import { MessageqService } from 'src/app/services/messageq.service';

@Component({
  selector: 'app-lazyfetch2',
  templateUrl: './lazyfetch2.component.html',
  styleUrls: ['./lazyfetch2.component.css']
})
export class Lazyfetch2Component implements OnInit {

  constructor(private mqService:MessageqService) { }

  ngOnInit(): void {
    this.mqService.getMessage().subscribe(x => {
      if (x.payload) {
        console.warn(x.payload);
      };
    });
  }

}
