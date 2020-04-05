class Employee{
    // Constructor has name, id, email
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getName() returns name
    getName() { return this.name; }

    // getId() returns ID
    getId() { return this.id; }

    // getEmail() returns email
    getEmail() { return this.email; }

    // getRole() returns "Employee"
    getRole() { return "Employee"; }
}
module.exports = Employee;