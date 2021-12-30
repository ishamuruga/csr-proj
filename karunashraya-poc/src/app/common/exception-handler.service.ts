import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogueComponent } from '../comps/alert-dialogue/alert-dialogue.component';

@Injectable({
  providedIn: 'root'
})
export class ExceptionHandlerService implements ErrorHandler {

  constructor(private injector: Injector,
    private dialog: MatDialog) { }

  handleError(error: Error | HttpErrorResponse): void {

    let mess = error.message ? error.message : error.toString();
    console.log(error.message);
    console.log(error.toString());
    const dialogRef = this.dialog.open(AlertDialogueComponent, {
      data: {
        message: 'Are you sure want to delete?'+ '==test',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
  }
}
