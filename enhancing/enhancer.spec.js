const { succeed, repair } = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(repair({ durability: 89 }).durability).toBe(100);
            expect(repair({ durability: -89 }).durability).toBe(100);
            expect(repair({ durability: 100 }).durability).toBe(100);
            expect(repair({ durability: 0 })).toEqual({durability: 100});
        });
    });
    
    describe('success()', () => {
        it('should accept an object and modify it per the users params to create a new object', () => {
            expect(succeed({ enhancement: 2 })).toEqual({ enhancement: 3});
            // expect(succeed({ enhancement: 12 })).toEqual({ enhancement: 13 });
            // expect(succeed({ enhancement: 0 })).toEqual({ enhancement: 1 });
            // expect(succeed({ enhancement: 20 })).toEqual({ enhancement: 20 });
        });
    });
    
    it.todo('should have a max of 100 for durability');
});

