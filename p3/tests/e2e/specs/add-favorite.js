describe('Add Recipe to Favorites', () => {

    const recipe = {
        name: 'Pumpkin Chocolate Chip Cookies',
        id: 3
    }

    const user = {
        name: 'Tristan William',
        email: 'tristan@cat.com',
        password: 'c@ts'
    }

    it('not logged in, no favorite button', () => {
        cy.visit('/recipes');
        cy.get('[data-test="recipe-name"]').contains(recipe.name).click();
        cy.get('[data-test="favorite-button"]').should('not.exist');

    })

    it('visits individual recipe page, add to favorite', () => {
        cy.visit('/account');
        cy.get('[data-test="test-email"]').type(user.email, {force:true});
        cy.get('[data-test=password-input]').type(user.password, {force:true});
        cy.get('[data-test=login-button]').click();

        cy.visit('/recipes');
        cy.get('[data-test="recipe-name"]').contains(recipe.name).click();
        cy.get('[data-test="favorite-button"]').should('not.exist');

    })

})