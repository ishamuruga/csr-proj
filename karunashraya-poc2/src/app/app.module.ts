import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

//import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
//import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comps/login/login.component';
import { DashBoardComponent } from './comps/dash-board/dash-board.component';
import { RegistrationComponent } from './comps/registration/registration.component';
import { UserProfileComponent } from './comps/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    RegistrationComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule
    // provideFirebaseApp(() => initializeApp({
    //   apiKey: "AIzaSyAR4dg-XCTlKalrC6oJ4YE5vzbwpKL13VU",
    //   authDomain: "karunashraya-portal.firebaseapp.com",
    //   projectId: "karunashraya-portal",
    //   storageBucket: "karunashraya-portal.appspot.com",
    //   messagingSenderId: "642796786399",
    //   appId: "1:642796786399:web:6ae50b38295d494b4a4f6a",
    // })),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
