import { configureStore } from '@reduxjs/toolkit';
import { persistedContactsReducer } from './contactSlice.js';
import { persistedAuthReducer } from './auth/authSlice.js';
import { filterReducer } from './filterSlice.js';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
    auth: persistedAuthReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
