import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import { userReducer } from './userSlice';
import { contactsReducer } from './contactSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, userReducer);

export const rootReducer = combineReducers({
  contactsData: contactsReducer,
  user: persistedReducer,
});
