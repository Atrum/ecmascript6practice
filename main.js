import { Employees } from './scripts/employees'
import { Employee } from './scripts/employee'

Employees.add(new Employee("Pancho", "Developer", 1299));
Employees.add(new Employee("Lucho", "Manager", 1500));
Employees.add(new Employee("Daniel", "Manager", 1300));

let employees = Employees.list();
let html = ""

for (let e of employees) {
    e.total().then(total => {
        html += `${e.name} total: ${total} <br>`;
        render();
    });
}
html += `<br> Average salary: ${Employees.averageSalary()} <br>`

function render() {
    document.getElementById("employees").innerHTML = html;
}