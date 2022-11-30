
describe('Sesion de retry-ability', () => {
    beforeEach(function() {
        cy.visit('http://localhost:3000/#/') // comando de Cypress  
    })
    it('debe crear 2 items', () => {
        cy.get('.new-todo') // comando que va a buscar los elementos del DOM con la clase new-todo
        .type('todo-A{enter}') // Comando que escribe
        .type('todo-B{enter}') // Comando que escribe
        cy.get('.todo-list li') // Comando
        .should('have.length', 2) // Assersion de Cypress
    })
    it('Debe contener el texto correcto', () => {
        cy.get('.todo-list li')
        .should('have.length', 2)
        .and($li => {
            expect($li.get(0).textContent.trim(), 'first-item').to.eq('todo-A')
            expect($li.get(1).textContent.trim(), 'second-item').to.eq('todo-B')
        })
    })
})
