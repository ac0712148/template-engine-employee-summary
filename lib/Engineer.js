// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(name, ID, email, github){
        super(name, ID, email);
        this.github = github;
    }
    //getRole() returns "Engineer"
}
module.exports = Engineer;