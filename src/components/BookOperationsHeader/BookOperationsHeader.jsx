import React from 'react';
import { string } from 'prop-types';
import { BookOutlined } from '@ant-design/icons';

const BookOperationsHeader = ({ titleFragment }) => {
    return (
        <header className="book-operations-header">
            <BookOutlined
                className="book-operations-header__icon"
                size={50}
            />
            <span className="book-operations-header__title">
                Books / { titleFragment }
            </span>
        </header>
    );
}

BookOperationsHeader.propTypes = {
    titleFragment: string.isRequired
}

export default BookOperationsHeader;
