import { Person } from './person'


export class Employee extends Person {

    constructor(name, position, salary) {
        super(name);
        this.position = position;
        this.salary = salary;
    }

    getInfo() {
        return super.getInfo() +
            `${this.position} ${this.salary}`
    }

    bonus() {
        return new Promise(resolve =>
            setTimeout(() => resolve(Math.round(Math.random() * 1000))
                , 3000))
    }

    total() {
        return new Promise(resolve =>
            this.bonus().then(bonus =>
                resolve(this.salary + bonus)));
    }

}
