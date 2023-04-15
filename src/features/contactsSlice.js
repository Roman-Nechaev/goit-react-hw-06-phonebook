import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import contactsPhonebook from '../Data/contactsPhonebook.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsPhonebook,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            id: nanoid(),
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(stat => stat.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const getContactsValue = state => state.contacts;
