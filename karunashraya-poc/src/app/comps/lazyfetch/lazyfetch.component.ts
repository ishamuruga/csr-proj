import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { MessageqService } from 'src/app/services/messageq.service';

@Component({
  selector: 'app-lazyfetch',
  templateUrl: './lazyfetch.component.html',
  styleUrls: ['./lazyfetch.component.css']
})
export class LazyfetchComponent implements OnInit {

  stus: Student[] = [];

  constructor(private mqService: MessageqService) { }

  ngOnInit(): void {
    this.mqService.getMessage().subscribe(x => {
      if (x.payload) {
        this.stus.push(x.payload)
      };
    });
  }

}
