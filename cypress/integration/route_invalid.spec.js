context('Error View', () => {
    it('Navigate to an unsupported page should redirect the user to the Error View', () => {
        cy.visit('http://localhost:8080/invalid_route');
        cy.get('.route-invalid__content').should('exist');
    });
})
