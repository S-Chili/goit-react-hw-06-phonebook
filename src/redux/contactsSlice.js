import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContactAction: (state, action) => {
      const existingContact = state.contacts.find(
      (contact) => contact.name === action.payload.name
      );
      if (!existingContact) {
        state.contacts.push(action.payload);
      } else {
        alert(`${action.payload.name} is already in contacts.`);
      }
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },

    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContactAction, deleteContact, updateFilter } = contactsSlice.actions;
export default contactsSlice.reducer;