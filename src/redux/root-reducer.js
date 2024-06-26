import { combineReducers } from "@reduxjs/toolkit";

import contactsSlice from "./contacts/contactsSlice";
import filtersSlice from "./filters/filtersSlice";
import authSlice from "./auth/slice";

const rootReducer = combineReducers({
  auth: authSlice,
  contacts: contactsSlice,
  filter: filtersSlice,
});

export default rootReducer;
