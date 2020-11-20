import { makeVar } from '@apollo/client';

export const selectedBookIdsVar = makeVar([]);

export const Book = {
    fields: {
        selected: {
            read (value, { readField }) {
                const bookId = readField('id');
                return selectedBookIdsVar().includes(bookId);
            }
        }
    }
};
