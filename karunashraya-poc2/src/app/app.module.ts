import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';

//import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
//import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule
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
