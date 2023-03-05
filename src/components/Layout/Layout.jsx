import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import { logoutUser } from 'redux/operation';
import { selectIsLoggedIn } from 'redux/selectors';

export const Layout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(state => state.user.email);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1 className={css.title}>PhoneBook</h1>
        <nav className={css.nav}>
          {isLoggedIn ? (
            <>
              <NavLink to="/contacts" className={css.link}>
                Contacts
              </NavLink>
              <span> {userEmail}</span>
              <button
                type="button"
                onClick={handleLogout}
                className={css.button}
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/register" className={css.link}>
                Sign Up
              </NavLink>
              <NavLink to="/login" className={css.link}>
                Login
              </NavLink>
            </>
          )}
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.footer}>
        <p className={css.text}>PhoneBook &copy; 2023</p>
      </footer>
    </div>
  );
};
