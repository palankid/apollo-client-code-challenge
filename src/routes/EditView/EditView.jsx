import React from 'react';

import BookOperationsForm from '../../components/BookOperationsForm';
import Header from '../../components/BookOperationsHeader';

import { useEditBook } from './operations/mutations/editBook';

const EditView = () => {
    const { loading, error, book, handleFinish, handleCancel } = useEditBook();

    return (
        <div className="edit-view">
            <Header titleFragment="Edit" />
            <BookOperationsForm
                isCreateMode={false}
                initialValues={book}
                disabled={Boolean(error)}
                loading={loading}
                onFinish={handleFinish}
                onCancel={handleCancel}
            />
        </div>
    );
}

export default EditView;
