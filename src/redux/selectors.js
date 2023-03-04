import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectToken = state => state.user.token;
export const selectUser = state => state.user.user;
export const selectFilter = state => state.contactsData.filter;
export const selectContactsItem = state => state.contactsData.contacts.items;

export const selectFilterContacts = createSelector(
  [selectContactsItem, selectFilter],
  (contacts, search) =>
    contacts.filter(el =>
      el.name.toLowerCase().includes(search.toLowerCase().trim())
    )
);
