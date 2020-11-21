import { useGetBookList } from '../../../../operations/queries/getBookList';
import { selectedBookIdsVar } from '../policies.config';

export const useSelectedBookIds = () => {
    const selectedBookIds = selectedBookIdsVar();

    const setSelectedBookIds = (bookIds) => {
        selectedBookIdsVar(bookIds);
    }

    return { selectedBookIds, setSelectedBookIds };
}

export const useSelectedBookInfo = () => {
    const { data } = useGetBookList();
    const selectedBookIds = selectedBookIdsVar();

    if (!data) {
        return null;
    }

    const booksInfo = data.books
        .filter(({ id }) => selectedBookIds.includes(id))
        .reduce((acc, book) => {
            return {
                bookCount: ++acc.bookCount,
                sumPrice: acc.sumPrice + book.price
            }
        }, { bookCount: 0, sumPrice: 0 });

    return {
        ...booksInfo,
        sumPrice: booksInfo.sumPrice.toFixed(2)
    };
}
