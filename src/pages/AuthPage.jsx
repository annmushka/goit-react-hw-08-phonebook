import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from 'redux/operation';

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
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
      )}
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />

      <button type="submit">{isLogin ? 'Sign in' : 'Sign up'}</button>
    </form>
  );
}
