import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialogue',
  templateUrl: './alert-dialogue.component.html',
  styleUrls: ['./alert-dialogue.component.css']
})
export class AlertDialogueComponent implements OnInit {

  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"

  title = "superstar";

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertDialogueComponent>) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
