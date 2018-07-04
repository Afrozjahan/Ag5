"use strict";
// Template string syntax
// - include variables in string
// - multiline string
exports.__esModule = true;
// var fname = 'Foo';
// console.log(`Hello ${fname}`);
// console.log(`Hello 
// ${fname}`);
/******************************************* */
// Block scoping
// let - limit the scope of the variable to nearest {}
// const - limit the scope of the variable to nearest {}
// var - does not limit the scope of the variable
// function demo(arr) {
//     if (arr.length > 2) {
//         var load = 'Loading...';
//         console.log(flash);
//     }
//     else {
//         var flash = 'Flashing';
//     }
// }
// demo(["foo", "bar", "bam"])
/******************************************* */
// Destructuring: Objects and Arrays
// let myObject = {
//     drawCircle: function (r) { console.log(Math.PI * r * r) },
//     drawText: function (text) { console.log(text) }
// }
// let { drawText, drawCircle } = myObject;
// drawText("Hello");
// let arr = ["Foo", "Bar", "Bam", "Baz"];
// let [arr1, arr2, arr3] = arr;
// console.log(arr3);
// for (let item of arr) {
//     console.log(item);
// }
// for (let item in myObject) {
//     console.log(myObject[item]);
// }
/******************************************* */
// Rest & Spread Operators : (...)
// to be the last in the function definition
// included when the number of arguments is unknown
// function demo(...params) {
//     console.log(params[0]);
// }
// demo("foo");
// demo("foo", "bar");
// demo("foo", "bar", "baz");
// let arr = [13, 4, 5];
// let newArr = [1, 2, ...arr, 6, 7];
// console.log(newArr);
/******************************************* */
// Arrow function / Lamda Expression
// Arrow function preserves this reference inside arrow function
// we need to save the reference of 'this' for nested arrow functions
// var user = {
//     firstName: "Foo",
//     lastName: "Bar",
//     getFullName: function () {
//         return () => this.firstName + " " + this.lastName;
// return this.firstName + " " + this.lastName;
// console.log(this);
// var that = this;
// function nextFunc() {
//     console.log(this);
//     return that.firstName + " " + that.lastName;
// }
// return nextFunc();
//     }
// }
// var nestFunc = user.getFullName();
// let numbers = [2, 3, 4, 5, 6];
// var doubleVal = numbers.map(function (value) {
//     return value * 2;
// });
// var doubleVal = numbers.map((v) => v * 2);
// console.log(doubleVal);
/******************************************* */
// Classes 
// Default return type in function is any
// primtive types + any, enum, void
// class Student {
//     private firstName: string;
//     private lastName: string;
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName(): string {
//         return this.firstName + " " + this.lastName;
//     }
// }
// let foo = new Student("Foo", "Bar");
// console.log(foo.getFullName());
// npm install -g typescript
// tsc -v
// tsc app.ts => generates JS code for ts
// node app.js
/******************************************* */
// class Foo { }
// class Bar { }
// class Bam {
//     constructor(private foo: Foo, protected bar: Bar) {
//     }
// }
// let bam = new Bam(new Foo(), new Bar());
/******************************************* */
// Module System
var student_1 = require("./student");
var newUser = {
    firstName: "Foo",
    lastName: "Bar",
    age: 20
};
var foo = new student_1.Student(newUser);
console.log(foo.getFullName());
/******************************************* */
// Tree shaking for excluding modules which are not used
// New feature in Angular 6
/******************************************* */
/******************************************* */
/******************************************* */ 
