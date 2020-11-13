import React from 'react';
import { useHistory } from 'react-router-dom';

import { routeNames } from '../../config/routes.config';

const CreateView = () => {
    const history = useHistory();

    const handleClick1 = () => {
        history.push(routeNames.edit);
    }

    const handleClick2 = () => {
        history.push(routeNames.root);
    }

    return (
        <div>
            Create View
            <button
                onClick={handleClick1}>
                Go to Edit View
            </button>
            <button
                onClick={handleClick2}>
                Go to Book List View
            </button>
        </div>
    )
}

export default CreateView;
