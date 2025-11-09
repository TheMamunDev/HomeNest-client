import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/auth/Login';
import Register from '../components/pages/auth/Register';

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
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'signup',
        Component: Register,
      },
    ],
  },
]);
