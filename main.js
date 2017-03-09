import { Employees } from './scripts/employees'
import { Employee } from './scripts/employee'
import { co } from 'co'

Employees.add(new Employee("Pancho", "Developer", 1000));
Employees.add(new Employee("Lucho", "Manager", 1200));
Employees.add(new Employee("Daniel", "Developer", 1300));

let employees = Employees.list();

// Task 1
let task1html = "";
for (let e of employees) {
    task1html += e.getInfo() + "<br>";
}
document.getElementById("task1").innerHTML = task1html;

// Task 2
let task2html = "";
task2html += `Average salary: ${Employees.averageSalary()} <br>`;
document.getElementById("task2").innerHTML = task2html

// Task 3
let task3html = "";
for (let e of employees) {
    e.total().then(total => {
        task3html += `${e.name} total: ${total} <br>`;
        rendertask3();
    });
}
function rendertask3() {
    document.getElementById("task3").innerHTML = task3html;
}

// Task 4
let task4html = "";
let names = [...Employees.names()];
task4html += `Names: ${names.join(", ")} <p>`;
document.getElementById("task4").innerHTML = task4html;

// Task 5
let task5html = "";
co(function *() {
    for (let e of Employees) {
        let bonus = yield e.bonus();
        task5html += `${e.name} bonus: ${bonus} 
			total: ${e.salary+bonus}<br>`;
        rendertask5();
    }
})
function rendertask5() {
    document.getElementById("task5").innerHTML = task5html;
}
