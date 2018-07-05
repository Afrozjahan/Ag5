import { Component } from '@angular/core';
import { IUser } from '../model/user';
import { USER_DATA } from './data/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headerInfo = "Some Info";
  users: IUser[];
  ngOnInit() {
    this.users = USER_DATA;
  }
}
