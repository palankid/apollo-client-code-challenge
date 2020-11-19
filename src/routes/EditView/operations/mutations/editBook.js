import { useMutation, gql } from '@apollo/client';

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
    const [editBook, { data, error }] = useMutation(EDIT_BOOK);

    return [editBook, data, error];
};
