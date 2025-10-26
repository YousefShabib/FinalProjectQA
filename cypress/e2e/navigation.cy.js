describe('Navigation Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234');
    });

    it('Navigates to Card Set', () => {
        cy.get('[data-cy=cardSetNav]').click();
        cy.url().should('include', '/card-set');
    });

    it('Navigates to About', () => {
        cy.get('[data-cy=aboutNav]').click();
        cy.url().should('include', '/about');
    });

    it('Navigates to Home', () => {
        cy.get('[data-cy=homeNav]').click();
        cy.url().should('include', '/');
    });
});
