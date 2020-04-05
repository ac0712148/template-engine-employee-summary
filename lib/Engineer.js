var Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, ID, email, github){
        super(name, ID, email);
        this.github = github;
    }

    //getRole() returns "Engineer"
    getRole() { return "Engineer"; }

    //getGithub() returns githubUser;
    getGithub() { return this.github; }
}
module.exports = Engineer;