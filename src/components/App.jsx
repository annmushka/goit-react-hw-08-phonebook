import React, { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ContactsPage } from 'pages/ContactsPage';
import { AuthPage } from 'pages/AuthPage';
import { GlobalStyle } from './GlobalStyle';
import { ErrorPage } from 'pages/ErrorPage';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from 'components/PrivateRout/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/operation';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/contacts" />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/register" element={<AuthPage isLogin={false} />} />
            <Route path="/login" element={<AuthPage isLogin={true} />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
