context('List Vew Content', () => {
    context('Header Content', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8080/');    
        });

        it('Title with the right text should be available', () => {
            cy.get('.page-header > .page-header__title')
                .should('have.text', 'Books');
        });

        it('Button to create new book should be available', () => {
            cy.get('.page-header__nav-button')
                .should('have.text', 'Add a book');
        });
    });

    context('Happy Path', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8080/');    
        });

        it('Table should be populated with data', () => {
            cy.get('.ant-table-tbody .ant-table-cell')
                .should('have.length.greaterThan', 20)
                .then(cells => {
                    const { _ } = Cypress;

                    const expected = [
                        "1", "Harry Potter and the Sorcerer's stone", "J.K. Rowling", "12.34", "Edit",
                        "2", "Jurassic Park", "Michael Crichton", "11.22", "Edit"
                    ];
                    const actual = _.map(cells, cell => cell.innerText);

                    expect(actual).to.include.members(expected);
                })
        });

        it('Error notification should not be shown', () => {
            cy.get('.ant-notification-notice-description').should('not.exist');
        });

        it('Selection of rows should be reflected on the header', () => {
            cy.get('.ant-table-row input[type="checkbox"]')
                .eq(0)
                .check();
            cy.get('.ant-table-row input[type="checkbox"]')
                .eq(2)
                .check();

            cy.get('.ant-statistic .ant-statistic-content-value-int')
                .first()
                .should('have.text', '2');
            cy.get('.ant-statistic .ant-statistic-content-value-int')
                .last()
                .should('have.text', '16');
            cy.get('.ant-statistic .ant-statistic-content-value-decimal')
                .should('have.text', '.84');
        });
    });

    context('Sad Path', () => {
        beforeEach(() => {
            cy.route2('/graphql', req => req.reply({ data: null }));
            cy.visit('http://localhost:8080/');
        });

        it('Table should be empty', () => {
            cy.get('.ant-table-tbody .ant-empty')
                .should('exist');
        });

        it('Error notification should be shown', () => {
            cy.get('.ant-notification-notice-description')
                .first()
                .should('have.text', 'Error: Failed to fetch');
        });
    });
})
