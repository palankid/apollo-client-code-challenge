import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { array, bool, number } from 'prop-types';
import { Table, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { routeNames } from '../../../../config/routes.config';

const { Column } = Table;

const ListView = ({ books, listViewHeight, loading }) => {
  const history = useHistory();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  
  const headerHeight = 55;
  const scrollSettings = {
    y: listViewHeight - headerHeight
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const handleEditClick = bookId => () => {
    history.push({
      pathname: routeNames.edit,
      state: { bookId }
    });
    console.log(bookId);
  };

  return (
    <Table
        dataSource={books}
        rowSelection={rowSelection}
        pagination={false}
        rowKey={record => record.bookId}
        loading={loading}
        scroll={scrollSettings}
    >
      <Column
        title="Id"
        dataIndex="bookId"
        key="bookId"
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
            onClick={handleEditClick(record.bookId)}
          >
            Edit
          </Button>
        )}
      />
    </Table>
  );
};

ListView.propTypes = {
  books: array,
  listViewHeight: number.isRequired,
  loading: bool.isRequired
};

ListView.defaultProps = {
  books: []
}

export default ListView;
