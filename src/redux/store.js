import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'contacts',
    storage,
  };
  
  const rootReduser = combineReducers({
    contacts: persistReducer(persistConfig, contactsSlice),
  });
 
  
  export const store = configureStore({
    reducer: rootReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  
  export const persistor = persistStore(store);