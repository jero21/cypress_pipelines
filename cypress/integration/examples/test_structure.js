let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b;

describe('Unit testing for our dummy application', () => {
    context('Math with POSITIVE numbers', () => {
        it('should add positive numbers', ()=> {
            expect(add(1,2)).to.eq(3)
        })
        it('should subtract positive numbers', ()=> {
            expect(subtract(4,2)).to.eq(2)
        })
        it('should divide positive numbers', ()=> {
            expect(divide(4,2)).to.eq(2)
        })
        it('should multiply positive numbers', ()=> {
            expect(multiply(4,2)).to.eq(8)
        })
    });
})
