// TODO: Write code to define and export the Employee class
class Employee{
    // Constructor must have name, id, email
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getName() that gets name
    getName() { return this.name; }

    // getId() that gets ID
    getId() { return this.id; }

    // getEmail() that gets email
    getEmail() { return this.email; }

    // getRole() returns "Employee"
    getRole() { return "Employee"; }
}

module.exports = Employee;
