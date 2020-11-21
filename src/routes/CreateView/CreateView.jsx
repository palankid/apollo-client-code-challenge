import React from 'react';

import BookOperationsForm from '../../components/BookOperationsForm';
import Header from '../../components/BookOperationsHeader';

import { useCreateBook } from './operations/mutations/createBook';

const CreateView = () => {
    const { loading, error, handleFinish, handleCancel } = useCreateBook();

    return (
        <div className="create-view">
            <Header titleFragment="Create" />
            <BookOperationsForm
                isCreateMode={true}
                disabled={Boolean(error)}
                loading={loading}
                onFinish={handleFinish}
                onCancel={handleCancel}
            />
        </div>
    )
}

export default CreateView;
