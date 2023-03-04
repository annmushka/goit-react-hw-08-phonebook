import React, { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from 'components/PrivateRout/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/operation';
import { AuthPage } from 'pages/AuthPage';
import { ContactsPage } from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';

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
          <Route index element={<HomePage />} />

          <Route path="/" element={<PublicRoute />}>
            <Route path="/register" element={<AuthPage isLogin={false} />} />
            <Route path="/login" element={<AuthPage isLogin={true} />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
