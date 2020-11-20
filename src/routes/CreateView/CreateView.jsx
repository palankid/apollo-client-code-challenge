import React from 'react';
import { useHistory } from 'react-router-dom';

import BookOperationsForm from '../../components/BookOperationsForm';
import Header from '../../components/BookOperationsHeader';
import { ROUTE_NAMES } from '../../config/routes.config';

import { useCreateBook } from './operations/mutations/createBook';

const CreateView = () => {
    const history = useHistory();
    const { createBook } = useCreateBook();

    const handleFinish = async variables => {
        await createBook({ variables });
        history.push(ROUTE_NAMES.ROOT);
    };

    const handleCancel = () => {
        history.push(ROUTE_NAMES.ROOT);
    }

    return (
        <>
            <Header titleFragment="Create" />
            <BookOperationsForm
                isCreateMode={true}
                onFinish={handleFinish}
                onCancel={handleCancel}
            />
        </>
    )
}

export default CreateView;
