describe("Homepage", () => {
  
  it('visits the homepage', () => {
    cy.visit('/')
    cy.contains('h1', 'Need An Idea?')
    cy.contains('h1', 'Latest Recipes')
  })

  it('get random recipe', () => {
    cy.visit('/')
    cy.get('[data-test="random-recipe-button"]').click();
    cy.get('[data-test="random-recipe-show"]').should('exist');
  })

  it('display three latest recipes', () => {
    cy.visit('/')
    cy.get('[data-test="recipe-name"]').its('length').should('be.gte', 3)
  })


})
