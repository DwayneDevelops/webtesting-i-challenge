const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

describe ('enhancer.js', () => {
    describe('succeed()', () => {
        it()
    })
    

    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(repair({ durability: 89 }).durability).toBe(100);
            expect(repair({ durability: -89 }).durability).toBe(100);
            expect(repair({ durability: 100 }).durability).toBe(100);
            expect(repair({ durability: 0 }).durability).toEqual(100);
        });
    });

    describe('success()', () => {});

    it.todo('should have a max of 100 for durability');
});