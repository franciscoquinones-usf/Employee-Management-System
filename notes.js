// Video 1

class Employee {
    constructor(name, title, salary) { 
        this.name = name;
        this.title = title;
        this.salary = salary;
    }
}



const emp1 = new Employee("John", "Finance", 10000);
const emp2 = new Employee("Joe", "Marketing", 80000);

class Customer {
    constructor(name, tier, isActive) {
        this.name = name;
        this.tier = tier;
        this.isActive = isActive;
    }

    deactivate() {
        this.isActive = false;
    }
    activate() {
        this.isActive = true;
    }
    upgradeTier() {
        if (this.tier === "Basic") this.tier = 'Pro';
        else if (this.tier === 'Pro') this.tier = "Enterprise"
    }
}

const customer1 = new Customer("Joseph", "Basic", true);

console.log(customer1);
customer1.upgradeTier();
customer1.deactivate();

console.log(customer1);

// Video 2

const employee = {
    describe () {
        return a`${this.name} works in ${this.department}`;
    }
}

const alice = Object.create(employee);
alice.name = "Alice";
alice.department = "Finance";

console.log(alice.describe());

const customerPrototype = {
    upgrade() {
        if (this.tier === "Basic") this.tier = "Gold";
    }
};

const bob = Object.create(customerPrototype);
bob.name = "Bob";
bob.tier = "Basic";
bob.upgrade();

console.log(`${bob.name} is now a ${bob.tier} member!`);

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function(rate){
    this.price = this.price * (1-rate);
}

const widget = new Product("Widget", 100);
widget.discount(0.2);
console.log(widget.price);

console.log(Object.getPrototypeOf(widget));

console.log(Object.getPrototypeOf(Product.prototype));

// Video 3

class Employee {
    constructor(name) {
        this.name = name;
    }

    greet() { 
        return `Hello I'm ${this.name}.`
    }
}

function Employee(name) {
    this.name = name;
}

Employee.prototype.greet = function () {
    return `Hello, I'm ${this.name}.`
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
}

function Manager(name, department) {
    Employee.call(this.name);
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
