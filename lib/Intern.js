var Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
    }

    //getRole() returns "Intern"
    getRole() { return "Intern"; }

    //getSchool() returns school
    getSchool() { return this.school; }
}
module.exports = Intern;