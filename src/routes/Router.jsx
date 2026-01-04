import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/auth/Login';
import Register from '../components/pages/auth/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddProperty from '../components/pages/listingPages/AddProperty';
import MyProperty from '../components/pages/listingPages/MyProperty';
import MyRatings from '../components/pages/ratingPages/MyRatings';
import Properties from '../components/pages/listingPages/Properties';
import NotFound from '@/components/common/NotFound';
import PropertyDetails from '@/components/pages/listingPages/PropertieDetails';
<<<<<<< HEAD
import About from '@/components/pages/AboutUs/AboutUs';
import TermsOfUses from '@/components/pages/TermsOfUses/TermsOfUses';
import DashboardLayout from '@/layout/DashboardLayout';
import WhyChooseUs from '@/components/pages/home/WhyChooseUs';
import UserProfile from '@/components/pages/UserProfile/UserProfile';
import UserDashboard from '@/components/pages/UserDashboard/UserDashboard';
=======
>>>>>>> 955378fc3f37df8fc63ad238e441a9b4bd82a9a2

export const Router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <NotFound></NotFound>,
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
      {
        path: 'properties',
        Component: Properties,
      },
      {
<<<<<<< HEAD
        path: 'about',
        Component: About,
      },
      {
        path: 'terms-of-uses',
        Component: TermsOfUses,
      },
      {
        path: 'propertie-details/:id',
        element: <PropertyDetails></PropertyDetails>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        Component: UserDashboard,
      },
      {
        path: '/dashboard/profile',
        Component: UserProfile,
      },
      {
        path: '/dashboard/add-property',
        Component: AddProperty,
      },
      {
        path: '/dashboard/my-properties',
        Component: MyProperty,
      },
      {
        path: '/dashboard/my-reviews',
        Component: MyRatings,
=======
        path: 'add-property',
        element: (
          <PrivateRoute>
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-properties',
        element: (
          <PrivateRoute>
            <MyProperty></MyProperty>
          </PrivateRoute>
        ),
      },
      {
        path: 'propertie-details/:id',
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-ratings',
        element: (
          <PrivateRoute>
            <MyRatings></MyRatings>
          </PrivateRoute>
        ),
>>>>>>> 955378fc3f37df8fc63ad238e441a9b4bd82a9a2
      },
    ],
  },
]);
