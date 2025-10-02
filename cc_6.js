// Step 2 Employee Base Class

class Employee {
    constructor(name, department) { 
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in ${this.department}`;
    }
}

// Step 3 Manager subclass

class Manager extends Employee {
    constructor(name, department, teamsize) {
        super(name, department);
        this.teamsize = teamsize;
    }

    describe() {
        return `${this.name} manages the ${this.department} department with a team of ${this.teamsize} people.`;
    }
}

// Step 4 Sample Employees and Managers

const emp1 = new Employee("John", "Finance");
const emp2 = new Employee("Joe", "Marketing");

const mgr1 = new Manager("David", "Finance", 4);
const mgr2 = new Manager("Alex", "Marketing", 3);

// Step 5 Company Class and Employees

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}

// Step 6 Making a Company

const myCompany = new Company();

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

myCompany.listEmployees();