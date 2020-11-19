import { useGetBookList } from '../../../../operations/queries/getBookList';

export const useGetBook = id => {
    const result = useGetBookList();

    return result.data
        ? { ...result, book: result.data?.books.find(book => id === book.id) }
        : result;
}
