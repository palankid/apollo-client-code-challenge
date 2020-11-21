context('Create a Book', () => {
    context('Happy Path', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8080/');
            cy.get('.page-header__nav-button').click();
        });

        it('Title with the right text should exist', () => {
            cy.get('.book-operations-header__title')
                .should('have.text', 'Books / Create');
        });

        it('Submit a new book and confirm the values are present in the table', () => {
            const title = 'A Brief History of Time';
            const author = 'Stephen Hawking';
            const price = '99.11';

            cy.get('.ant-row input')
                .first()
                .type(title);
            cy.get('.ant-row input')
                .eq(1)
                .type(author);
            cy.get('.ant-row input')
                .last()
                .type(price);
            
            cy.get('button[type="submit"]').click();

            cy.get('.ant-table-tbody .ant-table-cell')
                .should('have.length.greaterThan', 20)
                .then(cells => {
                    const { _ } = Cypress;

                    const expected = [ title, author, price ];
                    const actual = _.map(cells, cell => cell.innerText);

                    expect(actual).to.include.members(expected);
                })
        });
    });

    context('Sad Path', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8080/');
            cy.get('.page-header__nav-button')
                .click();
        });

        it('An attept to submit a new book to should fail', () => {
            const title = 'A Brief History of Time';
            const author = 'Stephen Hawking';
            const price = '99.11';

            cy.route2('/graphql', req => req.reply({ data: null }));

            cy.get('.ant-row input')
                .first()
                .type(title);
            cy.get('.ant-row input')
                .eq(1)
                .type(author);
            cy.get('.ant-row input')
                .last()
                .type(price);
            
            cy.get('button[type="submit"]')
                .click();

            cy.get('.ant-notification-notice-description')
                .first()
                .should('have.text', 'Error: Failed to fetch');

            cy.get('button[type="submit"]')
                .should('have.attr', 'disabled');
        });
    });
})
