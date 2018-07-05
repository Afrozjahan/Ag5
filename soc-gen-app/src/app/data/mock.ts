import { IUser } from "../model/user";

export const USER_DATA: IUser[] = [{
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date(),
    income: 50000,
    company: "Microsoft",
    isWorking: true,
    image: './assets/images/bill.jpg',
    vote: 120
},
{
    firstName: "Steve",
    lastName: "Jobs",
    dob: new Date(),
    income: 0,
    company: "Apple",
    isWorking: false,
    image: './assets/images/steve.jpg',
    vote: 180
},
{
    firstName: "Satya",
    lastName: "Nadella",
    dob: new Date(),
    income: 50000,
    company: "Microsoft",
    isWorking: true,
    image: './assets/images/satya.jpg',
    vote: 130
}]