describe('Form Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234');
    });

    //Create set
    it('Create Set - Happy Path', () => {
        cy.get('[data-cy=createSetInput]').type('Math Set');
        cy.get('[data-cy=createSetButton]').click();
        cy.contains('Math Set').should('exist');
    });

    //Empty set input
    it('Create Set - Empty Input', () => {
        cy.get('[data-cy=createSetButton]').click();
        cy.contains('Error').should('exist');
    });
    //Add card
    it('Add Card - Happy Path', () => {
        cy.get('[data-cy=cardQuestionInput]').type('2+2');
        cy.get('[data-cy=cardAnswerInput]').type('4');
        cy.get('[data-cy=addCardButton]').click();
        cy.contains('2+2').should('exist');
    });
    //Empty card input
    it('Add Card - Empty Input', () => {
        cy.get('[data-cy=addCardButton]').click();
        cy.contains('Error').should('exist');
    });
});