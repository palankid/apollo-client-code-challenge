import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { routeNames } from '../../config/routes.config';

import Header from './components/Header';
import ListView from './components/ListView';
import useListViewHeight from './useListViewHeight.hooks';

const BookListView = () => {
    const history = useHistory();
    const headerRef = useRef(null);
    const listViewHeight = useListViewHeight(headerRef);

    return (
        <div className="book-list-view">
            <div ref={headerRef}>
              <Header />
            </div>
            <ListView
              listViewHeight={listViewHeight}
            />
        </div>
    )
}

export default BookListView;
