const Employee = require("./Employee.js");
const generateHTML = require("./generateHTML.js")

class Intern extends Employee {
    constructor(name,id,email,school){
    super(name,id,email)
    this.school = school
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school;
    }
    getHTML() {
        return generateHTML.intern(this);
    } 
 }

 module.exports = Intern;