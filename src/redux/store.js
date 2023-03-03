import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice.jsx';
import { userReducer } from './userSlice.js';

export const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    user: userReducer,
  },
});
