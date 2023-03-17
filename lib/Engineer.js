const Employee = require("./Employee.js");
const generateHTML = require("./generateHTML.js");

class Engineer extends Employee {
    constructor(name,id,email,github){
    super(name,id,email)
    this.github = github;
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github;
    }
    getHTML() {
        return generateHTML.engineer(this);
    }       
    }


 module.exports = Engineer;