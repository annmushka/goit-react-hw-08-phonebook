import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContact,
  addContact,
  deleteContact,
  login,
  getUserData,
  logout,
  token,
} from 'services/api';
import { register } from 'services/api';

export const registerUser = createAsyncThunk(
  'user/userRegister',
  async (data, thunkAPI) => {
    try {
      const response = await register(data);
      token.set(response.token, 'Bearer');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/userLogin',
  async (data, thunkAPI) => {
    try {
      const response = await login(data);
      token.set(response.data.token, 'Bearer');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Token is missing');
    }
    token.set(persistedToken);
    try {
      const response = await getUserData();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const response = await logout();
      token.unset();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContactsOper = createAsyncThunk(
  'contacts/fetchAll',
  async (contacts, thunkAPI) => {
    try {
      const result = await fetchContact(contacts);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsOper = createAsyncThunk(
  'contacts/getByQuary',
  async (contact, thunkAPI) => {
    try {
      const result = await addContact(contact);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsOper = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const result = await deleteContact(id);
      return result.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
