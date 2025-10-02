// Step 2 Employee Base Class

class Employee {
    constructor(name, department) { 
        this.name = name;
        this.department = department;
    }
}

const employee = {
    describe () {
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
        return `${this.nam} manages the ${this.department} department with a team of ${team.size} people.}`;
    }
}

// Step 4 Sample Employees and managers

const emp1 = new Employee("John", "Finance");
const emp2 = new Employee("Joe", "Marketing");

const mgr1 = new Manager("David", "Finance", 4);
const mgr2 = new Manager("Alex", "Marketing", 3);

// Step 5 



// Step 6 