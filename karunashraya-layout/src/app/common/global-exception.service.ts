import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector} from '@angular/core';


import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ErrorDialogueComponent } from './error-dialogue/error-dialogue.component';

@Injectable()
export class GlobalExceptionService implements ErrorHandler {

  constructor(public dialog: MatDialog,private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse): void {
    console.log(error.message);
    console.log(error.toString());
    this.dialog.open(ErrorDialogueComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }    
      }
    });
    
    
    
  //throw new Error('Method not implemented.');
}
}
