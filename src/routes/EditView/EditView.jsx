import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import BookOperationsForm from '../../components/BookOperationsForm';
import { ROUTE_NAMES } from '../../config/routes.config';

import { useGetBook } from './operations/queries/getBook'
import { useEditBook } from './operations/mutations/editBook';

const EditView = () => {
    const history = useHistory();
    const location = useLocation();
    const [ editBook ] = useEditBook();
    const { loading, error, book } = useGetBook(location.state?.bookId);

    if (loading) return <p>Loading......</p>;
    if (error) return <p>Error: {error}</p>;
        
    const handleFinish = async (variables) => {
        await editBook({ variables });
        history.push(ROUTE_NAMES.ROOT);
    };

    const handleCancel = () => {
        history.push(ROUTE_NAMES.ROOT);
    }

    return (
        <BookOperationsForm
            isCreateMode={false}
            initialValues={book}
            onFinish={handleFinish}
            onCancel={handleCancel}
        />
    );
}

export default EditView;
