import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

import BookOperationsForm from '../../components/BookOperationsForm';
import { routeNames } from '../../config/routes.config';

const EDIT_BOOK = gql`
    mutation EditBook($bookId: Int!, $title: String!, $author: String!, $price: Float!) {
        editBook(bookId: $bookId, title: $title, author: $author, price: $price) {
            id: bookId
        }
    }
`;

const EditView = () => {
    const history = useHistory();
    const location = useLocation();
    const [editBook, { data }] = useMutation(EDIT_BOOK);

    const handleFinish = (variables) => {
        editBook({ variables });
    };

    const handleCancel = () => {
        history.push(routeNames.root);
    }

    const initialValues = {
        bookId: location.state.bookId,
        title: 'Hello world',
        author: 'Susu',
        price: 11.23
    };
    return (
        <BookOperationsForm
            isCreateMode={false}
            initialValues={initialValues}
            onFinish={handleFinish}
            onCancel={handleCancel}
        />
    );
}

export default EditView;
