import { Person } from './person';

export class Student {
    private firstName: string;
    private lastName: string;
    constructor(user: Person) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    }
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

export class NewClass {
}

export const MAGIC_NUMBER: number = Math.random();