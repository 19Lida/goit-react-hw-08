import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsSlice from "./contacts/contactsSlice";
import filtersSlice from "./filters/filtersSlice";
import authSlice from "./auth/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};
const persistedAuthReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsSlice,
    filter: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   persistReducer,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // import authReducer from "./auth/slice";
// import rootReducer from "./root-reducer";
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["token"],
// };
// const persistedAuthReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   // auth: persistedAuthReducer,
//   reducer: persistedAuthReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
