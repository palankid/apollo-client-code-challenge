import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Statistic, Row } from 'antd';
import { BookOutlined, PlusOutlined } from '@ant-design/icons';

import { routeNames } from '../../../../config/routes.config';

const Header = () => {
    const history = useHistory();

    const handleAddNewClick = () => {
        history.push(routeNames.create);
    };

    return (
        <header className="page-header">
            <BookOutlined
                className="page-header__icon"
                size={50}
            />
            <span className="page-header__title">
                Book App
            </span>
            <Statistic
                className="page-header__stat"
                title="Books"
                value="12"
            />
            <Statistic
                className="page-header__price"
                title="Total"
                prefix="$"
                value={3345.08}
            />
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
