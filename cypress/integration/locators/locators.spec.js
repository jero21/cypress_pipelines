let username = "standard_user"
let password = "secret_sauce"

describe('Locators in Cypress', () => {
    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/');
    })
    it('GET method ', () => {
        cy.get("#user-name").type(username)
        cy.get("input#password").type(password)
        cy.get('[data-test="login-button"]').click()
    })

   it('EQ|First|Last Method', () => {
       cy.get('input').first().type(username)
       cy.get('input').eq(1).type(password) // Array de imputs
       cy.get('input').last().click()
   })

    it('FILTER Method', () => {
       cy.get('input').filter('[type="text"]').type(username)
       cy.get('input').filter('[type="password"]').type(password)
       cy.get('input').filter('[type="submit"]').click()
    })

    it('FIND Method', () => {
       cy.get('form').find('input').eq(0).type(username)
       cy.get('form').find('input').eq(1).type(password)
       cy.get('form').find('input').eq(2).click()
    })
})
