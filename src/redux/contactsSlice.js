import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  selectors: {
    selectContacts: state => state.contacts.items,
  },
  reducers: {
    addContact: {
      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            name: values.name,
            number: values.number,
          },
        };
      },
      reduser(state, { payload }) {
        state.contacts.items.push(payload);
      },
    },

    deleteContact: (state, { payload }) => {
      state.contacts.item = state.contacts.items.filter(
        contact => contact.id !== payload
      );
    },
  },
});
export const { selectContacts } = contactSlice.selectors;
export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reduser;
