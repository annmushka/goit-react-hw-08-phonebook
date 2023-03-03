import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ContactsPage } from 'pages/ContactsPage';
import { AuthPage } from 'pages/AuthPage';
import { GlobalStyle } from './GlobalStyle';
import { ErrorPage } from 'pages/ErrorPage';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<AuthPage isLogin={false} />} />
          <Route path="/login" element={<AuthPage isLogin={true} />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
