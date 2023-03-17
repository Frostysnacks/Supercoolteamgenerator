const Engineer = require('../lib/Engineer');
//Run test for Engineer
describe('Engineer test', () => {
    it('Should create Engineer name', () => {
        const engineer = new Engineer('Tim', '11', 'Tim@gmail.com', 'TimSmith');
        expect(engineer.getName()).toEqual('Tim');
    });
    it('Should create Engineer id', () => {
        const engineer = new Engineer('Tim', '11', 'Tim@gmail.com', 'TimSmith');
        expect(engineer.getId()).toEqual('11');
    });
    it('Should create Engineer email', () => {
        const engineer = new Engineer('Tim', '11', 'Tim@gmail.com', 'TimSmith');
        expect(engineer.getEmail()).toEqual('Tim@gmail.com');
    });
    it('Should make sure that the github entered is a string', () => {
        const engineer = new Engineer('Tim', '11', 'Tim@gmail.com', 'TimSmith');
        expect(engineer.getGithub()).toEqual('TimSmith');
    });
    })