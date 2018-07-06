import { Component } from '@angular/core';
//import { USER_DATA } from './data/mock';
import { IUser } from './model/user';
import { UserService } from './services/user.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headerInfo = "Some Info";
  users: IUser[];

  constructor(private userService: UserService) {

  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDpRBClJETuKi-BT7dRk2_hQLf_JL0GxqY",
      authDomain: "soc-gen-app-50973.firebaseapp.com"
    })
    //this.users = USER_DATA;
    //this.users = this.userService.getUserData();
    this.userService.getApiData()
      .subscribe(data => this.users = data);
  }
}
