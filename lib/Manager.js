var Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email);
        this.officeNumber = officeNumber;
    }

    //getRole() returns "Manager"
    getRole() { return "Manager"; }

    //getOfficeNumber() returns officeNumber
    getOfficeNumber() {return this.officeNumber; }
}
module.exports = Manager;