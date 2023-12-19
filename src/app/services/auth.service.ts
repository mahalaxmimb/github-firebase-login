import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : AngularFireAuth ) { }


  signup(email:string, pass:string){
    return this.auth.createUserWithEmailAndPassword(email, pass)
  }

  signin(email:string, pass:string){
    return this.auth.signInWithEmailAndPassword(email, pass)
  }

  getUser(){
    return this.auth.authState;
  }

  signOut(){
    return this.auth.signOut();
  }
}
