import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const token = useSelector(state => state.user.token);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return token && isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
};
