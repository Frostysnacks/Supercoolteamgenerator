const Manager = require('../lib/Manager');
//Run test for Manager
describe('Manager test', () => {
    it('Should create Manager office number', () => {
        const manager = new Manager('Tim', '11', 'Tim@gmail.com', 5);
        expect(manager.getOfficeNumber()).toEqual(5);
    });    
    it('Should create Manager name', () => {
        const manager = new Manager('Tim', '11', 'Tim@gmail.com', 5);
        expect(manager.getName()).toEqual('Tim');
    });
    it('Should create Manager id', () => {
        const manager = new Manager('Tim', '11', 'Tim@gmail.com', 5);
        expect(manager.getId()).toEqual('11');
    });
    it('Should create Manager email', () => {
        const manager = new Manager('Tim', '11', 'Tim@gmail.com', 5);
        expect(manager.getEmail()).toEqual('Tim@gmail.com');
    });
})