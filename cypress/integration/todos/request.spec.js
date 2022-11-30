const endPoint = 'http://localhost:3000/todos';

const todoObject = {
  "title": "newTodosObjectFromPost",
  "completed": false,
  "id": "3"
}

const patchObjet = {
  "title": "newTodosObjectFromPost",
  "completed": true,
  "id": "3"
}

const addTodo = todoObject => {
  cy.request('POST', endPoint, todoObject)
}

const updateTodo = patchObjet => {
  cy.request('PATCH', `${endPoint}/${patchObjet.id}`, patchObjet)
}

const deleteTodo = todoObject => {
  cy.request('DELETE', `${endPoint}/${todoObject.id}`)
}

describe('API test demo', () => {

  it('Add a todo', () => {
    addTodo(todoObject)

    cy.request('GET', `${endPoint}/${todoObject.id}`)
    .its('body')
    .should('deep.eq', todoObject)
  })

  it('Update a todo', () => {
    updateTodo(patchObjet)

    cy.request('GET', `${endPoint}/${todoObject.id}`)
    .its('body')
    .should('deep.eq', patchObjet)
  })

  it('Delete a todo', () => {
    deleteTodo(todoObject)

    cy.request('GET', `${endPoint}`)
    .its('body')
    .should('have.length', 2)
  })

  it('Request Status 200', () => {
    cy.request('http://localhost:3000/todos')
    .its('status')
    .should('eq', 200)
  })

  it('Header/content type', () => {
    cy.request('http://localhost:3000/todos')
    .its('headers')
    .its('content-type')
    .should('include', 'application/json')
    .should('include', 'charset=utf-8')
  })

})
