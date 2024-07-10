// src/PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      element={
        auth.isAuthenticated ? <Component /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;
