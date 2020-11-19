import { useMutation, gql } from '@apollo/client';

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
    const [createBook, { data }] = useMutation(CREATE_BOOK, { 
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

    return { createBook, data };
}
