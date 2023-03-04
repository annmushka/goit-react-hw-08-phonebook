import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectToken } from 'redux/selectors';

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return token && isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
};
