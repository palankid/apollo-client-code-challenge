import { ApolloClient, InMemoryCache } from '@apollo/client';

import { Book } from '../routes/BookListView/operations/policies.config';

const client = new ApolloClient({
    uri: process.env.BOOKS_ENDPOINT,
    cache: new InMemoryCache({
        typePolicies: {
            Book: {
            ...Book
            }
        }
    })
});

export default client;
