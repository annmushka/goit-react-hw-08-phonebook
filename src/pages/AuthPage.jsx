import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from 'redux/operation';
import css from './AuthPage.module.css';

export function AuthPage({ isLogin }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userMap = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };
  const handleChange = e => {
    const { name, value } = e.target;
    userMap[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isLogin) {
      dispatch(
        loginUser({
          email,
          password,
        })
      );
    } else {
      dispatch(
        registerUser({
          name,
          email: email,
          password: password,
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      {!isLogin && (
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          className={css.input}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        className={css.input}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        className={css.input}
      />

      <button type="submit" className={css.button}>
        {isLogin ? 'Sign in' : 'Sign up'}
      </button>
    </form>
  );
}
