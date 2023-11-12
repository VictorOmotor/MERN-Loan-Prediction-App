// PrivateRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Layout from './Layout'; // Import your Layout component

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/onboard" />
  );
};

export default PrivateRoute;
