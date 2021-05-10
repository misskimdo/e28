describe('Add a Recipe Page', () => {

    const recipe = {
        name: "My Recipe",
        description: "This is a test description that meets the 50 characters validation requirement.",
        ingredients: "Ingredient #1, another ingredient, even more ingredients.",
        directions: "First, you do this thing with the ingredient. Then you do another thing. Things just keep happening.",
        categories: "Category number uno, second category",
    }

    it('adds a new recipe', () => {
        cy.visit('/recipe/new');

        cy.get('[data-test=recipe-name-input]').clear().type(recipe.name);
        cy.get('[data-test=recipe-description-input]').clear().type(recipe.description);
        cy.get('[data-test=recipe-ingredients-input]').clear().type(recipe.ingredients);
        cy.get('[data-test=recipe-directions-input]').clear().type(recipe.directions);
        cy.get('[data-test=recipe-categories-input]').clear().type(recipe.categories);

        cy.get('[data-test=add-recipe-button]').click();

        cy.get('[data-test=recipe-added-confirmation]').should('exist');

        cy.visit('/recipes');
        cy.contains(recipe.name);
    });
})
