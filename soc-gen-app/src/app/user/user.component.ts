import { Component } from '@angular/core';
@Component({
    selector: 'app-user',
    //template: `<h2> User Component Loaded Successfully </h2>`
    templateUrl: './user.component.html',
    // styles: [`
    // h2{
    //     color: orange
    // }`]
    styleUrls: [`./user.component.css`]
})
export class UserComponent {
    user = {
        firstName: "Bill",
        lastName: "Gates",
        dob: new Date(),
        income: 50000,
        company: "Microsoft",
        isWorking: true,
        image: 'assets/images/bill.jpg'
    }
    moreInfo(user: any) {
        alert("User name is " + this.user.firstName);
    }
}