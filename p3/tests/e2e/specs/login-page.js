describe('Login & Account Page', () => {

    const user = {
        name: 'Tristan William',
        email: 'tristan@cat.com',
        password: 'c@ts'
    }

    it('invalid log in', () => {
        cy.visit('/account');
        cy.get('[data-test="test-email"]').type(user.email, {force:true});
        cy.get('[data-test="password-input"]').type('wrong-password');
        cy.get('[data-test="login-button"]').click();
        cy.contains("These credentials do not match our records");
    })

    it('valid log in and log out', () => {
        cy.visit('/account');
        cy.get('[data-test="test-email"]').type(user.email, {force:true});
        cy.get('[data-test=password-input]').type(user.password, {force:true});
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test=welcome-message]', user.name);

        cy.get('[data-test=logout-button]').click();

        cy.get('[data-test=login-button]').should('exist');
    })
})
