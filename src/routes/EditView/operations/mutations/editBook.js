import { useHistory, useLocation } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

import { useGetBook } from '../queries/getBook';
import { handleErrorIfApplicable } from '../../../../utils/notification.utils';
import { ROUTE_NAMES } from '../../../../config/routes.config';

const EDIT_BOOK = gql`
    mutation EditBook($id: Int!, $title: String!, $author: String!, $price: Float!) {
        editBook(bookId: $id, title: $title, author: $author, price: $price) {
            id: bookId
            title
            author
            price
        }
    }
`;

export const useEditBook = () => {
    const location = useLocation();
    const history = useHistory();
    const { loading, error, book } = useGetBook(location.state?.bookId);
    const [ editBook, { loading: isEditLoading, error: isEditError } ] = useMutation(EDIT_BOOK);

    handleErrorIfApplicable(error);

    const handleFinish = async (variables) => {
        try {
            await editBook({ variables });
            history.push(ROUTE_NAMES.ROOT);
        } catch (e) {
            handleErrorIfApplicable(e)
        }
    };
    
    const handleCancel = () => {
        history.push(ROUTE_NAMES.ROOT);
    }
    
    return {
        loading: loading || isEditLoading,
        error: error || isEditError,
        book,
        handleFinish,
        handleCancel
    } ;
};
