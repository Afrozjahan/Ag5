import { Injectable, Inject } from '@angular/core';
import { USER_DATA } from '../data/mock';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IUser } from '../model/user';
import { AuthService } from './auth.service';


@Injectable()
export class UserService {
    counter: number = 0;

    increase() {
        this.counter += 1;
    }
    getUserData() {
        return this.http.get("assets/data/user-data.json")
            .map(response => <IUser[]>response.json().userdata);
        //     .subscribe(data => console.log(data));
        //return USER_DATA;

    }
    getApiData() {
        return this.httpClient.get<IUser[]>('https://soc-gen-app-50973.firebaseio.com/userdata.json?auth=' + this.authService.getToken());

    }
    constructor(private http: Http, private httpClient: HttpClient, private authService: AuthService) {
    }
}