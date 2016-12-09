import add from '../src';

describe('test', () => {
    it('adds 1 + 2 to equal 3', () => {
        let result = add(1,2)
        expect(result).toBe(3);
    });
});