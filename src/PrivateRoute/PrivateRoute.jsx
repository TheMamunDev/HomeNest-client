import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/common/Spinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!user) {
    return <Navigate state={{ from: location }} to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
