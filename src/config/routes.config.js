import React from 'react';

const BookListView = React.lazy(() => import('../routes/BookListView'));
const EditView = React.lazy(() => import('../routes/EditView'));
const CreateView = React.lazy(() => import('../routes/CreateView'));

export const ROUTE_NAMES = {
  ROOT: '/',
  CREATE: '/create',
  EDIT: '/edit',
};

const routes = [
  {
    path: ROUTE_NAMES.ROOT,
    exact: true,
    component: BookListView
  },
  {
    path: ROUTE_NAMES.CREATE,
    exact: true,
    component: CreateView,
  },
  {
    path: ROUTE_NAMES.EDIT,
    exact: true,
    component: EditView
  }
];

export default routes;
