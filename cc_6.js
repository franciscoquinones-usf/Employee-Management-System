// Step 2

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

// Step 3

class Manager extends Employee {
    constructor(name, department, teamsize) {
        super(name, department);
        this.teamsize = teamsize;
    }

    describe() {
        return `${this.nam} manages the ${this.department} department with a team of ${team.size} people.}`;
    }
}

