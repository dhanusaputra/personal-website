describe('Personal website app', function() {
  it('can be opened', function() {
    cy.visit('localhost:3000/personal-website')
    cy.contains('EN')
    cy.contains('nothing personal here')
  })
})
