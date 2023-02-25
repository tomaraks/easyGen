describe('API Test', () => {
    it('Mock Request Using Fixtures', () => {
        cy.intercept('GET', '/api/course', { fixture: 'example.json' })
    })
})
