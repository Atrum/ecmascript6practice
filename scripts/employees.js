require("babel-polyfill");

import { Employee } from './employee'

let _employees = [];
export class Employees {
    constructor() {

    }

    static add(employee) {
        if (!employee instanceof Employee)
            throw 'Can add only employees';
        _employees.push(employee);
    }

    static list() {
        return [..._employees];
    }

    static remove(employee) {
        const idx = _employees.findIndex(employee);
        _employees.splice(idx, 1);
    }

    static averageSalary() {
        return Math.round(
            _employees.map(e => e.salary).reduce((a, b) => a + b)
            / _employees.length)
    }

    static *[Symbol.iterator]() {
        yield* _employees;
    }

    static *names() {
        yield* _employees.map(e => e.name);
    }


}

