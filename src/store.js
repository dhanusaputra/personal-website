import { configureStore } from '@reduxjs/toolkit';

import langReducer from './reducers/langReducer';

const store = configureStore({
  reducer: langReducer,
});

export default store;
