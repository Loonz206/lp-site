describe("empty spec", () => {
  beforeEach(() => {
    // Load our app before starting each test case
    cy.visit("/");
  });
  it("should have navigation", () => {
    cy.get("#wrap").should("exist");
    cy.get("#menu").should("exist");
    cy.findByRole("link", { name: /about/i });
    cy.findByRole("link", { name: /contact/i });
  });
  it("should take me to the about view", () => {
    cy.findByRole("link", { name: /about/i }).click();
    cy.findByRole("heading", { name: /about/i });
    cy.findByText(
      "A software engineer with solid experiences in creating attractive, user-driven, responsive websites and applications. My adaptive personality makes it fun for me to jump into various types of teams and support the build from writing code to designing layouts and other graphical elements."
    );
  });
  it("should take me to the 404 page", () => {
    cy.findByRole("link", { name: /contact/i }).click();
    cy.findByRole("heading", { name: /404/i });
  });
});
