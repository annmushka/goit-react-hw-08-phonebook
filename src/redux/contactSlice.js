import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsOper,
  addContactsOper,
  deleteContactsOper,
} from './operation';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContactsOper.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContactsOper.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContactsOper.rejected, (state, action) => {
        state.contacts.isLoading = false;
        // state.contacts.items = action.payload;
        state.contacts.error = action.payload;
      })

      .addCase(addContactsOper.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactsOper.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContactsOper.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })

      .addCase(deleteContactsOper.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactsOper.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          el => el.id !== action.payload
        );
      })
      .addCase(deleteContactsOper.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      }),
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = contactSlice.reducer;
export const { filterContacts } = contactSlice.actions;
