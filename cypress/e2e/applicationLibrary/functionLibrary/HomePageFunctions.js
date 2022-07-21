import HomePageObjects from "../objectLibrary/HomePageObjects";

const homePageObj = new HomePageObjects()
export let data

export class HomePageFunctions {

    accessAutomationPracticeSite() {
        cy.visit('/')
    }

    enterFirstName(dataset) {
        cy.fixture('signup').then((testdata)=> {
            data = testdata[dataset]
            homePageObj.getFirstName().type(data.FirstName)
        })
    }

    extractLastNameLabel() {
        homePageObj.getLastNameLabel().invoke('text').as('lastname')
    }

    clickSubmit(buttonname) {
        homePageObj.getSubmit(buttonname).click()
    }
}