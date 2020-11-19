import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useGetBookList } from '../../operations/queries/getBookList';

import Header from './components/Header';
import ListView from './components/ListView';
import useListViewHeight from './useListViewHeight';

const BookListView = () => {
    const history = useHistory();
    const headerRef = useRef(null);
    const listViewHeight = useListViewHeight(headerRef);
    const { loading, error, data } = useGetBookList();

    if (error) return <p>Error: {error}</p>;

    return (
        <div className="book-list-view">
            <div ref={headerRef}>
              <Header />
            </div>
            <ListView
              listViewHeight={listViewHeight}
              books={data?.books}
              loading={loading}
            />
        </div>
    );
};

export default BookListView;
