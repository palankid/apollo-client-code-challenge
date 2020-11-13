import React from 'react';
import { useHistory } from 'react-router-dom';

import { routeNames } from '../../config/routes.config';

const BookListView = () => {
    const history = useHistory();

    const handleClick1 = () => {
        history.push(routeNames.create);
    }

    const handleClick2 = () => {
        history.push(routeNames.edit);
    }

    return (
        <div>
            Book List View
            <button
                onClick={handleClick1}>
                Go to Create View
            </button>
            <button
                onClick={handleClick2}>
                Go to Edit View
            </button>
        </div>
    )
}

export default BookListView;
