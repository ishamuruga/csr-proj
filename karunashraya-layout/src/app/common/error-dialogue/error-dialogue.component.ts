import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-error-dialogue',
  templateUrl: './error-dialogue.component.html',
  styleUrls: ['./error-dialogue.component.css']
})
export class ErrorDialogueComponent implements OnInit {

  message: string = "Are you sure?";
  confirmButtonText = "Yes";
  cancelButtonText = "Cancel";

  title = "Superstar";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ErrorDialogueComponent>) {
    if (data) {

      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
      console.log(this.message);
      console.log(this.confirmButtonText);
      console.log(this.cancelButtonText);
    }

  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  //  constructor(
  //     @Inject(MAT_DIALOG_DATA) public data: DialogData,
  //     public dialogRef: MatDialogRef<ErrorDialogueComponent>
  //  ) {}

  //  onCancel(): void {
  //   console.log("Dialogue Close clicked...");
  //   this.dialogRef.close();
  // }

  ngOnInit(): void {
    this.title = "BABABABABABAB";
  }

}
