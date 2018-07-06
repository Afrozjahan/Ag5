import {
    Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';
import { IUser } from '../model/user';
import { UserService } from '../services/user.service';


@Component({
    selector: 'app-user',
    //template: `<h2> User Component Loaded Successfully </h2>`
    templateUrl: './user.component.html',
    // styles: [`
    // h2{
    //     color: orange
    // }`],
    providers: [UserService],
    styleUrls: [`./user.component.css`]
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {
    @Input('user') users: IUser[];
    @Input('title') title: any;
    myColor: string = "khaki";
    myBorderStyle = {
        myBorder: true, decoration: false
    }
    constructor(private userService: UserService) {
    }
    moreInfo(user: any) {
        this.myBorderStyle.myBorder = !this.myBorderStyle.myBorder;
        this.myBorderStyle.decoration = !this.myBorderStyle.decoration;
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log("ngOnChanges");
    }
    ngOnInit() { console.log("ngOnInit"); }
    ngDoCheck() { console.log("ngDoCheck"); }
    ngAfterContentInit() { console.log("ngAfterContentInit"); }
    ngAfterContentChecked() { console.log("ngAfterContentChecked"); }
    ngAfterViewInit() { console.log("ngAfterViewInit"); }
    ngAfterViewChecked() { console.log("ngAfterViewChecked"); }
    ngOnDestroy() { console.log("ngOnDestroy"); }
}