const Employee = require("./Employee.js");
const generateHTML = require("./generateHTML.js")


class Manager extends Employee {
    constructor(name,id,email,officeNumber){
    super(name,id,email);
    this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getHTML() {
        return generateHTML.manager(this);
    } 
 };

 module.exports = Manager;