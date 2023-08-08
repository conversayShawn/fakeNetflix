describe('authentication process', () => {
  it('verifies the user is logged in', () => {
    // Visit our URL
    cy.visit('http://localhost:3000/login')

    // Verify user is not logged in
    cy.get('.logout-btn').should('not.exist')

    // Fill out & submit the form
    cy.get('#username').type('username@gmail.com')
    cy.get('#password').type('password123')
    cy.get('.login-btn').click()

    // Verify user is logged in
    cy.get('.logout-btn').should('exist')
  })
})