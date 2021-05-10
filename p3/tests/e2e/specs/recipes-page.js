describe('All Recipes Page', () => {

    const recipe = {
        name: 'Ruffle Milk Pie',
        id: 1
    }

    it('displays all recipes', () => {

        cy.visit('/recipes')
        cy.contains('h1', 'Recipes')

        cy.get('[data-test="recipe-name"]').its('length').should('be.gte', 10)

        cy.get('[data-test="recipe-name"]').contains(recipe.name).click();

        cy.contains('[data-test="recipe-name"]', recipe.name)
        cy.url().should('include', recipe.id)

    })

})