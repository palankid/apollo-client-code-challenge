import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';

import { routeNames } from '../../config/routes.config';

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
        key: '5',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '6',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '7',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '8',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '9',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '10',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '11',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      }
  ];

const BookListView = () => {
    const history = useHistory();

    const handleClick1 = () => {
        history.push(routeNames.create);
    }

    const handleClick2 = () => {
        history.push(routeNames.edit);
    }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address'
        },
      ];

    return (
        <div>
            Book List View
            <button
                onClick={handleClick1}>
                Go to Create View
            </button>
            <button
                onClick={handleClick2}>
                Go to Edit View
            </button>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    )
}

export default BookListView;
