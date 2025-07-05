import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import appSlices from './slices/appSlice.js';  // Add .js extension for ES modules

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  }
});

const storage = typeof window !== 'undefined'
  ? createWebStorage('local')
  : createNoopStorage();

const rootReducer = combineReducers({
  app: appSlices
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [] // only that's reducer will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/PURGE',
          'persist/REGISTER'
        ],
      },
    }), // ✅ Fixed: Use getDefaultMiddleware instead of manual array
});

export const persistor = persistStore(store);