import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './comps/grid/grid.component';
import { LoginComponent } from './comps/login/login.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';
import { LazyfetchComponent } from './comps/lazyfetch/lazyfetch.component';
import { Lazyfetch2Component } from './comps/lazyfetch2/lazyfetch2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertDialogueComponent } from './comps/alert-dialogue/alert-dialogue.component';
import { ExceptionHandlerService } from './common/exception-handler.service';
import { TaskComponent } from './comps/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LazyfetchComponent,
    Lazyfetch2Component,
    AlertDialogueComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: ExceptionHandlerService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
