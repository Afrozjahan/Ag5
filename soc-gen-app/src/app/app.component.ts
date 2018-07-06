import { Component } from '@angular/core';
//import { USER_DATA } from './data/mock';
import { IUser } from './model/user';
import { UserService } from './services/user.service';

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
    //this.users = USER_DATA;
    this.users = this.userService.getUserData();
  }
}
