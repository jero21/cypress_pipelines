describe('location', () => {

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/');
    })

    it('should have title Swag Labs', () => {
        cy.title().should('eq', 'Swag Labs')
    })

    it('URL Should be https://www.saucedemo.com/', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    it('URL Should be https', () => {
        cy.location('protocol').should('eq', 'https:')
    })

    it('should have hostname www.saucedemo.com', () => {
        cy.location('hostname').should('eq', 'www.saucedemo.com')
    })

    it('should redirect to /inventory', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.location('pathname').should('eq', '/inventory.html')
    })
    
    it('should make a purchase', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.location('pathname').should('eq', '/inventory.html')
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#shopping_cart_container").click()
        cy.get('[data-test="checkout"]').click()
        cy.location('pathname').should('eq', '/checkout-step-one.html')
        cy.get('[data-test="firstName"]').type('jeremias')
        cy.get('[data-test="lastName"]').type('mora')
        cy.get('[data-test="postalCode"]').type('01110')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.location('pathname').should('eq', '/checkout-complete.html')
    })
})
