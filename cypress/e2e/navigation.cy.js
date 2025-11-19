describe("Page Navigation", () => {
    beforeEach(() => {
      cy.visit("http://localhost:1234");
  
    });
  
    it("redirects to the Home section correctly", () => {
      cy.get('[data-cy="nav-home"]').click({ force: true });
      cy.contains("A Digital Study Solution for the Modern World").should("be.visible");
  
    });
  
    it("displays About section when clicked", () => {
      cy.get('[data-cy="nav-about"]').click({ force: true });
      cy.contains("About Study Night").should("be.visible");
  
    });
  
    it("loads Card Sets section properly", () => {
      cy.get('[data-cy="nav-cardsets"]').click({ force: true });
      cy.contains("Study Set Library").should("be.visible");
      
    });
  
  });
  