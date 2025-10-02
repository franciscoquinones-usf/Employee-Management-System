// Step 2

class Employee {
    constructor(name, department) { 
        this.name = name;
        this.department = department;
    }
}

const employee = {
    describe () {
        return a`${this.name} works in ${this.department}`;
    }
}