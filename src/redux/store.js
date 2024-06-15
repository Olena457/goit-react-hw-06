import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PURGE,
  REHYDRATE,
  REGISTER,
  PERSIST,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

const contactsConfig = {
  key: 'item',
  version: 1,
  storage,
};
export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
      },
    }),
});
export const persistor = persistStore(store);
