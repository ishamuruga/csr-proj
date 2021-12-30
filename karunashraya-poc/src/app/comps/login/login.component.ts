import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/services/data.service';
import { MessageqService } from 'src/app/services/messageq.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogueComponent } from '../alert-dialogue/alert-dialogue.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router,
    private dataService: DataService,
    private mqService: MessageqService,
    private dialog: MatDialog) {
    this.dataService.isAuthticated = false;
  }

  ngOnInit(): void {
  }

  doNavigateToDashBoard() {
    this.dataService.isAuthticated = true;
    this.route.navigate(['dashboard']);
  }

  doSendStuData() {
    let stu = new Student(1, "Name" + Math.random());
    console.log(stu);
    this.mqService.sendMessage(stu);
  }

  openDialogue() {
    // const dialogRef = this.dialog.open(AlertDialogueComponent, {
    //   data: {
    //     message: 'Are you sure want to delete?',
    //     buttonText: {
    //       ok: 'Save',
    //       cancel: 'No'
    //     }
    //   }
    // });
    throw new Error("Test Message");
  }

}
