import { Employees } from './scripts/employees'
import { Employee } from './scripts/employee'

Employees.add(new Employee("Pancho", "Developer", 1299));
Employees.add(new Employee("Lucho", "Manager", 1500));
Employees.add(new Employee("Daniel", "Manager", 1300));

let employees = Employees.list();
let html = ""

for (let e of employees) {
    // Task 1
    for (let e of employees) {
        html += e.getInfo() + "<br>"
    }

    // Task 2
    html += `<br> Average salary: ${Employees.averageSalary()} <br>`

    // Task 3
    e.total().then(total => {
        html += `${e.name} total: ${total} <br>`;
        render();
    });
}

function render() {
    document.getElementById("employees").innerHTML = html;
}