import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headerInfo = "Some Info";
  user = {
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date(),
    income: 50000,
    company: "Microsoft",
    isWorking: true,
    image: 'assets/images/bill.jpg',
    vote: 120
  }
}
