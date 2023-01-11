import { faker } from "@faker-js/faker";

describe("contact section tests", () => {
  it("should not allow for empty strings", () => {
    cy.visit("/");
    cy.findByTestId("contact_form").submit();

    cy.findAllByText("Este campo es obligatorio").should("have.length", 5);
  });

  it("should allow you to send mail and clear form after", () => {
    const testNote = {
      name: faker.lorem.words(1),
      surname: faker.lorem.words(1),
      email: faker.lorem.words(1),
      content: faker.lorem.words(10),
    };
    cy.visit("/");

    cy.findByTestId("contact-textarea-content").click();
    cy.wait(1000); //temporary solution
    cy.findByTestId("contact-textarea-content")
      .type(testNote.content)
      .should("have.value", testNote.content);
    cy.findByTestId("contact-input-name")
      .type(testNote.name)
      .should("have.value", testNote.name);
    cy.findByTestId("contact-input-surname")
      .type(testNote.surname)
      .should("have.value", testNote.surname);
  });
});
