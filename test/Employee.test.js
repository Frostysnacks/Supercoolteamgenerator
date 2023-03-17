const Employee = require('../lib/Employee');
//Run test for Employee
describe('Employee test', () => {
    it('Should create Employee name', () => {
        const employee = new Employee('Tim', '11', 'Tim@gmail.com');
        expect(employee.getName()).toEqual('Tim');
    });
    it('Should create Employee id', () => {
        const employee = new Employee('Tim', '11', 'Tim@gmail.com');
        expect(employee.getId()).toEqual('11');
    });
    it('Should create Employee email', () => {
        const employee = new Employee('Tim', '11', 'Tim@gmail.com');
        expect(employee.getEmail()).toEqual('Tim@gmail.com');
    });
});