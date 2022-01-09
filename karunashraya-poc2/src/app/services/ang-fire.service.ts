import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of, switchMap } from 'rxjs';
import firebase from 'firebase/compat/app';

import { Auth, getAuth } from 'firebase/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  myCustomData?: string;
}


@Injectable({
  providedIn: 'root'
})
export class AngFireService {

  userData: Observable<firebase.User | null>;

  constructor(private angularFireAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.userData = angularFireAuth.authState;
  }


  registration(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(x => {
      console.log(x);
    })
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    console.log(email + "," + password);
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(x => {
      console.log(x);
    }).catch(e => {
      console.error("ERROR");
      console.error(e)
    }).finally(() => {
      console.log("Happilly");
    })
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.angularFireAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user: any) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName, 
      photoURL: user.photoURL
    } 

    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.angularFireAuth.signOut();
    this.router.navigate(['/']);
  }

}
