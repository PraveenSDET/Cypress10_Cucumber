import { HomePageFunctions } from "../../applicationLibrary/functionLibrary/HomePageFunctions"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const homePageFunc = new HomePageFunctions()

Given('user accesses the automation practice site', ()=> {
    homePageFunc.accessAutomationPracticeSite()
})

When('user enters first name {string}', (dataset)=> {
    homePageFunc.enterFirstName(dataset)
})

When('user extracts the last name label', ()=> {
    homePageFunc.extractLastNameLabel()
})

Then('user asserts the label value', ()=> {
    cy.get('@lastname').then((lname)=> {
        expect(lname).to.include("Last name")
    })
})

When('user clicks the {string} button', (buttonname) => {
    homePageFunc.clickSubmit(buttonname)
})