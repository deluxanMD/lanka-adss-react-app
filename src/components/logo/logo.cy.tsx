import { Logo } from "./logo.component";

describe("<Logo />", () => {
  it("should load the logo with name", () => {
    cy.mount(<Logo withName />);
    cy.findByTestId("Logo.Container").should("exist");
    cy.findByTestId("WorkIcon").should("exist");
    cy.findByTestId("Logo.Container").find("h6").should("have.text", "Talento");
  });

  it("should load the logo without name", () => {
    cy.mount(<Logo />);
    cy.findByTestId("Logo.Container").should("exist");
    cy.findByTestId("WorkIcon").should("exist");
    cy.findByTestId("Logo.Container").find("h6").should("not.exist");
  });
});
