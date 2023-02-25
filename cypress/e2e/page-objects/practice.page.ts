/// <reference types="cypress" />

export class PracticePage {
    getShowTextBox() {
        return cy.get('#show-textbox')
    }
    getHideTextBox() {
        return cy.get('#hide-textbox')
    }
    getDisplayedText() {
        return cy.get('#displayed-text')
    }
    enterAlertName(name: string) {
        cy.get('#name').type(name)
    }
    getAlertButton() {
        return cy.get('#alertbtn')
    }
    getConfirmButton() {
        return cy.get('#confirmbtn')
    }
    getOpenTab() {
        return cy.get('#opentab')
    }
    getOpenWindow() {
        return cy.get('#openwindow')
    }
    getMouseHoverElement() {
        return cy.get('#mousehover')
    }
    getMouseHoverContent() {
        return cy.get('.mouse-hover-content > a')
    }
    getFixedTable() {
        return cy.get('.tableFixHead')
    }
    getCellFromTable(row: number, column: number) {
        return cy.get(
            '.tableFixHead #product > tbody > tr:nth-child(' +
                row +
                ') > td:nth-child(' +
                column +
                ')'
        )
    }
    getIframeBody() {
        // get the iframe > document > body
        // and retry until the body element is not empty
        return cy
            .get('#courses-iframe')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
    }
}
