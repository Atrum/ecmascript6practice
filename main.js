import { Employees } from './scripts/employees'
import { Employee } from './scripts/employee'

Employees.add(new Employee("Pancho", "Developer", 1000));
Employees.add(new Employee("Lucho", "Manager", 1200));
Employees.add(new Employee("Daniel", "Developer", 1300));

let employees = Employees.list();
let html = ""

// Task 2
html += `<br> Average salary: ${Employees.averageSalary()} <br>`

for (let e of employees) {
    // Task 1
    html += e.getInfo() + "<br>";

    // Task 3
    e.total().then(total => {
        html += `${e.name} total: ${total} <br>`;
        render();
    });
}

function render() {
    document.getElementById("employees").innerHTML = html;
}