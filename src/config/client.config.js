import { ApolloClient, InMemoryCache } from '@apollo/client';

import { Book } from '../routes/BookListView/operations/policies.config';

const client = new ApolloClient({
    uri: 'http://localhost:4567/graphql',
    cache: new InMemoryCache({
        typePolicies: {
            Book: {
            ...Book
            }
        }
    })
});

export default client;
