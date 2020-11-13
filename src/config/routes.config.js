import React from 'react';

const BookListView = React.lazy(() => import('../routes/BookListView'));
const EditView = React.lazy(() => import('../routes/EditView'));
const CreateView = React.lazy(() => import('../routes/CreateView'));

export const routeNames = {
  root: '/',
  create: '/create',
  edit: '/edit',
};

const routes = [
  {
    path: routeNames.root,
    exact: true,
    component: BookListView
  },
  {
    path: routeNames.create,
    exact: true,
    component: CreateView,
  },
  {
    path: routeNames.edit,
    exact: true,
    component: EditView,
  }
];

export default routes;
