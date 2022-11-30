// hooks -> Mocha.js

/*
1. before() -> Una vez al principio
2. beforeEach() -> Antes de cada test
3. afterEach() -> Despues de cada test
4. after() -> Una vez al final
*/
describe('Demo de hocks', () => {

    before(function() {
        cy.log('Before')
    })
    beforeEach(function() {
        cy.log('Before Each')
    })
    afterEach(function() {
        cy.log('After Each')
    })
    after(function() {
        cy.log('After')
    })
    it('Should be test #1', () => {
        console.log('test #1')
    })
    it('Should be test #2', () => {
        console.log('test #2')
    })
    it('Should be test #3', () => {
        console.log('test #3')
    })
    it.skip('Should be test #4', () => {
        console.log('test #4')
    })
    it.only('Should be test #5', () => {
        console.log('test #5')
    })
})