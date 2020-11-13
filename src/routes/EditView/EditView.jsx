import React from 'react';
import { useHistory } from 'react-router-dom';

import { routeNames } from '../../config/routes.config';

const EditView = () => {
    const history = useHistory();

    const handleClick1 = () => {
        history.push(routeNames.create);
    }

    const handleClick2 = () => {
        history.push(routeNames.root);
    }

    return (
        <div>
            Edit View
            <button
                onClick={handleClick1}>
                Go to Create View
            </button>
            <button
                onClick={handleClick2}>
                Go to Book List View
            </button>
        </div>
    )
}

export default EditView;
