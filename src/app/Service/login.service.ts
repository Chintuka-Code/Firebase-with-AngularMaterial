import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private firestore: AngularFirestore,
    private firebase_auth: AngularFireAuth
  ) {}

  login() {
    return this.firebase_auth.signInWithEmailAndPassword(
      'abcA@gmail.com',
      'abcaaaaaa'
    );
  }

  createUser() {
    return this.firebase_auth.createUserWithEmailAndPassword(
      'abcA@gmail.com',
      'abcaaaaaa'
    );
  }
}
