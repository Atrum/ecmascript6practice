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
co(function* () {
    for (let e of Employees) {
        let bonus = yield e.bonus();
        task5html += `${e.name} bonus: ${bonus} 
			total: ${e.salary + bonus}<br>`;
        rendertask5();
    }
})
function rendertask5() {
    document.getElementById("task5").innerHTML = task5html;
}

// Task 6
let task6html = "";
for (let e of employees) {
    e.totalWithHandling()
        .then(total => {
            task6html += `${e.name} total: ${total} <br>`;
        })
        .catch(bonus => {
            task6html += `${e.name} bonus is too big: ${bonus} <br>`;
        })
        .then(rendertask6);
}

let task6htmlco = "co version:<br>";
co(function* () {
    for (let e of Employees) {
        try {
            let bonus = yield e.bonusWithHandling();
            task6htmlco += `${e.name} bonus: 
			${bonus} total: ${e.salary + bonus}<br>`;
        } catch (ex) {
            task6htmlco += `${e.name} bonus is too BIG (${ex}) <br>`;
        }
        rendertask6co();
    }
});

function rendertask6() {
    document.getElementById("task6").innerHTML = task6html;
}

function rendertask6co() {
    document.getElementById("task6co").innerHTML = task6htmlco;
}

// Task 7
let task7html = "";
async function printBonus() {
    task7html += "Async/await version:<br>";
    for (let e of Employees) {
        try {
            let bonus = await e.bonusWithHandling();
            task7html += `${e.name} bonus: ${bonus} 
              total: ${e.salary + bonus}<br>`;
            rendertask7();
        }
        catch (ex) {
            task7html += `${e.name} bonus is  too BIG: ${ex}<br>`;
        }
    }
}
printBonus();

function rendertask7() {
    document.getElementById("task7").innerHTML = task7html;
}
