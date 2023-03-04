import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1 className={css.title}>PhoneBook</h1>
        <nav className={css.nav}>
          <Link to="/contacts" className={css.link}>
            Contacts
          </Link>
          <Link to="/register" className={css.link}>
            Sign Up
          </Link>
          <Link to="/login" className={css.link}>
            Login
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <footer className={css.footer}>
        <p className={css.text}>PhoneBook &copy; 2023</p>
      </footer>
    </div>
  );
};
