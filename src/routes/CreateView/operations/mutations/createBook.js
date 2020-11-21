import { useMutation, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { ROUTE_NAMES } from '../../../../config/routes.config';
import { handleErrorIfApplicable } from '../../../../utils/notification.utils';

const CREATE_BOOK = gql`
    mutation CreateBook($title: String!, $author: String!, $price: Float!) {
        createBook(title: $title, author: $author, price: $price) {
            id: bookId,
            title,
            author,
            price
        }
    }
`;

export const useCreateBook = () => {
    const history = useHistory();
    const [createBook, { loading, error }] = useMutation(CREATE_BOOK, { 
        update(cache, { data: { createBook } }) {
            cache.modify({
                fields: {
                    books(existingBooks = []) {
                        const newBooksRef = cache.writeFragment({
                            data: createBook,
                            fragment: gql`
                                fragment NewBook on Book {
                                    id
                                    type
                                }
                            `
                        });
                        return [...existingBooks, newBooksRef];
                    }
                }
            });
    }});

    const handleFinish = async variables => {
        try {
            await createBook({ variables });
            history.push(ROUTE_NAMES.ROOT);
        } catch (e) {
            handleErrorIfApplicable(e);
        }
    };

    const handleCancel = () => {
        history.push(ROUTE_NAMES.ROOT);
    }

    return { loading, error, handleFinish, handleCancel };
}
