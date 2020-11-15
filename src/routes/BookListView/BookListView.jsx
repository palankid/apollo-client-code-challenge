import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import { routeNames } from '../../config/routes.config';

import Header from './components/Header';
import ListView from './components/ListView';
import useListViewHeight from './useListViewHeight.hooks';

const BOOK_LIST = gql`
  query BookList {
    books {
      bookId,
      title,
      author,
      price
    }
  }
`;

const BookListView = () => {
    const history = useHistory();
    const headerRef = useRef(null);
    const listViewHeight = useListViewHeight(headerRef);
    const { loading, error, data } = useQuery(BOOK_LIST);

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
