import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { nanoid } from 'nanoid';

const contactsInitialState = {
  userContacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '+38 (045) 912-56-33' },
    { id: 'id-2', name: 'Hermione Kline', number: '+38 (050) 443-89-12' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.userContacts.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            id: nanoid(),
            ...value,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.userContacts.findIndex(
        contact => contact.id === action.payload
      );
      state.userContacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
