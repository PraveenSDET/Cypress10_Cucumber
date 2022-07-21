export default class HomePageObjects {
    getFirstName() {
        return cy.get('input[name="firstname"]')
    }
    getLastNameLabel() {
        return cy.get('tr:nth-child(2) strong')
    }
    getSubmit(buttonname) {
        // return cy.get('button').contains(buttonname)
        /**Example for using Cypress custom command for identifying element based on text. */
        return cy.get('button').getElementByText(buttonname);
    }
}