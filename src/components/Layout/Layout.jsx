import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/contacts">Contacts</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
