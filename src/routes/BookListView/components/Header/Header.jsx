import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Statistic, Row } from 'antd';
import { BookOutlined, PlusOutlined } from '@ant-design/icons';

import { ROUTE_NAMES } from '../../../../config/routes.config';

import { useSelectedBookCount } from '../../operations/mutations/selectedBooks';

const Header = () => {
    const history = useHistory();
    const booksInfo = useSelectedBookCount();
    const shouldShowBookInfo = Boolean(booksInfo?.bookCount);

    const handleAddNewClick = () => {
        history.push(ROUTE_NAMES.CREATE);
    };

    return (
        <header className="page-header">
            <BookOutlined
                className="page-header__icon"
                size={50}
            />
            <span className="page-header__title">
                Books
            </span>
            {shouldShowBookInfo && (
                <>
                    <Statistic
                        className="page-header__stat"
                        title="Books"
                        value={booksInfo?.bookCount}
                    />
                    <Statistic
                        className="page-header__price"
                        title="Total"
                        prefix="$"
                        value={booksInfo?.sumPrice}
                    />
                </>
            )}
            <Button
                className="page-header__nav-button"
                key="create"
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleAddNewClick}
            >
                Add a book
            </Button>
        </header>
    );
}

export default Header;
