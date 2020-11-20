import { useQuery, gql } from '@apollo/client';

export const GET_BOOK_LIST = gql`
    query GetBookList {
        books {
            id: bookId,
            title,
            author,
            price,
            selected @client
        }
    }
`;

export const useGetBookList = () => {
    const result = useQuery(GET_BOOK_LIST);

    return result;
};
