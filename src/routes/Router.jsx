import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../components/pages/Home/Home';

export const Router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        index: true,
        Component: Home,
      },
    ],
  },
]);
