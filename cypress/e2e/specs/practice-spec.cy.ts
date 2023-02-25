import { PracticePage } from '../page-objects/practice.page'
const practicePage = new PracticePage()

describe('Practice Spec', () => {
    beforeEach(() => {
        cy.visit('AutomationPractice/')
    })

    it('Hide Show', () => {
        //Show
        practicePage.getShowTextBox().click()
        practicePage.getDisplayedText().should('be.visible')

        //Hide
        practicePage.getHideTextBox().click()
        practicePage.getDisplayedText().should('not.be.visible')
    })

    it('Alert & Confirm', () => {
        let name = 'Akshay'
        let alertMessage =
            'Hello ' +
            name +
            ', share this practice page and share your knowledge'
        let confirmMessage =
            'Hello ' + name + ', Are you sure you want to confirm?'

        //Alert
        practicePage.enterAlertName(name)
        practicePage.getAlertButton().click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains(alertMessage)
        })

        //Confirm
        practicePage.enterAlertName(name)
        practicePage.getConfirmButton().click()
        cy.on('window:confirm', (str) => {
            expect(str).to.contains(confirmMessage)
        })
    })

    it('Switch Tabs', () => {
        let tabUrl = 'https://www.rahulshettyacademy.com/'
        practicePage.getOpenTab().invoke('removeAttr', 'target').click()
        // verify tab url
        cy.url().should('include', tabUrl)
        // shift to parent window
        cy.go('back')
    })

    it('Open Window', () => {
        let windowUrl = 'http://www.qaclickacademy.com/'
        // window.open is called on click
        // thus we can create method stub after the cy.visit
        // but before cy.click
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        })

        practicePage.getOpenWindow().click()
        cy.get('@windowOpen').should('be.calledWith', windowUrl)
    })

    it('Mouse Hover', () => {
        // Mover Hover element using real events plugin
        practicePage.getMouseHoverElement().realHover()
        // Expect the content is visible after hover
        practicePage.getMouseHoverContent().should('be.visible')
    })

    it('Scroll Table', () => {
        let lastRowName = 'Smith'
        // Scroll to botton of the table
        practicePage.getFixedTable().scrollTo('bottom')
        // Expect last record is correct and visible
        practicePage
            .getCellFromTable(9, 1)
            .should('have.text', lastRowName)
            .should('be.visible')
    })
    it('Iframe Handling', () => {
        let iframeHeaderText = 'Learn Earn & Shine'
        // Find iframe and expect content is correct
        practicePage
            .getIframeBody()
            .find('div.header-text h2')
            .should('include.text', iframeHeaderText)
    })
})
