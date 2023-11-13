describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:8080/");
  });

  it("should sum two numbers when a '+' sign is given", () => {
    cy.visit("http://localhost:8080/");

    cy.contains("5").click();
    cy.contains("+").click();
    cy.contains("6").click();
    cy.contains("=").click();

    cy.get("#number-input").should("have.value", "11");
  });
});
