"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    }
    Student.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
var NewClass = /** @class */ (function () {
    function NewClass() {
    }
    return NewClass;
}());
exports.NewClass = NewClass;
exports.MAGIC_NUMBER = Math.random();
