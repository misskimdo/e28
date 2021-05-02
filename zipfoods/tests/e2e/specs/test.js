// https://docs.cypress.io/api/introduction/api.html

describe('Zipfoods', () => {

  // Define a product we can use throughout our tests
  const product = {
    name: 'Driscoll’s Strawberries',
    id: 1
}

  it('visits the homepage', () => {
    cy.visit('/')
    cy.contains('h2', 'Featured Products')
  })

  it('shows all the products', () => {
    cy.visit('/products');
    cy.contains('[data-test="name"]', product.name);

    cy.get('[data-test="name"]').should('have.length', 10);

    cy.get('[data-test="name"]').contains(product.name).click();

    cy.contains('[data-test="price"]', '$4.99');
  })

  it('interacts with cart', () => {
    cy.visit('/product/' + product.id);
    cy.get('[data-test="add-to-cart-button"]').click();
    cy.contains('[data-test="cart-count"]', 1);
    cy.visit('/cart');
    cy.contains('[data-test="cart-contents"]', '1 x ' + product.name);
    cy.get('[data-test="remove-from-cart-button"]').click();
    cy.contains('[data-test="cart-count"]', 0);
    cy.contains('No items');
})

})
