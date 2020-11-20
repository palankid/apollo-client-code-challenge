import React from 'react';
import { string } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { BookOutlined } from '@ant-design/icons';

const Header = ({ titleFragment }) => {
    const history = useHistory();

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

Header.propTypes = {
    titleFragment: string.isRequired
}

export default Header;
