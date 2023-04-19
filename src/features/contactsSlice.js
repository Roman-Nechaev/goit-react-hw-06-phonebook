import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { nanoid } from 'nanoid';

import contactsPhonebook from '../Data/contactsPhonebook.json';

const initialState = {
  contacts: contactsPhonebook,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.contacts.unshift(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        stat => stat.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContacts, deleteContact } = contactsSlice.actions;

export const getContactsValue = state => state.contacts.contacts;
