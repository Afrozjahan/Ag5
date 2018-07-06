import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  register(username: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(username, password);
    console.log("registered successfully");
  }

  login(username: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(username, password);
    console.log("logged in successfully");
  }
  constructor() { }

}
