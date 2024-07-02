import { createSelector, createSlice } from "@reduxjs/toolkit";

import {
  fetchContacts,
  fetchAddContacts,
  fetchDeleteContacts,
} from "./operation";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectNameFilter } from "../../redux/filters/selectors";
const initialState = {
  items: [],
  loading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAddContacts.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchAddContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContacts.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchDeleteContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex((item) => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export const selectFilteredContacts = createSelector(
  selectContacts,
  selectNameFilter,
  (store, filter) => {
    const contacts = store.items;
    const filterValue = filter;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return filteredContacts;
  }
);

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
