import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { array, bool, func, number } from 'prop-types';
import { Table, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { useSelectedBookIds } from '../../operations/mutations/selectedBooks';

import { ROUTE_NAMES } from '../../../../config/routes.config';

const { Column } = Table;

const BookList = ({ books, listViewHeight, loading }) => {
    const history = useHistory();
    const { selectedBookIds, setSelectedBookIds } = useSelectedBookIds();

    const headerHeight = 55;
    const scrollSettings = {
        y: listViewHeight - headerHeight
    };
    const rowSelection = {
        selectedRowKeys: selectedBookIds,
        onChange: setSelectedBookIds,
    };

    const handleEditClick = bookId => () => {
        history.push({
            pathname: ROUTE_NAMES.EDIT,
            state: { bookId }
        });
    };

    return (
        <Table
            dataSource={books}
            rowSelection={rowSelection}
            pagination={false}
            rowKey={record => record.id}
            loading={loading}
            scroll={scrollSettings}
        >
            <Column
                title="Id"
                dataIndex="id"
                key="id"
                width={80}
            />
            <Column
                title="Title"
                dataIndex="title"
                key="title"
            />
            <Column
                title="Author"
                dataIndex="author"
                key="author"
                width={300}
            />
            <Column
                title="Price"
                dataIndex="price"
                key="price"
                width={100}
            />
            <Column
                title=""
                key="edit"
                width={100}
                render={(text, record) => (
                    <Button
                        icon={<EditOutlined />}
                        onClick={handleEditClick(record.id)}
                    >
                        Edit
                    </Button>
                )}
            />
        </Table>
    );
};

BookList.propTypes = {
    books: array,
    listViewHeight: number.isRequired,
    loading: bool.isRequired
};

BookList.defaultProps = {
    books: []
}

export default BookList;
