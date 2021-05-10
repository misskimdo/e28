describe('Register Page', () => {

    const user = {
        name: 'Clementine Do',
        email: 'clementine@cat.com',
        password: 'c@lic0c@ts'
    }

    it('register new user', () => {
        cy.visit('/account');
        cy.get('[data-test="register-button"]').click();

        cy.visit('/register');
        cy.get('[data-test="register-name"]').type(user.name, {force:true});
        cy.get('[data-test="register-email"]').type(user.email, {force:true});
        cy.get('[data-test="register-password"]').type(user.password, {force:true});
        cy.get('[data-test="new-register-button"]').click();
        
    })

    it('invalid password registration', () => {
        cy.visit('/account');
        cy.get('[data-test="register-button"]').click();

        cy.visit('/register');
        cy.get('[data-test="register-name"]').type(user.name, {force:true});
        cy.get('[data-test="register-email"]').type(user.email, {force:true});
        cy.get('[data-test="register-password"]').type("c@ts");
        cy.get('[data-test="new-register-button"]').click();
        cy.contains("The password must be at least 8 characters.");
        
    })

})
