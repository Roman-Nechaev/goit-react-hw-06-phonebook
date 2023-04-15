import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from '../features/contactsSlice';
import { filtersReducer } from '../features/filterContactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
