const Intern = require('../lib/Intern');
//Run test for intern
describe('Intern test', () => {
    it('Should create Intern name', () => {
        const intern = new Intern('Tim', '11', 'Tim@gmail.com', 'UNH');
        expect(intern.getName()).toEqual('Tim');
    });
    it('Should create Intern id', () => {
        const intern = new Intern('Tim', '11', 'Tim@gmail.com', 'UNH');
        expect(intern.getId()).toEqual('11');
    });
    it('Should create Intern email', () => {
        const intern = new Intern('Tim', '11', 'Tim@gmail.com', 'UNH');
        expect(intern.getEmail()).toEqual('Tim@gmail.com');
    });
    it('Should create Interns school', () => {
        const intern = new Intern('Tim', '11', 'Tim@gmail.com', 'UNH');
        expect(intern.getSchool()).toEqual('UNH');
    });
})