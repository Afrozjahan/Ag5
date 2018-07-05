import {
    Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';
import { IUser } from '../../model/user';

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
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {
    @Input('user') users: IUser[];
    @Input('title') title: any;
    constructor() {
        console.log("constructor");
    }
    moreInfo(user: any) {
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