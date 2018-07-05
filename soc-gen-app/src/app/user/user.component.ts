import {
    Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';
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
    @Input('user') user: any;
    @Input('title') title: any;
    moreInfo(user: any) {
        alert("User name is " + this.user.firstName);
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log("ngOnChanges");
        console.log(changes);
    }
    ngOnInit() { console.log("ngOnInit"); }
    ngDoCheck() { console.log("ngDoCheck"); }
    ngAfterContentInit() { console.log("ngAfterContentInit"); }
    ngAfterContentChecked() { console.log("ngAfterContentChecked"); }
    ngAfterViewInit() { console.log("ngAfterViewInit"); }
    ngAfterViewChecked() { console.log("ngAfterViewChecked"); }
    ngOnDestroy() { console.log("ngOnDestroy"); }
}