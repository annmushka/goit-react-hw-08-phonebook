import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact, login } from 'services/api';
import { register } from 'services/api';

// const { createAsyncThunk } = require('@reduxjs/toolkit');

export const registerUser = createAsyncThunk(
  'user/userRegister',
  async (data, thunkAPI) => {
    try {
      const response = await register(data);
      thunkAPI.dispatch(
        loginUser({ email: data.email, password: data.password })
      );
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
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// token.set(response.access_toke);

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
