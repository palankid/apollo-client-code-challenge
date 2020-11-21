context('Add New Book', () => {
    context('Happy Path', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8080/');
            cy.get('.ant-table-cell button').last().click();
        });

        it('Title with the right text should exist', () => {
            cy.get('.book-operations-header__title')
                .should('have.text', 'Books / Edit');
        });

        it('Submit a new book and test it\'s properties is present in the table', () => {
            const title = 'A Brief History of Time 2nd Edition';
            const author = 'Stephen Hawking Jr.';
            const price = '87.21';

            cy.get('.ant-row input')
                .eq(1)
                .clear()
                .type(title);
            cy.get('.ant-row input')
                .eq(2)
                .clear()
                .type(author);
            cy.get('.ant-row input')
                .last()
                .clear()
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
            cy.get('.ant-table-cell button').last().click();
        });

        it('An attept to submit the modifications should fail', () => {
            const title = 'A Brief History of Time 2nd Edition';
            const author = 'Stephen Hawking Jr.';
            const price = '87.21';

            cy.route2('/graphql', req => req.reply({ data: null }));

            cy.get('.ant-row input')
                .eq(1)
                .clear()
                .type(title);
            cy.get('.ant-row input')
                .eq(2)
                .clear()
                .type(author);
            cy.get('.ant-row input')
                .last()
                .clear()
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
