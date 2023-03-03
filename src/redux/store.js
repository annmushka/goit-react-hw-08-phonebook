// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactSlice.jsx';
// import { userReducer } from './userSlice.js';
// import storage from 'redux-persist/lib/storage';

// export const rootReducer = combineReducers({
//   contactsData: contactsReducer,
//   user: userReducer,
// });

import { contactsReducer } from './contactSlice';
import { userReducer } from './userSlice';

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsReducerConfig = {
  key: 'user',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contactsData: persistReducer(contactsReducerConfig, contactsReducer),
    auth: persistReducer(contactsReducerConfig, userReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          persistStore,
          persistReducer,
          FLUSH,
          PAUSE,
          PERSIST,
          REHYDRATE,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
