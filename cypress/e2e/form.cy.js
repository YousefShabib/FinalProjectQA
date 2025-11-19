describe("Flashcard Set Form", () => {
    beforeEach(() => {
  
      cy.visit("http://localhost:1234");
      cy.get("#cardSetPage").click({ force: true });
      cy.get('[data-cy="toggle_form"]').click({ force: true });
  
    });
  
    it("should create a new flashcard set when title is provided", () => {
      cy.get('input[name="titleInput"]').type("New Study Set");
      cy.get('[data-cy="set_form"]').submit();
      cy.contains("New Study Set").should("be.visible");
  
    });
  
    it("should show validation error when title is missing", () => {
      cy.get('[data-cy="set_form"]').submit();
      cy.contains("TITLE CANNOT BE EMPTY").should("be.visible");
  
    });
    
  });
  