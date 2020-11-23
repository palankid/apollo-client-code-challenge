import { useQuery, gql } from '@apollo/client';

const GET_BOOK = gql`
    query book($id: Int!) {
        book(bookId: $id) {
            id: bookId,
            title,
            author,
            price
        }
    }
`;

export const useGetBook = id => {
    const { loading, error, data } = useQuery(GET_BOOK, { variables: { id } });

    return { loading, error, data };
};
