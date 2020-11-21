import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { handleErrorIfApplicable } from '../../utils/notification.utils';
import { useGetBookList } from '../../operations/queries/getBookList';

import Header from './components/Header';
import BookList from './components/BookList';
import useListViewHeight from './useListViewHeight';

const BookListView = () => {
    const history = useHistory();
    const headerRef = useRef(null);
    const listViewHeight = useListViewHeight(headerRef);
    const { loading, error, data } = useGetBookList();

    handleErrorIfApplicable(error);

    return (
        <div className="book-list-view">
            <div ref={headerRef}>
                <Header />
            </div>
            <BookList
                listViewHeight={listViewHeight}
                books={data?.books}
                loading={loading}
            />
        </div>
    );
};

export default BookListView;
