const {checkName} = require('../index.js');

describe('test checkName function', () => {
    test('check valid name type', () => {
        expect(checkName('Danil')).toBe(true);
    })
    test('check lowercase name type', () => {
        expect(checkName('danil')).toBe(false);
    })
    test('check short name type', () => {
        expect(checkName('Dan')).toBe(false);
    })
})
