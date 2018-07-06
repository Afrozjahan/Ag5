import { Injectable, Inject } from '@angular/core';
import { USER_DATA } from '../data/mock';

@Injectable()
export class UserService {
    counter: number = 0;

    increase() {
        this.counter += 1;
    }
    getUserData() {
        return USER_DATA;
    }
}