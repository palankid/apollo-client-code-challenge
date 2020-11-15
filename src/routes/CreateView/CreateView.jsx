import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

import BookOperationsForm from '../../components/BookOperationsForm';
import { routeNames } from '../../config/routes.config';

const CREATE_BOOK = gql`
    mutation CreateBook($title: String!, $author: String!, $price: Float!) {
        createBook(title: $title, author: $author, price: $price) {
            bookId,
            title,
            author,
            price
        }
    }
`;

const CreateView = () => {
    const history = useHistory();
    const [createBook, { data }] = useMutation(CREATE_BOOK);

    const handleFinish = variables => {
        createBook({ variables });
    };

    const handleCancel = () => {
        history.push(routeNames.root);
    }

    return (
        <BookOperationsForm
            isCreateMode={true}
            onFinish={handleFinish}
            onCancel={handleCancel}
        />
    )
}

export default CreateView;
